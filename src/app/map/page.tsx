'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import ExperienceCard from '@/components/ExperienceCard';

interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  imageUrl: string;
  hostName: string;
  rating: number;
  location: string;
  lat: number;
  lng: number;
  hostId: number;
  maxGuests: number;
}

const MapWithSidebar = dynamic(() => import('@/components/MapWithSidebar'), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-gray-500">Loading map...</div>
    </div>
  ),
});

const sampleExperiences = [
  {
    id: 1,
    title: "Traditional Kazakh Cooking Class",
    description: "Learn to cook authentic Kazakh dishes with a local chef in their home kitchen.",
    price: 45,
    duration: "3 hours",
    imageUrl: "/experiences/cooking.jpg",
    hostName: "Amina Kenzhebekova",
    rating: 4.9,
    location: "Almaty, Kazakhstan",
    lat: 43.2220,
    lng: 76.8512,
    hostId: 1,
    maxGuests: 6
  },
  {
    id: 2,
    title: "City Photography Tour",
    description: "Capture the beauty of Astana's modern architecture with a professional photographer.",
    price: 60,
    duration: "4 hours",
    imageUrl: "/experiences/photography.jpg",
    hostName: "Dmitri Petrov",
    rating: 4.8,
    location: "Astana, Kazakhstan",
    lat: 51.1694,
    lng: 71.4491,
    hostId: 2,
    maxGuests: 4
  },
  {
    id: 3,
    title: "Traditional Craft Workshop",
    description: "Create your own Kazakh traditional crafts under the guidance of a master artisan.",
    price: 35,
    duration: "2 hours",
    imageUrl: "/experiences/crafts.jpg",
    hostName: "Zarina Alimova",
    rating: 4.7,
    location: "Shymkent, Kazakhstan",
    lat: 42.3000,
    lng: 69.6000,
    hostId: 3,
    maxGuests: 8
  }
];

export default function MapPage() {
  const [selectedExperience, setSelectedExperience] = useState<Service | null>(null);

  const handleBook = (experience: Service) => {
    // Handle booking logic here
    console.log('Booking experience:', experience);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Experiences Near You</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and book unique experiences hosted by locals across Kazakhstan.
            Use the map to find experiences in your area.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
              <MapWithSidebar
                services={sampleExperiences}
                selected={selectedExperience}
                onSelect={setSelectedExperience}
                onBook={handleBook}
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Selected Experience</h2>
              {selectedExperience ? (
                <ExperienceCard service={selectedExperience} />
              ) : (
                <p className="text-gray-500">Select an experience on the map to view details</p>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular Experiences</h2>
              <div className="space-y-4">
                {sampleExperiences.map((experience) => (
                  <div
                    key={experience.id}
                    className="cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
                    onClick={() => setSelectedExperience(experience)}
                  >
                    <h3 className="font-medium text-gray-900">{experience.title}</h3>
                    <p className="text-sm text-gray-500">{experience.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 