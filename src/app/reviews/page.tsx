const reviews = [
  { guest: "John", host: "Aigerim", rating: 5, comment: "Amazing dinner and great company!" },
  { guest: "Maria", host: "Nursultan", rating: 4, comment: "Very interesting city tour, learned a lot!" },
  { guest: "Alex", host: "Saltanat", rating: 5, comment: "Loved the cooking class, delicious food!" },
];

export default function Reviews() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-amber-700 mb-8 text-center">Reviews</h2>
      <div className="flex flex-col gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white/80 rounded-lg shadow p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-400 text-lg">★ {r.rating}</span>
              <span className="text-amber-800 font-semibold">{r.guest}</span>
              <span className="text-amber-600">about</span>
              <span className="text-amber-700 font-bold">{r.host}</span>
            </div>
            <p className="text-amber-900">{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 