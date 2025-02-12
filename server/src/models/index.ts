import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { FavoriteBookFactory, FavoriteMovieFactory } from './favorites.js';

const User = UserFactory(sequelize);
const FavoriteMovie = FavoriteMovieFactory(sequelize);
const FavoriteBook = FavoriteBookFactory(sequelize);

User.hasMany(FavoriteMovie, {
    foreignKey: 'userId',
    as: 'favorite_movies',
    onDelete: 'CASCADE',
});

FavoriteMovie.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
});

User.hasMany(FavoriteBook, {
    foreignKey: 'userId',
    as: 'favorite_books',
    onDelete: 'CASCADE',
});

FavoriteBook.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
});


export { User, FavoriteMovie, FavoriteBook };
