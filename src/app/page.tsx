// app/page.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ExperienceCard from '@/components/ExperienceCard';
import { services } from '@/mockData';

export default function Home() {
  const [q, setQ] = useState('');
  const featured = services.filter(s =>
    s.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <>
      {/* ——— HERO ——— */}
      <motion.section
        className="relative w-full h-[60vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/img/alexander-serzhantov-TcLGC0KtO5Y-unsplash.jpg"
          alt="Holding hands with locals"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:py-40 lg:px-8 text-white">
          <motion.h1
            className="text-4xl sm:text-6xl font-bold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Experience Local Culture in Kazakhstan
          </motion.h1>
          <motion.p
            className="mt-4 text-lg max-w-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Connect with local hosts for authentic cultural experiences:
            traditional dinners, city tours, and masterclasses.
          </motion.p>
          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Link
              href="/map"
              className="bg-indigo-600 px-5 py-3 rounded-md text-sm font-semibold hover:bg-indigo-500"
            >
              Find Experiences
            </Link>
            <Link
              href="/hosts"
              className="px-5 py-3 rounded-md text-sm font-semibold border border-white hover:bg-white hover:text-gray-900"
            >
              View Hosts →
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ——— FEATURED ——— */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Experiences</h2>
          <input
            type="text"
            placeholder="Search..."
            value={q}
            onChange={e => setQ(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map(s => <ExperienceCard key={s.id} service={s} />)}
        </div>
      </section>
    </>
  );
}
