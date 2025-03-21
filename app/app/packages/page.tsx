import { packages } from '../../data/packages';
import Link from 'next/link';

export default function PackagesPage() {
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
              className="hover:text-blue-200 transition-colors"
            >
              Destinations
            </Link>
            <Link
              href="/packages"
              className="text-blue-200 border-b-2 border-blue-200 transition-colors"
            >
              Packages
            </Link>
            <Link href="/accommodations" className="hover:text-blue-200 transition-colors">
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
            Space Travel Packages
          </h1>
          <p className="text-lg md:text-xl">
            Discover our curated space travel packages for the adventure of a lifetime
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Filter Tags */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <button className="px-4 py-2 rounded-full bg-blue-600 text-white">All Packages</button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300">Adventure</button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300">Luxury</button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300">Family</button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300">Couples</button>
        </div>
        
        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-gray-300 h-48 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end">
                  <div className="p-4 text-white">
                    <div className="flex gap-2 mb-2">
                      {pkg.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-blue-600 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold">{pkg.name}</h2>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-900 font-medium">Duration</span>
                  <span className="font-medium text-gray-900">{pkg.duration}</span>
                </div>
                <p className="text-gray-800 font-medium mb-4">
                  {pkg.description}
                </p>
                <div className="mb-4">
                  <div className="text-gray-900 font-medium mb-1">Price per person:</div>
                  <div className="text-2xl font-bold text-blue-800">
                    ${(pkg.price / 1000000).toFixed(1)}M
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-gray-900 font-medium mb-2">Key Features:</h3>
                  <ul className="text-gray-800">
                    {pkg.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center mb-1">
                        <span className="mr-2 text-green-600">✓</span>
                        {feature}
                      </li>
                    ))}
                    {pkg.features.length > 3 && (
                      <li className="text-blue-600 font-medium">+ {pkg.features.length - 3} more features</li>
                    )}
                  </ul>
                </div>
                
                <Link
                  href={`/packages/${pkg.id}`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-md transition-colors"
                >
                  View Package Details
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