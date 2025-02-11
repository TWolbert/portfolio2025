import pool from '@/lib/db';
import { headers } from 'next/headers';

// Force dynamic rendering to ensure this runs on every request.
export const dynamic = 'force-dynamic';

export default async function Log() {
  return;

  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || 'unknown';
  
  const ip = headersList.get('x-forwarded-for') || 'unknown';

  try {
    await pool.query(
      'INSERT INTO logs (user_agent, ip) VALUES (?, ?)',
      [userAgent, ip]
    );
  } catch (error) {
    console.error('Error inserting log:', error);
  }

  // This component doesn't render anything visible.
  return null;
}