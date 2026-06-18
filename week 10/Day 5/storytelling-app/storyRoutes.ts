import { Router } from 'express';
import {
  getAllStoriesHandler,
  createStoryHandler,
  updateStoryHandler,
  deleteStoryHandler,
} from '../controllers/storyController';
import { authenticateToken } from '../middleware/auth';
import { authorizeStoryAuthor, authorizeStoryAuthorOrCollaborator } from '../middleware/authorize';

const router = Router();

router.use(authenticateToken); // All story routes require authentication

router.get('/', getAllStoriesHandler);
router.post('/', createStoryHandler);
router.patch('/:storyId', authorizeStoryAuthorOrCollaborator, updateStoryHandler);
router.delete('/:storyId', authorizeStoryAuthor, deleteStoryHandler);

export default router;