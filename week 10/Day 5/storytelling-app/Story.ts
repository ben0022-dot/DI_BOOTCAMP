import pool from '../db/connection';

export interface Story {
  id: number;
  title: string;
  content: string;
  author_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface CreateStoryInput {
  title: string;
  content: string;
  author_id: number;
}

export interface UpdateStoryInput {
  title?: string;
  content?: string;
}

export const createStory = async (
  input: CreateStoryInput
): Promise<Story> => {
  const result = await pool.query(
    'INSERT INTO Stories (title, content, author_id) VALUES ($1, $2, $3) RETURNING *',
    [input.title, input.content, input.author_id]
  );

  return result.rows[0];
};

export const getAllStories = async (): Promise<Story[]> => {
  const result = await pool.query(
    'SELECT * FROM Stories ORDER BY created_at DESC'
  );

  return result.rows;
};

export const getStoryById = async (id: number): Promise<Story | null> => {
  const result = await pool.query(
    'SELECT * FROM Stories WHERE id = $1',
    [id]
  );

  return result.rows.length > 0 ? result.rows[0] : null;
};

export const getStoriesByAuthorId = async (authorId: number): Promise<Story[]> => {
  const result = await pool.query(
    'SELECT * FROM Stories WHERE author_id = $1 ORDER BY created_at DESC',
    [authorId]
  );

  return result.rows;
};

export const updateStory = async (
  id: number,
  input: UpdateStoryInput
): Promise<Story | null> => {
  const { title, content } = input;
  
  const result = await pool.query(
    `UPDATE Stories 
     SET title = COALESCE($1, title), 
         content = COALESCE($2, content), 
         updated_at = CURRENT_TIMESTAMP 
     WHERE id = $3 
     RETURNING *`,
    [title, content, id]
  );

  return result.rows.length > 0 ? result.rows[0] : null;
};

export const deleteStory = async (id: number): Promise<boolean> => {
  const result = await pool.query(
    'DELETE FROM Stories WHERE id = $1',
    [id]
  );

  return result.rowCount > 0;
};