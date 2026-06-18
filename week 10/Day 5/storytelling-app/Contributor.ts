import pool from '../db/connection';

export interface Contributor {
  id: number;
  story_id: number;
  user_id: number;
  created_at: Date;
}

export interface CreateContributorInput {
  story_id: number;
  user_id: number;
}

export const createContributor = async (
  input: CreateContributorInput
): Promise<Contributor> => {
  const result = await pool.query(
    `INSERT INTO Contributors (story_id, user_id) VALUES ($1, $2) RETURNING *`,
    [input.story_id, input.user_id]
  );

  return result.rows[0];
};

export const getContributorsByStoryId = async (storyId: number): Promise<Contributor[]> => {
  const result = await pool.query(
    `SELECT * FROM Contributors WHERE story_id = $1 ORDER BY created_at DESC`,
    [storyId]
  );

  return result.rows;
};

export const getContributorById = async (id: number): Promise<Contributor | null> => {
  const result = await pool.query(
    `SELECT * FROM Contributors WHERE id = $1`,
    [id]
  );

  return result.rows.length > 0 ? result.rows[0] : null;
};

export const isContributor = async (
  storyId: number,
  userId: number
): Promise<boolean> => {
  const result = await pool.query(
    `SELECT 1 FROM Contributors WHERE story_id = $1 AND user_id = $2`,
    [storyId, userId]
  );

  return result.rows.length > 0;
};

export const deleteContributor = async (id: number): Promise<boolean> => {
  const result = await pool.query(
    `DELETE FROM Contributors WHERE id = $1`,
    [id]
  );

  return result.rowCount > 0;
};

export const deleteContributorByStoryAndUser = async (
  storyId: number,
  userId: number
): Promise<boolean> => {
  const result = await pool.query(
    `DELETE FROM Contributors WHERE story_id = $1 AND user_id = $2`,
    [storyId, userId]
  );

  return result.rowCount > 0;
};