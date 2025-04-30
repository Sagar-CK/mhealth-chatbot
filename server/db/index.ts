import postgres from 'postgres'
import dotenv from 'dotenv';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;
console.log(databaseUrl)
if (!databaseUrl) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const sql = postgres(databaseUrl, {
  ssl: { rejectUnauthorized: false },
  prepare: false
});

export default sql;