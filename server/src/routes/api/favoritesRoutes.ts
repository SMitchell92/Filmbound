//Express route to get all favorites for a user

import express from 'express';
import type { Request, Response } from 'express';
import { FavoriteMovie, FavoriteBook } from '../../models/index.js';

const router = express.Router();

// Create new favorite book
router.post('/books', async (req: Request, res: Response) => {
  const { title, userId } = req.body;
  try {
    const newFavoriteBook = await FavoriteBook.create({ title, userId });
    res.status(201).json(newFavoriteBook);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// Create new favorite movie
router.post('/movies', async (req: Request, res: Response) => {
  const { title, userId } = req.body;
  try {
    const newFavoriteMovie = await FavoriteMovie.create({ title, userId });
    res.status(201).json(newFavoriteMovie);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// Get all favorite books for a user
router.get('/books/:userId', async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const favoriteBooks = await FavoriteBook.findAll({
      where: { userId },
    });
    res.json(favoriteBooks);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Get all favorite movies for a user
router.get('/movies/:userId', async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const favoriteMovies = await FavoriteMovie.findAll({
      where: { userId },
    });
    res.json(favoriteMovies);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a favorite book for a user
router.delete('/books/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const favoriteBook = await FavoriteBook.findByPk(id);
    if (favoriteBook) {
      await favoriteBook.destroy();
      res.json({ message: 'Favorite book deleted' });
    } else {
      res.status(404).json({ message: 'Favorite book not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a favorite movie for a user
router


export default router;
//Express route to delete a favorite movie for a user