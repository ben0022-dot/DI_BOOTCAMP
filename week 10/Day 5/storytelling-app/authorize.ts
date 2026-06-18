import { Request, Response, NextFunction } from 'express';
import pool from '../db/connection';
import { AuthenticatedRequest } from './auth';

export const authorizeStoryAuthor = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const { user } = req;
  const { storyId } = req.params;

  if (!user) {
    res.status(403).json({ message: 'User not authenticated.' });
    return;
  }

  pool.query(
    'SELECT author_id FROM Stories WHERE id = $1',
    [storyId],
    (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Database error occurred.' });
        return;
      }

      if (result.rows.length === 0) {
        res.status(404).json({ message: 'Story not found.' });
        return;
      }

      const storyAuthorId = result.rows[0].author_id;

      if (user.userId !== storyAuthorId) {
        res.status(403).json({ message: 'You are not authorized to perform this action. Only the author can delete this story.' });
        return;
      }

      next();
    }
  );
};

export const authorizeStoryAuthorOrCollaborator = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const { user } = req;
  const { storyId } = req.params;

  if (!user) {
    res.status(403).json({ message: 'User not authenticated.' });
    return;
  }

  pool.query(
    'SELECT author_id FROM Stories WHERE id = $1',
    [storyId],
    (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Database error occurred.' });
        return;
      }

      if (result.rows.length === 0) {
        res.status(404).json({ message: 'Story not found.' });
        return;
      }

      const storyAuthorId = result.rows[0].author_id;

      // Check if user is the author
      if (user.userId === storyAuthorId) {
        next();
        return;
      }

      // Check if user is a collaborator
      pool.query(
        'SELECT 1 FROM Contributors WHERE story_id = $1 AND user_id = $2',
        [storyId, user.userId],
        (err, collaboratorResult) => {
          if (err) {
            res.status(500).json({ message: 'Database error occurred.' });
            return;
          }

          if (collaboratorResult.rows.length > 0) {
            next();
          } else {
            res.status(403).json({ message: 'You are not authorized to perform this action. Only the author and collaborators can edit this story.' });
          }
        }
      );
    }
  );
};