const mockHost = {
  name: "Aigerim",
  bookings: 12,
  reviews: 8,
  earnings: 96000,
  experiences: [
    { title: "Traditional Kazakh Dinner", bookings: 7 },
    { title: "Cooking Masterclass", bookings: 5 },
  ],
};

export default function Dashboard() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-amber-700 mb-6 text-center">Host Dashboard</h2>
      <div className="bg-white/80 rounded-lg shadow p-6 mb-8 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <div className="text-amber-800 font-semibold">Bookings</div>
          <div className="text-2xl font-bold">{mockHost.bookings}</div>
        </div>
        <div>
          <div className="text-amber-800 font-semibold">Reviews</div>
          <div className="text-2xl font-bold">{mockHost.reviews}</div>
        </div>
        <div>
          <div className="text-amber-800 font-semibold">Earnings</div>
          <div className="text-2xl font-bold">{mockHost.earnings} ₸</div>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-amber-700 mb-4">Your Experiences</h3>
      <div className="flex flex-col gap-4">
        {mockHost.experiences.map((exp, i) => (
          <div key={i} className="bg-white/70 rounded shadow p-4 flex justify-between items-center">
            <div>
              <div className="font-bold text-amber-800">{exp.title}</div>
              <div className="text-amber-600 text-sm">Bookings: {exp.bookings}</div>
            </div>
            <div className="flex gap-2">
              <button className="bg-amber-400 hover:bg-orange-400 text-white px-4 py-1 rounded-full text-sm font-semibold">Edit</button>
              <button className="bg-red-400 hover:bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 