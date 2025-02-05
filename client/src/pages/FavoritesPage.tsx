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
        </div>
    );
};

export default FavoritesPage;