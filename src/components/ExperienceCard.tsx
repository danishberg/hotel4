import Image from 'next/image';

interface ExperienceCardProps {
  title: string;
  description: string;
  price: number;
  duration: string;
  imageUrl: string;
  hostName: string;
  rating: number;
  location: string;
}

export default function ExperienceCard({
  title,
  description,
  price,
  duration,
  imageUrl,
  hostName,
  rating,
  location,
}: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full text-sm font-medium text-gray-900">
          ${price}/person
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{location}</p>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-indigo-600 font-medium text-sm">
                {hostName.charAt(0)}
              </span>
            </div>
            <span className="ml-2 text-sm text-gray-600">{hostName}</span>
          </div>
          <span className="text-sm text-gray-500">{duration}</span>
        </div>
      </div>
    </div>
  );
} 