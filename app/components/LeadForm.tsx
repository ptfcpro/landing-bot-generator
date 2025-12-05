'use client';

import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';

interface FormState {
  name: string;
  email: string;
  telegram: string;
  botType: string;
  description: string;
  wantTest: boolean;
}

const initialState: FormState = {
  name: '',
  email: '',
  telegram: '',
  botType: 'Customer Support',
  description: '',
  wantTest: true
};

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string>('');

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          telegram: form.telegram,
          botType: form.botType,
          description: form.description,
          wantTest: form.wantTest,
          source: 'landing-page'
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit');

      setStatus('success');
      setMessage(data.message || 'Thanks! We will reach out with early access details.');
      setForm(initialState);
    } catch (err) {
      console.error(err);
      setStatus('error');
      const fallbackMessage = 'Something went wrong. Try again or email us at hello@botgen.ai';
      if (err instanceof Error) {
        setMessage(err.message || fallbackMessage);
      } else {
        setMessage(fallbackMessage);
      }
    }
  };

  return (
    <motion.div
      className="glass neon-border rounded-2xl p-6 md:p-8 shadow-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neon mb-2">Get on the list</p>
          <h3 className="text-2xl font-semibold">Test the Bot</h3>
          <p className="text-white/60 mt-2 text-sm">
            Tell us about your use case and we will configure a personalized AI bot for your workflow.
          </p>
        </div>
        <div className="hidden md:block text-sm text-white/60">⚡ 30 sec setup</div>
      </div>

      <form className="mt-6 space-y-4" onSubmit={submit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="space-y-2 text-sm">
            <span className="text-white/70">Name *</span>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-neon"
              placeholder="Your name"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span className="text-white/70">Email *</span>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-neon"
              placeholder="work@company.com"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span className="text-white/70">Telegram</span>
            <input
              value={form.telegram}
              onChange={(e) => setForm({ ...form, telegram: e.target.value })}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-neon"
              placeholder="@username"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span className="text-white/70">Bot Type</span>
            <select
              value={form.botType}
              onChange={(e) => setForm({ ...form, botType: e.target.value })}
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-neon"
            >
              {['Customer Support', 'Lead Qualification', 'Internal Knowledge', 'E-commerce Concierge', 'HR & Recruiting', 'Community Assistant'].map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <label className="space-y-2 text-sm block">
          <span className="text-white/70">Describe your use case</span>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={3}
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-neon"
            placeholder="What do you want your AI bot to do?"
          />
        </label>
        <label className="flex items-center gap-3 text-sm text-white/80">
          <input
            type="checkbox"
            checked={form.wantTest}
            onChange={(e) => setForm({ ...form, wantTest: e.target.checked })}
            className="h-4 w-4 accent-neon"
          />
          I want to join the early testing program.
        </label>

        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon to-accent px-6 py-3 font-semibold text-midnight shadow-glow disabled:opacity-60"
          >
            {status === 'loading' ? 'Submitting...' : 'Submit' }
          </button>
          {message && (
            <span className={`text-sm ${status === 'error' ? 'text-red-300' : 'text-neon'}`}>{message}</span>
          )}
        </div>
      </form>
    </motion.div>
  );
}
