import { NextResponse } from 'next/server';

export async function POST() {
  try {
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in sign-out route:', error);
    return NextResponse.json(
      { error: 'Failed to sign out' },
      { status: 500 }
    );
  }
} 