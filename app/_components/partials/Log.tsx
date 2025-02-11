import pool from '@/lib/db';
import { headers } from 'next/headers';

// Force dynamic rendering to ensure this runs on every request.
export const dynamic = 'force-dynamic';

export default async function Log() {
  // Get headers from the request.
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || 'unknown';
  const ip = headersList.get('x-forwarded-for') || 'unknown';

  // If the IP is unknown, you might want to skip logging entirely.
  if (ip === 'unknown') return null;

  try {
    // Check if this IP already exists in the logs table.
    // Using SELECT 1 is slightly more efficient since we don't need to retrieve all columns.
    const [existingLogs] = await pool.query(
      'SELECT 1 FROM logs WHERE ip = ? LIMIT 1',
      [ip]
    );

    // If no record is found, the IP is unique so we insert it.
    if (Array.isArray(existingLogs) && existingLogs.length === 0) {
      await pool.query(
        'INSERT INTO logs (user_agent, ip) VALUES (?, ?)',
        [userAgent, ip]
      );
    }
  } catch (error) {
    console.error('Error inserting log:', error);
  }

  // This component doesn't render anything visible.
  return null;
}
