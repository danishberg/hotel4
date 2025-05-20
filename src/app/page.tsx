'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ExperienceCard from '@/components/ExperienceCard';

const sampleExperiences = [
  {
    title: "Traditional Kazakh Cooking Class",
    description: "Learn to cook authentic Kazakh dishes with a local chef in their home kitchen.",
    price: 45,
    duration: "3 hours",
    imageUrl: "/experiences/cooking.jpg",
    hostName: "Amina Kenzhebekova",
    rating: 4.9,
    location: "Almaty, Kazakhstan"
  },
  {
    title: "City Photography Tour",
    description: "Capture the beauty of Astana's modern architecture with a professional photographer.",
    price: 60,
    duration: "4 hours",
    imageUrl: "/experiences/photography.jpg",
    hostName: "Dmitri Petrov",
    rating: 4.8,
    location: "Astana, Kazakhstan"
  },
  {
    title: "Traditional Craft Workshop",
    description: "Create your own Kazakh traditional crafts under the guidance of a master artisan.",
    price: 35,
    duration: "2 hours",
    imageUrl: "/experiences/crafts.jpg",
    hostName: "Zarina Alimova",
    rating: 4.7,
    location: "Shymkent, Kazakhstan"
  }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredExperiences = sampleExperiences.filter(exp =>
    exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exp.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Hero Section */}
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
          priority
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
              className="bg-indigo-600 px-5 py-3 rounded-md text-sm font-semibold hover:bg-indigo-500 transition-colors"
            >
              Find Experiences
            </Link>
            <Link
              href="/hosts"
              className="px-5 py-3 rounded-md text-sm font-semibold border border-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Hosts →
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Experiences Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Experiences</h2>
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search experiences..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperiences.map((experience) => (
              <ExperienceCard key={experience.title} {...experience} />
            ))}
          </div>

          {filteredExperiences.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No experiences found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
