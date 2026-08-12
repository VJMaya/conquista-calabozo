// app/api/auth/guest/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { GuestLoginSchema } from '@/types/api';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = GuestLoginSchema.parse(body);

    const user = await prisma.user.create({
      data: {
        displayName: validated.displayName,
        avatarKey: validated.avatarKey,
        roleClass: validated.avatarKey,
        isConnected: true,
      },
    });

    return NextResponse.json(
      {
        userId: user.id,
        displayName: user.displayName,
        avatarKey: user.avatarKey,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in guest login:', error);
    return NextResponse.json(
      { error: 'Error creating guest user' },
      { status: 400 }
    );
  }
}
