const { Pool } = require('pg');
const http = require('http');
require('dotenv').config({ path: require('path').join(__dirname, '../.env.local') });

const url = process.env.DATABASE_URL;
console.log('URL prefix:', url ? url.substring(0, 30) + '...' : 'MISSING');

const pool = new Pool({ connectionString: url, ssl: { rejectUnauthorized: false }, connectionTimeoutMillis: 10000 });

async function main() {
  try {
    const r = await pool.query("SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname='public'");
    console.log(JSON.stringify({ tables: r.rows.map(x => x.tablename) }));
    const u = await pool.query('SELECT id,email,role FROM users');
    console.log(JSON.stringify({ users: u.rows }));
  } catch (e) {
    console.log('Error:', e.message);
    console.log('Code:', e.code);
  }
  await pool.end();
  process.exit(0);
}
main();
