import HostCard from '@/components/HostCard';

const sampleHosts = [
  {
    name: "Amina Kenzhebekova",
    location: "Almaty, Kazakhstan",
    rating: 4.9,
    imageUrl: "/hosts/amina.jpg",
    languages: ["Kazakh", "Russian", "English"],
    specialties: ["Traditional Cooking", "City Tours", "Cultural Exchange"]
  },
  {
    name: "Dmitri Petrov",
    location: "Astana, Kazakhstan",
    rating: 4.8,
    imageUrl: "/hosts/dmitri.jpg",
    languages: ["Russian", "English", "Kazakh"],
    specialties: ["Photography", "History Tours", "Local Cuisine"]
  },
  {
    name: "Zarina Alimova",
    location: "Shymkent, Kazakhstan",
    rating: 4.7,
    imageUrl: "/hosts/zarina.jpg",
    languages: ["Kazakh", "English"],
    specialties: ["Traditional Crafts", "Nature Tours", "Local Markets"]
  }
];

export default function HostsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Local Hosts</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with passionate locals who will show you the authentic side of Kazakhstan.
            Each host brings their unique perspective and expertise to create memorable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleHosts.map((host) => (
            <HostCard key={host.name} {...host} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Become a Host</h2>
          <p className="text-gray-600 mb-6">
            Share your passion for Kazakhstan and earn while doing what you love.
          </p>
          <a
            href="/become-host"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Start Hosting
          </a>
        </div>
      </div>
    </div>
  );
} 