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

interface favoriteItems {
  id: string;
  title: string;
  isFavorited: boolean;
}


const HomePage: React.FC = () => {
  const [inputName, setInputName] = useState("");
  const [bookData, setBookData] = useState<Book[]>([]);
  const [movieData, setMovieData] = useState([]);

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
      {/* <h1>Homepage</h1> */}

      <form>
        <div id="titleSearchInput" className="w-75">
          <label htmlFor="name">Search for a Movie or Book...</label>
          <br></br>
          <input
            className="form-control form-control-lg rounded-pill shadow-lg w-75"
            type="text"
            id="name"
            name="name" required
            value={inputName}
            onChange={(event) => {
              setInputName(event.target.value)
            }}></input>
        </div>
        <button onClick={handleFormSubmit} type="submit">Search</button>
      </form>

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
        {bookData.map((book) => (
          <FavoriteButton
            key={book.id}
            id={book.id}
            itemId={book.id}
            isFavorited={book.isFavorited}
            toggleFavorite={(id) => toggleFavorite(id, 'movie')}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;


// Save to local storage localstorage.setitem("favorites", JSON.stringify(favorites))
// Get from local storage const favorites = JSON.parse(localstorage.getitem("favorites")) || []