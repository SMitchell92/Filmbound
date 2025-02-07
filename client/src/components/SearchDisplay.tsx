import { useEffect } from "react";

function SearchDisplay(props: any) {
    useEffect(() => {
        console.log(props);
        }, [props])
    return (
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
