import Image from 'next/image';
import { motion } from 'framer-motion';
import { LeadForm } from './components/LeadForm';
import { NavBar } from './components/NavBar';

const steps = [
  { title: 'Describe', text: 'Tell us about your use case, tone, and channels.', icon: '🧠' },
  { title: 'Train', text: 'We ingest your docs, FAQs, and transcripts securely.', icon: '⚙️' },
  { title: 'Preview', text: 'Get an interactive preview in under 30 seconds.', icon: '🚀' },
  { title: 'Deploy', text: 'Launch to web, Telegram, or embed in your product.', icon: '🌐' }
];

const examples = [
  {
    title: 'Customer Support Copilot',
    desc: 'Instantly answer billing, shipping, and policy questions with verified sources.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d'
  },
  {
    title: 'E-commerce Stylist',
    desc: 'Guide shoppers to the right SKU with AI that knows your catalog and tone.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e'
  },
  {
    title: 'Sales Qualifier',
    desc: 'Ask discovery questions, rank leads, and sync directly to your CRM.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
  },
  {
    title: 'Internal Knowledge',
    desc: 'Answer employee questions using policies, runbooks, and wiki content.',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769'
  },
  {
    title: 'HR & Recruiting',
    desc: 'Screen candidates, share interview logistics, and capture intents automatically.',
    image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e'
  },
  {
    title: 'Community Host',
    desc: 'Onboard members, moderate chats, and summarize trending topics in real-time.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
  }
];

const benefits = [
  {
    title: 'No-code, full control',
    text: 'Drag-and-drop flows, tone controls, and guardrails keep you in control of your brand.'
  },
  {
    title: 'Multi-channel ready',
    text: 'Deploy to web, Telegram, WhatsApp, or embed inside your product with one click.'
  },
  {
    title: 'Secure by default',
    text: 'SOC2-aligned data handling, secrets vaults, and granular permissions.'
  }
];

const personas = [
  'Product leaders testing AI journeys',
  'CX teams automating repetitive tickets',
  'Marketing teams qualifying inbound leads',
  'Operators building 24/7 automation',
  'Founders validating new AI products'
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <section className="section-shell relative py-16 lg:py-24" id="hero">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
              AI Bot Generator
              <span className="h-2 w-2 rounded-full bg-neon shadow-glow" />
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Create your own AI bot in <span className="text-neon">30 seconds</span> — without coding.
            </h1>
            <p className="text-lg text-white/70">
              Launch hyper-personalized bots for support, sales, and communities. We handle the stack — data ingestion, safety
              checks, and multi-channel deployment.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-neon to-accent px-6 py-3 font-semibold text-midnight shadow-glow"
              >
                Test the Bot
              </a>
              <a href="#how-it-works" className="inline-flex items-center gap-3 text-neon">
                See how it works →
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-white/60">
              <div className="glass rounded-xl p-4 border border-white/10">
                <p className="text-white font-semibold text-xl">30s</p>
                <p>to first preview</p>
              </div>
              <div className="glass rounded-xl p-4 border border-white/10">
                <p className="text-white font-semibold text-xl">Multi-channel</p>
                <p>Web, Telegram, embeds</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-1 shadow-glow">
              <div className="glass rounded-[26px] p-8 border border-white/10">
                <p className="text-sm text-white/70">Live preview</p>
                <h3 className="text-2xl font-semibold mt-1">Botgen Copilot</h3>
                <div className="mt-6 space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-white/10 border border-white/10" />
                      <div className="space-y-2 w-full">
                        <div className="h-3 w-1/2 rounded-full bg-white/10" />
                        <div className="h-3 w-2/3 rounded-full bg-white/10" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {Array.from({ length: 4 }).map((_, idx) => (
                      <Image
                        key={idx}
                        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                        alt="User avatar"
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-full border-2 border-midnight object-cover"
                      />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm">Teams already prototyping new AI experiences.</p>
                </div>
              </div>
            </div>
            <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-neon blur-3xl opacity-40" aria-hidden />
            <div className="absolute -right-10 bottom-0 h-28 w-28 rounded-full bg-accent blur-3xl opacity-30" aria-hidden />
          </motion.div>
        </div>
      </section>

      <section id="how-it-works" className="section-shell py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neon">Flow</p>
            <h2 className="text-3xl font-semibold mt-2">How it works</h2>
            <p className="text-white/60 mt-2 max-w-2xl">
              A guided, zero-code builder that ingests your data, applies safety rails, and lets you preview before shipping.
            </p>
          </div>
          <a href="#contact" className="text-neon text-sm font-semibold">
            Join testers →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="glass rounded-2xl border border-white/10 p-5 shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{step.icon}</span>
                <span className="text-xs text-white/50">0{idx + 1}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="text-white/60 mt-2 text-sm">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="examples" className="section-shell py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neon">Bot examples</p>
            <h2 className="text-3xl font-semibold mt-2">Pre-built templates</h2>
            <p className="text-white/60 mt-2 max-w-2xl">Six ready-to-launch templates so you can ship in minutes.</p>
          </div>
          <a href="#contact" className="text-neon text-sm font-semibold">Request a demo →</a>
        </div>
        <div className="card-grid mt-8">
          {examples.map((example, idx) => (
            <motion.div
              key={example.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
            >
              <div className="relative h-40 w-full">
                <Image src={example.image} alt={example.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold">{example.title}</h3>
                <p className="text-white/60 text-sm">{example.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell py-12 lg:py-16" id="who">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            className="glass rounded-2xl border border-white/10 p-6 md:p-8 shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-neon">Who it&apos;s for</p>
            <h2 className="text-3xl font-semibold mt-3">Built for teams shipping AI safely</h2>
            <ul className="mt-6 space-y-3 text-white/70">
              {personas.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-neon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="glass rounded-2xl border border-white/10 p-6 md:p-8 shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-neon">Benefits</p>
            <h2 className="text-3xl font-semibold mt-3">Why teams choose us</h2>
            <div className="mt-6 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{benefit.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="benefits" className="section-shell py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-neon">Contact</p>
            <h2 className="text-3xl font-semibold">Ready to launch your AI bot?</h2>
            <p className="text-white/60 max-w-2xl">
              Share your details and we&apos;ll schedule a fast walkthrough. Data is encrypted, and you can opt for email-only mode if
              you prefer not to store PII in the database.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/70">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold">DB first</p>
                <p className="text-white/60">Submissions land in the clients table with timestamps.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold">Email fallback</p>
                <p className="text-white/60">If the database is down, we email submissions to your ops inbox.</p>
              </div>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      <footer className="section-shell py-10 border-t border-white/5 text-white/60 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-white font-semibold">AI Bot Generator</p>
          <p className="text-sm text-white/50">Create AI bots without code. Built for teams that ship fast.</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="mailto:hello@botgen.ai" className="hover:text-neon">Email</a>
          <a href="https://t.me" className="hover:text-neon">Telegram</a>
          <span className="text-white/30">© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  );
}
