import React from 'react';
import Auth from '../utils/auth';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';



const NavBar: React.FC = () => {
    const currentPage = useLocation().pathname;
    const [loggedIn, _setLoggedIn] = useState(Auth.loggedIn());
    const handlelogout = () => {
        Auth.logout();
    }
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <div className="navbar-brand">
                <h1>Filmbound</h1>
            </div>  
            <div className="navbar-menu nav justify-content-end">
                <ul className="nav-item">
                <Link
                    to="/"

                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </Link>
                </ul>
            <ul className="nav-item">
                {loggedIn && <Link
                    to="/FavoritesPage"

                    className={currentPage === '/FavoritesPage' ? 'nav-link active' : 'nav-link'}
                >
                    Favorites
                </Link>}
            </ul>
            <ul className='nav-item'>
            {loggedIn && <button className="logout-button" onClick={handlelogout}>
                Logout
            </button>}
            </ul>
        </div>
        </nav>
    );
};

export default NavBar;