import pool from '../db/connection';

export interface User {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  created_at: Date;
}

export interface CreateUserInput {
  username: string;
  email: string;
  password_hash: string;
}

export const createUser = async (
  input: CreateUserInput
): Promise<User> => {
  const result = await pool.query(
    'INSERT INTO Users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
    [input.username, input.email, input.password_hash]
  );

  return result.rows[0];
};

export const getUserById = async (id: number): Promise<User | null> => {
  const result = await pool.query(
    'SELECT * FROM Users WHERE id = $1',
    [id]
  );

  return result.rows.length > 0 ? result.rows[0] : null;
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const result = await pool.query(
    'SELECT * FROM Users WHERE email = $1',
    [email]
  );

  return result.rows.length > 0 ? result.rows[0] : null;
};

export const getUserByUsername = async (username: string): Promise<User | null> => {
  const result = await pool.query(
    'SELECT * FROM Users WHERE username = $1',
    [username]
  );

  return result.rows.length > 0 ? result.rows[0] : null;
};