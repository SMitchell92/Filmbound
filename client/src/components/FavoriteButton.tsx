import React from 'react';


interface FavoriteButtonProps {
    id: string;
    itemId: string;
    isFavorited: boolean;
    toggleFavorite: (id: string) => void;
};

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ id, isFavorited, toggleFavorite }) => {
    return (
        <button onClick={() => toggleFavorite(id)}>
            {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
        </button>
    );
};



export default FavoriteButton;