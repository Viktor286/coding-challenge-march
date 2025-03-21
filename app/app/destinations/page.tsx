import { destinations } from "../../data/destinations";
import Link from "next/link";

export default function DestinationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-4 md:p-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Link href="/" className="text-2xl md:text-3xl font-bold">
              🚀 SpaceTravel
            </Link>
          </div>
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link
              href="/destinations"
              className="text-blue-200 border-b-2 border-blue-200 transition-colors"
            >
              Destinations
            </Link>
            <Link href="#" className="hover:text-blue-200 transition-colors">
              Packages
            </Link>
            <Link href="#" className="hover:text-blue-200 transition-colors">
              Accommodations
            </Link>
            <Link href="#" className="hover:text-blue-200 transition-colors">
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <div className="bg-gradient-to-r from-purple-800 to-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Space Destinations
          </h1>
          <p className="text-lg md:text-xl">
            Explore our available destinations for your next space adventure
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-gray-300 h-48 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/60 flex items-end">
                  <div className="p-4 text-white">
                    <h2 className="text-2xl font-bold">{destination.name}</h2>
                    <p className="text-sm capitalize">{destination.type}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-900 font-medium">Distance</span>
                  <span className="font-medium text-gray-900">{destination.distance}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-900 font-medium">Travel Time</span>
                  <span className="font-medium text-gray-900">{destination.travelTime}</span>
                </div>
                <p className="text-gray-800 font-medium mb-4 line-clamp-2">
                  {destination.description}
                </p>
                <div className="mb-4">
                  <div className="text-gray-900 font-medium mb-1">Starting Price:</div>
                  <div className="text-2xl font-bold text-blue-800">
                    ${(destination.price.economy / 1000000).toFixed(1)}M
                  </div>
                </div>
                <Link
                  href={`/destinations/${destination.id}`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-md transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold">🚀 SpaceTravel</span>
              <p className="text-sm text-gray-300 mt-2">
                The Ultimate Space Travel Experience
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Space Travel Booking Platform. All
            rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
