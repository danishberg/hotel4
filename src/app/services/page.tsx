const services = [
  { icon: "🍽️", title: "Traditional Dinner", description: "Enjoy authentic Kazakh meals in a cozy home." },
  { icon: "🚶", title: "City Tour", description: "Explore the city with a local guide and discover hidden gems." },
  { icon: "👩‍🍳", title: "Cooking Masterclass", description: "Learn to cook national dishes with a friendly host." },
  { icon: "🎨", title: "Craft Workshop", description: "Try your hand at traditional crafts and arts." },
];

export default function Services() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-amber-700 mb-8 text-center">Our Services</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {services.map((s, i) => (
          <div key={i} className="bg-white/80 rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-5xl mb-4">{s.icon}</span>
            <h3 className="text-xl font-semibold text-amber-800 mb-2">{s.title}</h3>
            <p className="text-amber-900 text-center">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 