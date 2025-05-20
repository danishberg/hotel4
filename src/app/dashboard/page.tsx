// app/dashboard/page.tsx
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { bookings, services, users } from '@/mockData';
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

export default function DashboardPage() {
  const [tab, setTab] = useState<'upcoming'|'past'>('upcoming');
  const [data, setData] = useState<typeof bookings>([]);
  const [loading, setLoading] = useState(true);
  const me = users[1]; // example current user

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => {
      const now = new Date();
      setData(
        bookings.filter(b => {
          const past = new Date(b.date) < now;
          return tab === 'past' ? past : !past;
        })
      );
      setLoading(false);
    }, 500);
    return () => clearTimeout(t);
  }, [tab]);

  return (
    <div className="bg-gray-50 pt-8 pb-16 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-6">Manage your bookings and profile</p>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            {/* Profile */}
            <div className="p-6 flex flex-col items-center text-center">
              <div className="relative h-28 w-28 rounded-full overflow-hidden">
                <Image
                  src={me.avatarUrl}
                  alt={me.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="mt-4 text-xl font-semibold">{me.name}</h2>
              <p className="text-gray-500">{me.location}</p>
              <div className="mt-4 space-y-2 w-full">
                <button className="w-full bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">
                  Edit Profile
                </button>
                <button className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50">
                  View History
                </button>
              </div>
            </div>

            {/* Tabs + Bookings */}
            <div className="lg:col-span-2">
              <nav className="flex bg-gray-50">
                {(['upcoming','past'] as const).map(t => (
                  <button
                    key={t}
                    onClick={()=>setTab(t)}
                    className={`flex-1 py-4 text-center font-medium ${
                      tab===t
                        ? 'border-b-4 border-indigo-500 text-indigo-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </nav>
              <div className="p-6">
                <AnimatePresence>
                  {loading
                    ? Array.from({ length: 3 }).map((_,i)=>(
                        <motion.div
                          key={i}
                          className="animate-pulse bg-gray-100 h-24 rounded-lg mb-4"
                          initial={{ opacity:0.5 }}
                          animate={{ opacity:1 }}
                        />
                      ))
                    : data.length === 0
                    ? <p className="text-gray-500 text-center py-10">No {tab} bookings.</p>
                    : data.map(b => {
                        const s = services.find(x=>x.id===b.serviceId)!;
                        return (
                          <motion.div
                            key={b.id}
                            className="flex items-center bg-white rounded-lg shadow p-4 mb-4 space-x-4"
                            initial={{ opacity:0, y:20 }}
                            animate={{ opacity:1, y:0 }}
                          >
                            <div className="relative h-16 w-16 rounded-lg overflow-hidden">
                              <Image
                                src={s.imageUrl}
                                alt={s.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-gray-900">{s.title}</p>
                              <div className="flex items-center text-sm text-gray-500 space-x-4 mt-1">
                                <span className="flex items-center">
                                  <CalendarIcon className="h-4 w-4 mr-1"/> {b.date}
                                </span>
                                <span className="flex items-center">
                                  <MapPinIcon className="h-4 w-4 mr-1"/> {s.location}
                                </span>
                              </div>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              b.status==='confirmed'
                                ? 'bg-green-100 text-green-800'
                                : b.status==='pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {b.status.charAt(0).toUpperCase()+b.status.slice(1)}
                            </span>
                          </motion.div>
                        );
                      })
                  }
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
