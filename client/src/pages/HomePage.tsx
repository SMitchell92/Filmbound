import React, { useEffect } from 'react';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getBooks } from '../../../server/src/routes/api/bookApi';
import SearchDisplay from '../components/SearchDisplay';
import { getMovies } from '../api/movieApi.js';
import FavoriteButton from '../components/FavoriteButton';

interface Book {
  readonly id: string;
  readonly isFavorited: boolean;
  readonly Title: string | null;
  readonly Author: string | null;
  readonly Poster: string | null;
  readonly Genre: string | null;
}

interface Film {
  readonly Title: string | null;
  readonly Director: string | null;
  readonly Poster: string | null;
  readonly Genre: string | null;
}

// interface favoriteItems {
//   id: string;
//   title: string;
//   isFavorited: boolean;
// }
// MIGHT NEED THIS LATER

const HomePage: React.FC = () => {
  const [inputName, setInputName] = useState("");
  const [bookData, setBookData] = useState<Book[]>([]);
  const [movieData, setMovieData] = useState<Film[]>([]);

  const navigate = useNavigate()
  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate('/login');
    }
  }, [])

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    const moviesResponse: any = await getMovies(inputName);
    const response = await getBooks(inputName);
    console.log(moviesResponse);
    setBookData(response.items);
    setMovieData(moviesResponse.results)
  }

  const toggleFavorite = (id: string, type: "book" | "movie") => {
    if (type === "book") {
      setBookData((prevData) =>
        prevData.map((item: any) =>
          item.id === id ? { ...item, isFavorited: !item.isFavorited } : item

        )
      );
    } else {
      setMovieData((prevData) =>
        prevData.map((item: any) =>
          item.id === id ? { ...item, isFavorited: !item.isFavorited } : item

        )
      );
    }
  }


  return (
    <div>
    <div className="d-flex justify-content-center align-items-center">
      {/* <h1>Homepage</h1> */}
      <form className="w-100">
      <div className="mb-3 fs-4" id="name">Search for a Movie or Book...</div>
        <div id="titleSearchInput" className="d-flex justify-content-center w-100">
          <br></br>
          <input
            className="form-control form-control-lg rounded-pill shadow-lg w-50"
            type="text"
            id="name"
            name="name" required
            value={inputName}
            onChange={(event) => {
              setInputName(event.target.value)
            }}></input>
        </div>
        <button onClick={handleFormSubmit} type="submit" className="fs-5">Search</button>
      </form>
      </div>

      <div style={{
        display: "flex",
        flexDirection: "row",

      }}>
        <SearchDisplay
          movieData={movieData}
          toggleFavorite={toggleFavorite}
        />

        <hr />

        <SearchDisplay
          bookData={bookData}
          toggleFavorite={toggleFavorite}
        />
      </div>

      <div>
        <h2>Favorites</h2>
        {bookData.length > 0 && (
          <FavoriteButton
            key={bookData[0].id}
            id={bookData[0].id}
            itemId={bookData[0].id}
            isFavorited={bookData[0].isFavorited}
            toggleFavorite={(id) => toggleFavorite(id, 'book')}
          />
        )}
      </div>
    </div>
    // </div>
  );
}

export default HomePage;


// Save to local storage localstorage.setitem("favorites", JSON.stringify(favorites))
// Get from local storage const favorites = JSON.parse(localstorage.getitem("favorites")) || []



// THESE ARE NOT IMPORTANT JUST SOMETHING TO LOOK AT IN CASE IT MIGHT HELP

// useEffect(() => {
//   const existingFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
//   const updatedFavorites = [...existingFavorites, ...favorites.filter(fav => !existingFavorites.some((existingFav: any) => existingFav.id === fav.id))];
//   localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
// }, [favorites]);

// const handleFormSubmit = async (event: any) => {
//   event.preventDefault();
//   const moviesResponse: any = await getMovies(inputName);
//   const response = await getBooks(inputName);
//   console.log(moviesResponse);
//   setBookData(response.items);
//   setMovieData(moviesResponse.results);
// };

// const toggleFavorite = (id: string, type: "book" | "movie") => {
//   if (type === "book") {
//     setBookData((prevData) =>
//       prevData.map((item: any) =>
//         item.id === id ? { ...item, isFavorited: !item.isFavorited } : item
//       )
//     );
//   } else {
//     setMovieData((prevData) =>
//       prevData.map((item: any) =>
//         item.id === id ? { ...item, isFavorited: !item.isFavorited } : item
//       )
//     );
//   }

//   const item = type === "book" ? bookData.find((item) => item.id === id) : movieData.find((item) => item.id === id);
//   if (item) {
//     setFavorites((prevFavorites) => {
//       const isFavorited = !item.isFavorited;
//       if (isFavorited) {
//         return [...prevFavorites, { id: item.id, title: item.Title || "", isFavorited }];
//       } else {
//         return prevFavorites.filter((fav) => fav.id !== item.id);
//       }
//     });
//   }
// };