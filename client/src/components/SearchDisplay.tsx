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
    )
  }
  
  export default SearchDisplay;
