import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isbot } from 'isbot';

export function middleware(request: NextRequest) {
    // Retrieve the user-agent header from the incoming request.
    const userAgent = request.headers.get('user-agent');

    // Check if the user-agent is either missing or identified as a bot by isbot.
    if (!userAgent || isbot(userAgent)) {
        // If the request is from a bot or user-agent is absent, block the request.
        return new NextResponse('Access Denied', { status: 403 });
    }

    // If it's a genuine human request, let it pass through.
    return NextResponse.next();
}

// This configuration applies the middleware to all routes.
// You can adjust the matcher value to restrict this middleware to specific paths if needed.
export const config = {
    matcher: '/:path*',
};
