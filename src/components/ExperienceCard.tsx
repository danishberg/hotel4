// components/ExperienceCard.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { UserIcon, MapPinIcon } from '@heroicons/react/24/solid';
import type { Service } from '@/mockData';

export default function ExperienceCard({ service }: { service: Service }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg"
    >
      <div className="relative h-48 w-full">
        {service.imageUrl ? (
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-200">
            <span className="text-sm text-gray-500">No Image Available</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          <Link href={`/services/${service.id}`} className="hover:text-indigo-600">
            {service.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{service.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <UserIcon className="h-4 w-4 mr-1" />
              <span>Host {service.hostId}</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="h-4 w-4 mr-1" />
              <span>{service.location}</span>
            </div>
          </div>
          <span className="text-lg font-semibold text-indigo-600">${service.price}</span>
        </div>
        <div className="mt-4">
          <Link
            href={`/services/${service.id}`}
            className="block w-full text-center bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-indigo-500"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
