import React, {useEffect} from 'react';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HomePage: React.FC = () => {
    const [inputName, setInputName] = useState("");
    const navigate = useNavigate()
    useEffect(() => {
        if (!Auth.loggedIn()) {
            navigate('/login');
        }}, [])

    return (
        <div>
            <h1>Homepage</h1>

            <form>
            <div id="titleSearchInput">
          <label htmlFor="name">Movie Title</label>
          <input
            type="text"
            id="name"
            name="name" required
            value={inputName}
            onChange={(event) => {
              setInputName(event.target.value)
            }}></input> 
            <button type="submit">Search</button>
            </div>

            <div id="titleSearchInput">
          <label htmlFor="name">Book Title</label>
          <input
            type="text"
            id="name"
            name="name" required
            value={inputName}
            onChange={(event) => {
              setInputName(event.target.value)
            }}></input> 
            <button type="submit">Search</button>
            </div>
            </form>
        </div>
    );
};

export default HomePage;