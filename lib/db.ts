import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;
let pool: Pool | null = null;

export function getPool() {
  if (!connectionString) return null;
  if (!pool) {
    pool = new Pool({ connectionString, max: 2, ssl: process.env.PGSSLMODE === 'require' ? { rejectUnauthorized: false } : undefined });
  }
  return pool;
}

export async function ensureClientsTable() {
  const client = getPool();
  if (!client) return;
  await client.query(`
    CREATE TABLE IF NOT EXISTS clients (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      telegram VARCHAR(255),
      use_case VARCHAR(255),
      description TEXT,
      want_test BOOLEAN DEFAULT false,
      source VARCHAR(255),
      created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    );
  `);
}
