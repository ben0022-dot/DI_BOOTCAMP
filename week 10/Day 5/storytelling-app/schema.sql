-- Create Users table
CREATE TABLE IF NOT EXISTS Users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Stories table
CREATE TABLE IF NOT EXISTS Stories (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  author_id INTEGER NOT NULL REFERENCES Users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Contributors table
CREATE TABLE IF NOT EXISTS Contributors (
  id SERIAL PRIMARY KEY,
  story_id INTEGER NOT NULL REFERENCES Stories(id) ON DELETE CASCADE,
  user_id INTEGER NOT NULL REFERENCES Users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(story_id, user_id)
);

-- Create Indexes for performance
CREATE INDEX IF NOT EXISTS idx_stories_author_id ON Stories(author_id);
CREATE INDEX IF NOT EXISTS idx_contributors_story_id ON Contributors(story_id);
CREATE INDEX IF NOT EXISTS idx_contributors_user_id ON Contributors(user_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON Users(email);