import { Response } from 'express';
import { AuthenticatedRequest } from '../middleware/auth';
import {
  createContributor,
  getContributorsByStoryId,
  deleteContributor,
  deleteContributorByStoryAndUser,
  isContributor,
  CreateContributorInput,
} from '../models/Contributor';
import { getStoryById } from '../models/Story';
import { validateContributor } from '../helpers/validation';

export const addContributorHandler = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { story_id, user_id } = req.body;
  const userId = req.user?.userId;

  if (!userId) {
    res.status(403).json({ message: 'Authentication required.' });
    return;
  }

  // Validate input
  const validation = validateContributor(story_id, user_id);
  if (!validation.valid) {
    res.status(400).json({ message: validation.message });
    return;
  }

  try {
    const story = await getStoryById(story_id);
    if (!story) {
      res.status(404).json({ message: 'Story not found.' });
      return;
    }

    // Only author can add contributors
    if (story.author_id !== userId) {
      res.status(403).json({
        message: 'You are not authorized to add contributors. Only the author can add contributors.',
      });
      return;
    }

    // Check if user is already a contributor
    const alreadyContributor = await isContributor(story_id, user_id);
    if (alreadyContributor) {
      res.status(400).json({ message: 'User is already a contributor to this story.' });
      return;
    }

    const contributorInput: CreateContributorInput = {
      story_id,
      user_id,
    };

    const contributor = await createContributor(contributorInput);

    res.status(201).json({
      message: 'Contributor added successfully.',
      contributor,
    });
  } catch (error) {
    console.error('Add contributor error:', error);
    res.status(500).json({
      message: 'An error occurred while adding the contributor.',
    });
  }
};

export const getContributorsHandler = async (
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

    const contributors = await getContributorsByStoryId(Number(storyId));

    res.json(contributors);
  } catch (error) {
    console.error('Get contributors error:', error);
    res.status(500).json({
      message: 'An error occurred while fetching contributors.',
    });
  }
};

export const removeContributorHandler = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const userId = req.user?.userId;

  if (!userId) {
    res.status(403).json({ message: 'Authentication required.' });
    return;
  }

  try {
    const contributor = await getContributorById(Number(id));
    if (!contributor) {
      res.status(404).json({ message: 'Contributor not found.' });
      return;
    }

    const story = await getStoryById(contributor.story_id);
    if (!story) {
      res.status(404).json({ message: 'Story not found.' });
      return;
    }

    // Only author can remove contributors
    if (story.author_id !== userId) {
      res.status(403).json({
        message: 'You are not authorized to remove contributors. Only the author can remove contributors.',
      });
      return;
    }

    await deleteContributor(Number(id));

    res.json({ message: 'Contributor removed successfully.' });
  } catch (error) {
    console.error('Remove contributor error:', error);
    res.status(500).json({
      message: 'An error occurred while removing the contributor.',
    });
  }
};