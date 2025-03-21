export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-4 md:p-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <span className="text-2xl md:text-3xl font-bold">
              🚀 SpaceTravel
            </span>
          </div>
          <nav className="flex gap-6">
            <a href="#" className="hover:text-blue-200 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Destinations
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Packages
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Accommodations
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Login
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-b from-blue-900 to-black opacity-80"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Dubai to the Stars
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the ultimate space travel adventure from the world&apos;s
            first commercial space travel hub
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Book Your Journey
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Discover Space Travel
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🛰️</div>
              <h3 className="text-xl font-bold mb-2">Orbital Adventures</h3>
              <p className="text-gray-600">
                Experience breathtaking views of Earth from various orbital
                stations with state-of-the-art amenities.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-bold mb-2">Lunar Excursions</h3>
              <p className="text-gray-600">
                Walk on the lunar surface and stay in luxury accommodations with
                Earth views.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-xl font-bold mb-2">Space Hotels</h3>
              <p className="text-gray-600">
                Choose from a variety of space hotels offering zero-gravity
                experiences and cosmic dining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold">🚀 SpaceTravel</span>
              <p className="text-sm text-gray-400 mt-2">
                The Ultimate Space Travel Experience
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Space Travel Booking Platform. All
            rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
