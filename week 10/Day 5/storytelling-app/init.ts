import pool from './connection';
import fs from 'fs';
import path from 'path';

async function initializeDatabase() {
  try {
    // Read the schema file
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf-8');

    // Execute the schema
    await pool.query(schema);

    console.log('Database initialized successfully!');
    console.log('Tables created: Users, Stories, Contributors');

    // Close the pool
    await pool.end();
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
}

initializeDatabase();