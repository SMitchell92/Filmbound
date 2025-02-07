import { useEffect } from "react";

function SearchDisplay(props: any) {
    useEffect(() => {
        console.log(props);
        }, [props])
    return (
        <>
        {props.bookData.map((result: any) => (
            <p>{result.volumeInfo.title}</p>
           
        ))}
       </>
    )
  }
  
  export default SearchDisplay;
