import React, { useEffect } from 'react';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getBooks } from '../../../server/src/routes/api/bookApi';
import SearchDisplay from '../components/SearchDisplay';
import { getMovies } from '../api/movieApi.js';

const HomePage: React.FC = () => {
  const [inputName, setInputName] = useState("");
  const [bookData, setBookData] = useState([]);
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


  return (
    <div>
      <h1>Homepage</h1>

      <form>
        <div id="titleSearchInput">
          <label htmlFor="name">Movie/Book Title</label>
          <input
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
        />

        <hr />

        <SearchDisplay
          bookData={bookData}
        />
      </div>

    </div>
  );
};

export default HomePage;