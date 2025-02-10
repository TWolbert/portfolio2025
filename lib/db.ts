import mysql from 'mysql2/promise';

// Create a connection pool to reuse connections and improve performance.
// Storing sensitive credentials in environment variables is a crucial security best practice.
const pool = mysql.createPool({
  host: process.env.DB_HOST,      // e.g., 'localhost'
  user: process.env.DB_USER,      // your MySQL username
  password: process.env.DB_PASSWORD,  // your MySQL password
  database: process.env.DB_NAME,  // your MySQL database name
  waitForConnections: true,
  connectionLimit: 10,            // adjust based on your server capabilities
  queueLimit: 0,
});

export default pool;