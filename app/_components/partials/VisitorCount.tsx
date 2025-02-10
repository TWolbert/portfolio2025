// components/VisitorsCount.js

import pool from "@/lib/db";


// Ensure dynamic rendering so that the visitor count is always fresh.
export const dynamic = 'force-dynamic';

// Helper function to fetch the visitor count from the database
async function fetchVisitorCount() {
  try {
    const [rows] = await pool.query('SELECT COUNT(*) AS count FROM logs');
    console.log(rows);

    const newRows: [{ count: number }] = rows as unknown as [{ count: number }];
    return newRows[0].count;
  } catch (error) {
    console.error('Error fetching visitor count:', error);
    return 0;
  }
}

// Server component that shows the visitor count
export default async function VisitorsCount() {
  const count = await fetchVisitorCount();
  
  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <h2>Visitor Count</h2>
      <p>{count} visits</p>
    </div>
  );
}