'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Examples', href: '#examples' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Contact', href: '#contact' }
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-midnight/80 backdrop-blur-xl border-b border-white/10">
      <div className="section-shell flex items-center justify-between py-4">
        <Link href="#" className="flex items-center gap-2 font-semibold text-neon tracking-tight">
          <span className="h-3 w-3 rounded-full bg-neon shadow-glow" aria-hidden />
          Bot Generator
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.1em] text-white/70">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-neon transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Link
            href="#contact"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-neon to-accent text-midnight font-semibold shadow-glow hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            Test the Bot
          </Link>
        </div>
        <button
          className="md:hidden p-2 rounded-lg border border-white/10"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle navigation menu"
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-midnight/95">
          <div className="section-shell py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-white/80 hover:text-neon"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block w-full text-center px-4 py-3 rounded-lg bg-gradient-to-r from-neon to-accent text-midnight font-semibold"
              onClick={() => setOpen(false)}
            >
              Test the Bot
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
