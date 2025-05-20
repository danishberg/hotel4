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

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse Experiences</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover unique experiences hosted by locals across Kazakhstan.
            From cooking classes to city tours, find the perfect activity for your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleExperiences.map((experience) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Can't find what you're looking for?</h2>
          <p className="text-gray-600 mb-6">
            Contact us to request a custom experience tailored to your interests.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Request Custom Experience
          </a>
        </div>
      </div>
    </div>
  );
} 