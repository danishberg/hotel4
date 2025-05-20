// src/app/map/page.tsx
'use client'
export const dynamic = 'force-dynamic'

import { useState } from 'react'
import dynamicImport from 'next/dynamic'
import ExperienceCard from '@/components/ExperienceCard'
import { Dialog } from '@headlessui/react'
import { XMarkIcon, CalendarIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import type { Service } from '@/mockData'
import { services as ALL_SERVICES } from '@/mockData'

interface BookingData {
  date: string
  guests: number
}

const MapWithSidebar = dynamicImport(
  () => import('@/components/MapWithSidebar'),
  {
    ssr: false,
    loading: () => (
      <div className="h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    ),
  }
)

export default function MapPage() {
  const [selectedExperience, setSelectedExperience] =
    useState<Service | null>(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [bookingData, setBookingData] = useState<BookingData>({
    date: '',
    guests: 1,
  })
  const [priceFilter, setPriceFilter] = useState<number | null>(null)
  const [durationFilter, setDurationFilter] = useState<string | null>(null)

  const handleBook = (exp: Service) => {
    setSelectedExperience(exp)
    setIsBookingModalOpen(true)
  }

  const handleBookingSubmit = () => {
    if (!selectedExperience) return
    console.log('Booking submitted:', {
      experience: selectedExperience,
      bookingData,
    })
    setIsBookingModalOpen(false)
    setBookingData({ date: '', guests: 1 })
  }

  const filteredExperiences = ALL_SERVICES.filter((exp) => {
    if (priceFilter && exp.price > priceFilter) return false
    if (durationFilter && exp.duration !== durationFilter) return false
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Experiences Near You
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and book unique experiences hosted by locals across
            Kazakhstan.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <select
            onChange={(e) =>
              setPriceFilter(e.target.value ? Number(e.target.value) : null)
            }
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Price Range</option>
            <option value="30">Under $30</option>
            <option value="50">Under $50</option>
            <option value="100">Under $100</option>
          </select>
          <select
            onChange={(e) => setDurationFilter(e.target.value || null)}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Duration</option>
            <option value="2 hours">2 hours</option>
            <option value="3 hours">3 hours</option>
            <option value="4 hours">4 hours</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
              <MapWithSidebar
                services={filteredExperiences}
                selected={selectedExperience}
                onSelect={setSelectedExperience}
                onBook={handleBook}
              />
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Selected Experience
              </h2>
              {selectedExperience ? (
                <ExperienceCard service={selectedExperience} />
              ) : (
                <p className="text-gray-500">
                  Select an experience on the map to view details
                </p>
              )}
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Popular Experiences
              </h2>
              <div className="space-y-4">
                {filteredExperiences.map((exp) => (
                  <div
                    key={exp.id}
                    onClick={() => setSelectedExperience(exp)}
                    className="cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
                  >
                    <h3 className="font-medium text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {exp.location}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-indigo-600 font-semibold">
                        ${exp.price}
                      </span>
                      <span className="text-sm text-gray-500">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <Dialog
        open={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded-lg bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <Dialog.Title className="text-lg font-medium">
                Book Experience
              </Dialog.Title>
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {selectedExperience && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <CalendarIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      value={bookingData.date}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          date: e.target.value,
                        })
                      }
                      className="block w-full pl-10 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Number of Guests
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserGroupIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      min="1"
                      max={selectedExperience.maxGuests}
                      value={bookingData.guests}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          guests: Number(e.target.value),
                        })
                      }
                      className="block w-full pl-10 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={handleBookingSubmit}
                    className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition-colors"
                  >
                    Book Now – $
                    {selectedExperience.price * bookingData.guests}
                  </button>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}
