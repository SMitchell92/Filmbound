import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';
import { User } from './index.js'; // Import the User model

interface IFavoriteBookAttributes {
    id: number;
    title: string;
    userId: number;
}

interface IFavoriteBookCreationAttributes extends Optional<IFavoriteBookAttributes, 'id'> {}

class FavoriteBook extends Model<IFavoriteBookAttributes, IFavoriteBookCreationAttributes> implements IFavoriteBookAttributes {
    public id!: number;
    public title!: string;
    public userId!: number;
}

export function FavoriteBookFactory(sequelize: Sequelize): typeof FavoriteBook {
    FavoriteBook.init(
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
            userId: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: User, // Reference to User model
                    key: 'id',
                },
            },
        },
        {
            tableName: 'favorite_books',
            sequelize,
        }
    );

    return FavoriteBook;
}

interface IFavoriteMovieAttributes {
    id: number;
    title: string;
    userId: number;
}

interface IFavoriteMovieCreationAttributes extends Optional<IFavoriteMovieAttributes, 'id'> {}

class FavoriteMovie extends Model<IFavoriteMovieAttributes, IFavoriteMovieCreationAttributes> implements IFavoriteMovieAttributes {
    public id!: number;
    public title!: string;
    public userId!: number;
}

export function FavoriteMovieFactory(sequelize: Sequelize): typeof FavoriteMovie {
    FavoriteMovie.init(
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
            userId: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: User, // Reference to User model
                    key: 'id',
                },
            },
        },
        {
            tableName: 'favorite_movies',
            sequelize,
        }
    );

    return FavoriteMovie;
}

export { FavoriteBook, FavoriteMovie, IFavoriteBookAttributes, IFavoriteMovieAttributes };
