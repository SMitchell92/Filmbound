/* import { useEffect, useState } from "react"; */

function SearchDisplay(props: any) {

/*     const [items, setItems] = useState([]);

    useEffect(() => {
        console.log(props);

        if(props.bookData) {
            setItems(props.bookData);
        } else {
            setItems(props.movieData);
        }
        }, [props]) */
    return (

        <div>
        {
            props.bookData ?
            (
                props.bookData.map((result: any) => (
                    <p>{result.volumeInfo.title}</p>
                   
                ))
            ) : (
                props.movieData.map((result: any, index: number) => (
                    <div>
                        {
                            index === 0 ? 
                            (
                                <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt="movie poster" />
                            ) : null
                        }
                        <p>{result.title}</p>
                    </div>
                ))
            )
        }
       </div>

        <>
        {props.bookData.length > 0 ? 
            <section className="book-card">
                 <h2>{props.bookData[0].volumeInfo.title}</h2>
                <figure>
                    <img src = {props.bookData[0].volumeInfo.imageLinks.thumbnail} alt={`${props.bookData[0].volumeInfo.title} book cover`}/>
                </figure>
                <article>
                   
                    <p>{props.bookData[0].volumeInfo.authors}</p>
                    <p>{props.bookData[0].volumeInfo.categories}</p>
                </article>
            </section>: null
        }
       </>

    )
  }
  
  export default SearchDisplay;
