// app/hosts/page.tsx
'use client';

import { useState } from 'react';
import { users } from '@/mockData';
import HostCard from '@/components/HostCard';
import { motion } from 'framer-motion';

export default function HostsPage() {
  const [sortBy, setSortBy] = useState<'rating' | ''>('rating');
  const sorted = sortBy === 'rating'
    ? [...users].sort((a, b) => b.rating - a.rating)
    : users;

  return (
    <div className="pt-8 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-between items-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Our Hosts</h1>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as 'rating' | '')}
            className="rounded-md border-gray-300 py-2 pl-3 pr-10 focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="rating">Sort by Rating</option>
          </select>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map(host => (
            <HostCard key={host.id} host={host} />
          ))}
        </div>
      </div>
    </div>
  );
}
