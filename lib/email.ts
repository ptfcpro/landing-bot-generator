import nodemailer from 'nodemailer';

type SubmissionPayload = {
  name: string;
  email: string;
  telegram?: string;
  botType?: string;
  description?: string;
  wantTest?: boolean;
  source?: string;
};

export async function sendFallbackEmail(payload: SubmissionPayload) {
  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;
  if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
    console.warn('Email fallback skipped: missing SMTP env vars');
    return;
  }

  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT),
    secure: Number(EMAIL_PORT) === 465,
    auth: { user: EMAIL_USER, pass: EMAIL_PASS }
  });

  await transporter.sendMail({
    to: EMAIL_TO,
    from: EMAIL_USER,
    subject: 'New AI Bot Generator lead',
    text: JSON.stringify(payload, null, 2)
  });
}
