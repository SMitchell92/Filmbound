import React from 'react';
import Auth from '../utils/auth';
import { useState } from 'react';
/* import { Link } from 'react-router-dom'; */

const NavBar: React.FC = () => {
    const [loggedIn, _setLoggedIn] = useState(Auth.loggedIn());
    const handlelogout = () => {
        Auth.logout();
    }
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Filmbound</h1>
            </div>
            <div className="navbar-menu">
               { loggedIn&& <button className="logout-button" onClick={handlelogout}>
                    Logout
                </button>}
            </div>
        </nav>
    );
};

export default NavBar;