import { NextResponse } from 'next/server';
import { getPool, ensureClientsTable } from '@/lib/db';
import { sendFallbackEmail } from '@/lib/email';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validatePayload(body: unknown) {
  if (typeof body !== 'object' || body === null) return null;
  const { name, email, telegram, botType, description, wantTest, source } = body as Record<string, unknown>;

  if (typeof name !== 'string' || name.trim().length === 0) return null;
  if (typeof email !== 'string' || !emailRegex.test(email)) return null;

  return {
    name: name.trim(),
    email: email.trim(),
    telegram: typeof telegram === 'string' ? telegram.trim() : undefined,
    botType: typeof botType === 'string' ? botType.trim() : undefined,
    description: typeof description === 'string' ? description.trim() : undefined,
    wantTest: Boolean(wantTest),
    source: typeof source === 'string' && source.trim().length > 0 ? source.trim() : 'landing-page'
  };
}

export async function POST(request: Request) {
  let parsed;
  try {
    parsed = validatePayload(await request.json());
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (!parsed) {
    return NextResponse.json({ error: 'Name and valid email are required.' }, { status: 400 });
  }

  const { name, email, telegram, botType, description, wantTest, source } = parsed;

  const client = getPool();
  try {
    if (client) {
      await ensureClientsTable();
      await client.query(
        'INSERT INTO clients (name, email, telegram, use_case, description, want_test, source) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [name, email, telegram || null, botType || null, description || null, Boolean(wantTest), source]
      );
    }
  } catch (error) {
    console.error('DB insert failed, falling back to email', error);
    try {
      await sendFallbackEmail({ name, email, telegram, botType, description, wantTest, source });
      return NextResponse.json({ message: 'Saved via email fallback.' }, { status: 202 });
    } catch (emailError) {
      console.error('Email fallback also failed', emailError);
      return NextResponse.json({ error: 'Unable to save submission right now.' }, { status: 500 });
    }
  }

  if (!client) {
    try {
      await sendFallbackEmail({ name, email, telegram, botType, description, wantTest, source });
      return NextResponse.json({ message: 'Email fallback sent.' }, { status: 202 });
    } catch (error) {
      console.error('Email fallback failed without DB', error);
      return NextResponse.json({ error: 'Unable to save submission right now.' }, { status: 500 });
    }
  }

  return NextResponse.json({ message: 'Saved to clients table.' });
}
