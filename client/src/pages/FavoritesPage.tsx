import React, {useEffect} from 'react';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const FavoritesPage: React.FC = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!Auth.loggedIn()) {
            navigate('/login');
        }}, [])

    return (
        <div>
            <h1>Favorites</h1>
            {/* TODO: display db table of favorite books and movies here */}
        </div>
    );
};

export default FavoritesPage;