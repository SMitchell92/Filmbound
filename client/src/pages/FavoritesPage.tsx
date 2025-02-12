import React, {useEffect, useState} from 'react';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { getUserById } from '../api/userApi';

const FavoritesPage: React.FC = () => {
    const [userData, setUserData] = useState<any>(null);
    const navigate = useNavigate()
    useEffect(() => {
        if (!Auth.loggedIn()) {
            navigate('/login');
        }
        getUserById(parseInt((Auth.getProfile() as { id: string }).id))
        .then(data => {
            setUserData(data);
        })
    }, [])

    return (
        <div>
            <h1>Favorites</h1>
            {/* TODO: display db table of favorite books and movies here */}
            <div>
                <h2> Favorite Movies </h2>
                <div>
                    {userData?.favorite_movies.map((movie: any) => ( 
                        <div key={movie.id}>
                            <p>{movie.title}</p>
                        </div>
                     ))}
                </div>
                <div>
                    <h2> Favorite Books </h2>
                    {userData?.favorite_books.map((book: any) => (
                        <div key={book.id}>
                            <p>{book.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FavoritesPage;