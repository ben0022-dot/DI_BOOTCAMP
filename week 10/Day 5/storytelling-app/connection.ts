import dotenv from 'dotenv';
import { Pool, PoolConfig } from 'pg';

dotenv.config();

const config = {
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
} as any;

const pool = new Pool(config as PoolConfig);

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
});

export default pool;