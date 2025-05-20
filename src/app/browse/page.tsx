const experiences = [
  {
    name: "Aigerim",
    title: "Traditional Kazakh Dinner",
    description: "Enjoy a cozy dinner with beshbarmak, baursaks, and tea in a real Kazakh home.",
    price: 8000,
    rating: 4.9,
    photo: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400&q=80",
  },
  {
    name: "Nursultan",
    title: "City Walking Tour",
    description: "Discover hidden gems of Almaty with a local guide.",
    price: 5000,
    rating: 4.8,
    photo: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=400&q=80",
  },
  {
    name: "Saltanat",
    title: "Cooking Masterclass",
    description: "Learn to cook plov and shashlik in a friendly kitchen.",
    price: 7000,
    rating: 5.0,
    photo: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=400&h=400&q=80",
  },
];

export default function Browse() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-amber-700 mb-8 text-center">Browse Experiences</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {experiences.map((exp, i) => (
          <div key={i} className="bg-white/80 rounded-lg shadow p-4 flex flex-col items-center">
            <img src={exp.photo} alt={exp.title} className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-amber-100" />
            <h3 className="text-xl font-semibold text-amber-800 mb-1">{exp.title}</h3>
            <div className="text-amber-600 font-medium mb-2">by {exp.name}</div>
            <p className="text-amber-900 text-sm mb-2">{exp.description}</p>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-amber-700 font-bold">{exp.price} ₸</span>
              <span className="text-yellow-400">★ {exp.rating}</span>
            </div>
            <button className="bg-amber-500 hover:bg-orange-400 text-white font-semibold px-4 py-2 rounded-full shadow transition mt-2">Book</button>
          </div>
        ))}
      </div>
    </div>
  );
} 