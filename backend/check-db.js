const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });
const { pool } = require('./db');
async function check() {
  try {
    const tables = await pool.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name");
    console.log('Tables found:');
    for (const t of tables.rows) {
      const cols = await pool.query(
        "SELECT column_name, data_type, is_nullable FROM information_schema.columns WHERE table_schema = 'public' AND table_name = $1 ORDER BY ordinal_position",
        [t.table_name]
      );
      const count = await pool.query('SELECT COUNT(*) FROM "' + t.table_name + '"');
      console.log(' - ' + t.table_name + ' (' + count.rows[0].count + ' rows)');
      cols.rows.forEach(c => console.log('    ' + c.column_name + ' ' + c.data_type + (c.is_nullable === 'YES' ? '' : ' NOT NULL')));
    }
    await pool.end();
  } catch(e) { 
    console.error('Error:', e.message); 
    process.exit(1);
  }
}
check();
