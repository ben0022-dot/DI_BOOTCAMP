import { Response } from 'express';
import { AuthenticatedRequest } from '../middleware/auth';
import {
  createStory,
  getAllStories,
  getStoryById,
  updateStory,
  deleteStory,
  CreateStoryInput,
  UpdateStoryInput,
  Story,
} from '../models/Story';
import { getContributorsByStoryId, isContributor } from '../models/Contributor';
import { validateStory } from '../helpers/validation';

export const getAllStoriesHandler = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const stories = await getAllStories();

    // Add contributors to each story
    const storiesWithContributors = await Promise.all(
      stories.map(async (story) => {
        const contributors = await getContributorsByStoryId(story.id);
        return {
          ...story,
          contributors: contributors.map((c) => c.user_id),
        };
      })
    );

    res.json(storiesWithContributors);
  } catch (error) {
    console.error('Get all stories error:', error);
    res.status(500).json({ message: 'An error occurred while fetching stories.' });
  }
};

export const createStoryHandler = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { title, content } = req.body;
  const userId = req.user?.userId;

  if (!userId) {
    res.status(403).json({ message: 'Authentication required.' });
    return;
  }

  // Validate input
  const validation = validateStory(title, content);
  if (!validation.valid) {
    res.status(400).json({ message: validation.message });
    return;
  }

  try {
    const storyInput: CreateStoryInput = {
      title,
      content,
      author_id: userId,
    };

    const story = await createStory(storyInput);

    res.status(201).json({
      message: 'Story created successfully.',
      story,
    });
  } catch (error) {
    console.error('Create story error:', error);
    res.status(500).json({ message: 'An error occurred while creating the story.' });
  }
};

export const updateStoryHandler = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { storyId } = req.params;
  const { title, content } = req.body;
  const userId = req.user?.userId;

  if (!userId) {
    res.status(403).json({ message: 'Authentication required.' });
    return;
  }

  // Validate input if provided
  if (title || content) {
    const validation = validateStory(title || '', content || '');
    if (!validation.valid) {
      res.status(400).json({ message: validation.message });
      return;
    }
  }

  try {
    const story = await getStoryById(Number(storyId));
    if (!story) {
      res.status(404).json({ message: 'Story not found.' });
      return;
    }

    // Check authorization
    const isAuthor = story.author_id === userId;
    const isCollaborator = await isContributor(Number(storyId), userId);

    if (!isAuthor && !isCollaborator) {
      res.status(403).json({
        message: 'You are not authorized to edit this story. Only the author and collaborators can edit.',
      });
      return;
    }

    const updateInput: UpdateStoryInput = {
      title: title,
      content: content,
    };

    const updatedStory = await updateStory(Number(storyId), updateInput);

    res.json({
      message: 'Story updated successfully.',
      story: updatedStory,
    });
  } catch (error) {
    console.error('Update story error:', error);
    res.status(500).json({ message: 'An error occurred while updating the story.' });
  }
};

export const deleteStoryHandler = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { storyId } = req.params;
  const userId = req.user?.userId;

  if (!userId) {
    res.status(403).json({ message: 'Authentication required.' });
    return;
  }

  try {
    const story = await getStoryById(Number(storyId));
    if (!story) {
      res.status(404).json({ message: 'Story not found.' });
      return;
    }

    // Only author can delete
    if (story.author_id !== userId) {
      res.status(403).json({
        message: 'You are not authorized to delete this story. Only the author can delete.',
      });
      return;
    }

    await deleteStory(Number(storyId));

    res.json({ message: 'Story deleted successfully.' });
  } catch (error) {
    console.error('Delete story error:', error);
    res.status(500).json({ message: 'An error occurred while deleting the story.' });
  }
};