import { accommodations } from '../../data/accommodations';
import Link from 'next/link';

export default function AccommodationsPage() {
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
              className="hover:text-blue-200 transition-colors"
            >
              Packages
            </Link>
            <Link
              href="/accommodations"
              className="text-blue-200 border-b-2 border-blue-200 transition-colors"
            >
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
            Space Accommodations
          </h1>
          <p className="text-lg md:text-xl">
            Luxurious and comfortable places to stay during your space adventure
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Filter Tags */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <button className="px-4 py-2 rounded-full bg-blue-600 text-white">All Accommodations</button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300">Orbital</button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300">Lunar</button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300">Station</button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300">Luxury</button>
        </div>
        
        {/* Accommodations List */}
        <div className="space-y-8">
          {accommodations.map((accommodation) => (
            <div
              key={accommodation.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3 bg-gray-300 h-64 md:h-auto relative">
                  <div className="absolute top-0 left-0 m-4">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                      {accommodation.type.charAt(0).toUpperCase() + accommodation.type.slice(1)}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex items-center text-white">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(accommodation.rating) ? "text-yellow-400" : "text-gray-400"}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="ml-2">{accommodation.rating.toFixed(1)}</span>
                      <span className="mx-2">•</span>
                      <span>{accommodation.reviewCount} reviews</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-1">{accommodation.name}</h2>
                      <p className="text-blue-800 font-medium mb-2">{accommodation.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-900 font-medium">Starting from</div>
                      <div className="text-2xl font-bold text-blue-800">
                        ${(accommodation.price.standard / 1000000).toFixed(1)}M
                      </div>
                      <div className="text-gray-700 text-sm">per night</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-800 font-medium mb-4">
                    {accommodation.description}
                  </p>
                  
                  <div className="mb-4">
                    <h3 className="text-gray-900 font-medium mb-2">Key Amenities:</h3>
                    <div className="flex flex-wrap gap-2">
                      {accommodation.amenities.slice(0, 4).map((amenity, index) => (
                        <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-gray-800 text-sm">
                          {amenity}
                        </span>
                      ))}
                      {accommodation.amenities.length > 4 && (
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-blue-600 text-sm font-medium">
                          +{accommodation.amenities.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Link
                      href={`/accommodations/${accommodation.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-6 rounded-md transition-colors inline-block"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
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