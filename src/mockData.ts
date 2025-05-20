// mockData.ts
export interface User {
  id: number;
  name: string;
  email: string;
  rating: number;
  avatarUrl: string;
  bio: string;
  location: string;
}
export interface Service {
  id: number;
  hostId: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  location: string;
  duration: string;
  maxGuests: number;
  lat: number;
  lng: number;
}
export interface Booking {
  id: number;
  serviceId: number;
  guestId: number;
  date: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  guests: number;
  totalPrice: number;
}
export interface Review {
  id: number;
  bookingId: number;
  rating: number;
  comment: string;
  date: string;
}

export const users: User[] = [
  {
    id: 1,
    name: 'Amina Kenzhebekova',
    email: 'amina@example.com',
    rating: 4.8,
    avatarUrl: '/img/woman1.jpg',
    bio: 'Traditional Kazakh cuisine expert with 15 years of experience',
    location: 'Almaty, Kazakhstan'
  },
  {
    id: 2,
    name: 'Bakhyt Suleimenov',
    email: 'bakhyt@example.com',
    rating: 4.9,
    avatarUrl: '/img/men1.jpg',
    bio: 'Local historian and tour guide passionate about sharing Kazakh culture',
    location: 'Astana, Kazakhstan'
  },
  {
    id: 3,
    name: 'Gulnara Tulegenova',
    email: 'gulnara@example.com',
    rating: 4.7,
    avatarUrl: '/img/woman2.jpg',
    bio: 'Crafts and workshops specialist',
    location: 'Shymkent, Kazakhstan'
  },
];

export const services: Service[] = [
  {
    id: 1,
    hostId: 1,
    title: 'Traditional Kazakh Dinner',
    description: 'Experience an authentic Kazakh dinner in a local home. Learn about traditional dishes like beshbarmak and kazy while enjoying warm hospitality.',
    price: 50,
    imageUrl: '/img/joy-s-kMadNKDqycc-unsplash.jpg',
    location: 'Almaty',
    duration: '3 hours',
    maxGuests: 6,
    lat: 43.2220,
    lng: 76.8512
  },
  {
    id: 2,
    hostId: 2,
    title: 'City Tour with Local Guide',
    description: 'Discover hidden gems of the city with a knowledgeable local guide. Visit historical sites and learn about local traditions.',
    price: 30,
    imageUrl: '/img/alexander-serzhantov-ECRotWQ6T-M-unsplash.jpg',
    location: 'Astana',
    duration: '4 hours',
    maxGuests: 8,
    lat: 51.1694,
    lng: 71.4491
  },
  {
    id: 3,
    hostId: 3,
    title: 'Craft Workshop',
    description: 'Participate in a hands-on craft workshop and create your own Kazakh souvenirs.',
    price: 40,
    imageUrl: '/img/tim-broadbent-LixxrHI7H8o-unsplash.jpg',
    location: 'Shymkent',
    duration: '2 hours',
    maxGuests: 10,
    lat: 42.3417,
    lng: 69.5901
  },
];

export const bookings: Booking[] = [
  {
    id: 1,
    serviceId: 1,
    guestId: 3,
    date: '2024-03-15',
    status: 'confirmed',
    guests: 2,
    totalPrice: 100
  },
  {
    id: 2,
    serviceId: 2,
    guestId: 2,
    date: '2024-03-20',
    status: 'pending',
    guests: 3,
    totalPrice: 90
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    bookingId: 1,
    rating: 5,
    comment: 'Amazing experience! The food was delicious and the host was incredibly welcoming. Learned so much about Kazakh culture.',
    date: '2024-02-15'
  },
  {
    id: 2,
    bookingId: 2,
    rating: 4,
    comment: 'Great tour with lots of interesting historical facts. The guide was very knowledgeable and friendly.',
    date: '2024-02-20'
  },
];
