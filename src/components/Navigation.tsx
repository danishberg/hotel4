'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  HomeIcon,
  UserGroupIcon,
  MapIcon,
  StarIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Hosts', href: '/hosts', icon: UserGroupIcon },
  { name: 'Map', href: '/map', icon: MapIcon },
  { name: 'Reviews', href: '/reviews', icon: StarIcon },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="rounded-full bg-indigo-600 w-10 h-10 flex items-center justify-center font-bold text-xl text-white shadow-md">H</div>
            <span className="font-bold text-lg text-gray-900 tracking-wide">Host For an Hour</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(item => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <item.icon className="h-5 w-5 mr-1" />
                {item.name}
              </Link>
            ))}
            <Link 
              href="/dashboard" 
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition-colors"
            >
              Dashboard
            </Link>
          </div>
          <button 
            className="md:hidden" 
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? (
              <XMarkIcon className="h-6 w-6 text-gray-900" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white shadow-lg"
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/dashboard" 
                className="block px-2 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors"
                onClick={() => setOpen(false)}
              >
                Dashboard
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 