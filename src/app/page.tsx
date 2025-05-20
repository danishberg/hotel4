import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center flex-1 text-center py-16 px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-amber-700 mb-4 drop-shadow-lg">Host For an Hour</h1>
        <p className="text-lg sm:text-xl text-amber-900 max-w-2xl mb-6">
          Погрузитесь в настоящую казахскую культуру: выберите ужин, экскурсию или мастер-класс прямо у местного жителя. <br />
          <span className="text-amber-600 font-semibold">Host For an Hour</span> — ваш билет в гостеприимство Казахстана!
        </p>
        <p className="text-base sm:text-lg text-amber-800 max-w-xl mb-8">
          Immerse yourself in authentic Kazakh culture: choose a dinner, tour, or master class right at a local's home. <br />
          <span className="text-amber-600 font-semibold">Host For an Hour</span> is your ticket to true Kazakh hospitality!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/become-host" className="bg-amber-500 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-full shadow transition">Become a Host</a>
          <a href="/browse" className="bg-white border border-amber-300 hover:bg-amber-100 text-amber-700 font-semibold px-6 py-3 rounded-full shadow transition">Browse Experiences</a>
        </div>
      </section>
      {/* Footer */}
      <footer className="text-center text-amber-600 py-6 bg-white/70 mt-auto text-sm">
        &copy; {new Date().getFullYear()} Host For an Hour. Made with ❤️ in Kazakhstan.
      </footer>
    </div>
  );
}
