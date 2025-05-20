// components/HostCard.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import type { User } from '@/mockData';

export default function HostCard({ host }: { host: User }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg"
    >
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="relative h-16 w-16 rounded-full overflow-hidden">
            {host.avatarUrl ? (
              <Image
                src={host.avatarUrl}
                alt={host.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="h-16 w-16 bg-gray-200 rounded-full"></div>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{host.name}</h3>
            <div className="flex items-center mt-1">
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <span className="ml-1 text-sm text-gray-600">{host.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center text-sm text-gray-500">
            <MapPinIcon className="h-4 w-4 mr-1" />
            <span>{host.location}</span>
          </div>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{host.bio}</p>
        </div>
        <div className="mt-4 space-y-2">
          <Link
            href={`/hosts/${host.id}`}
            className="block w-full text-center bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-indigo-500"
          >
            View Profile
          </Link>
          <Link
            href={`/hosts/${host.id}/services`}
            className="block w-full text-center border border-gray-300 px-3 py-2 rounded-md text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            View Services
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
