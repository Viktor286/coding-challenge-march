import { accommodations } from '../../../data/accommodations';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Generate static params for all accommodations
export function generateStaticParams() {
  return accommodations.map((accommodation) => ({
    id: accommodation.id,
  }));
}

// Generate dynamic metadata for the page
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const accommodation = accommodations.find((a) => a.id === params.id);
  
  if (!accommodation) {
    return {
      title: "Accommodation Not Found",
    };
  }
  
  return {
    title: `${accommodation.name} | Space Travel`,
    description: accommodation.description,
  };
}

export default function AccommodationPage({ params }: { params: { id: string } }) {
  // Find the accommodation in our data
  const accommodation = accommodations.find((a) => a.id === params.id);

  // If accommodation not found, show 404
  if (!accommodation) {
    notFound();
  }

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

      {/* Accommodation Details */}
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <Link
            href="/accommodations"
            className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800"
          >
            ← Back to accommodations
          </Link>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gray-300 min-h-[240px] md:min-h-[400px] relative">
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
              <div className="md:w-1/2 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-1">{accommodation.name}</h1>
                    <p className="text-blue-800 font-medium mb-4">{accommodation.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-900 font-medium">Starting from</div>
                    <div className="text-3xl font-bold text-blue-800">
                      ${(accommodation.price.standard / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-gray-700 text-sm">per night</div>
                  </div>
                </div>
                
                <p className="text-gray-900 font-medium mb-6">{accommodation.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2 text-blue-800">Amenities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {accommodation.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center text-gray-900 font-medium">
                        <span className="mr-2 text-green-600">✓</span>
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2 text-blue-800">Special Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {accommodation.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-900 font-medium">
                        <span className="mr-2 text-green-600">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Room Options */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Room Options</h2>
            <div className="space-y-6">
              {/* Standard Room */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-4 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-900">Standard Room</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-800">
                        ${(accommodation.price.standard / 1000000).toFixed(1)}M
                      </div>
                      <div className="text-gray-700 text-sm">per night</div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-800 mb-4">
                    Comfortable accommodation with all essential amenities for a great space experience.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> Basic amenities
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> Earth view (limited)
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> Shared facilities
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> Space internet
                    </div>
                  </div>
                  <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
                    Book Standard Room
                  </button>
                </div>
              </div>

              {/* Deluxe Room */}
              <div className="border border-blue-200 rounded-lg overflow-hidden shadow-md">
                <div className="bg-blue-50 p-4 border-b border-blue-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="bg-blue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full inline-block mb-1">
                        Most Popular
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Deluxe Room</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-800">
                        ${(accommodation.price.deluxe / 1000000).toFixed(1)}M
                      </div>
                      <div className="text-gray-700 text-sm">per night</div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-800 mb-4">
                    Premium accommodations with enhanced amenities and better views for a superior space stay experience.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> All standard amenities
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> Premium Earth view
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> Private facilities
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> High-speed space internet
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> Room service
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> Priority access
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> Welcome package
                    </div>
                  </div>
                  <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
                    Book Deluxe Room
                  </button>
                </div>
              </div>

              {/* Premium Room */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-4 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-900">Premium Suite</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-800">
                        ${(accommodation.price.premium / 1000000).toFixed(1)}M
                      </div>
                      <div className="text-gray-700 text-sm">per night</div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-800 mb-4">
                    The ultimate luxury space accommodation with exclusive features, services, and unparalleled views.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> All deluxe amenities
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> 360° panoramic views
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> Private suite
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> Personal concierge
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> Gourmet dining
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> Private tours
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> Luxury amenities
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2 text-green-600">✓</span> VIP access to all facilities
                    </div>
                  </div>
                  <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
                    Book Premium Suite
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Guest Reviews</h2>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(accommodation.rating) ? "text-yellow-400" : "text-gray-400"}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-2 font-bold">{accommodation.rating.toFixed(1)}</span>
                <span className="mx-2">•</span>
                <span>{accommodation.reviewCount} reviews</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Mock reviews */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold mr-3">
                      JD
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">John Doe</h4>
                      <div className="text-gray-600 text-sm">Stayed in June 2025</div>
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <p className="text-gray-800">
                  &quot;Absolutely incredible experience! The views of Earth from my room were breathtaking. The zero-gravity pool was a highlight. Staff was incredibly attentive and made sure my stay was perfect.&quot;
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold mr-3">
                      JS
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Jane Smith</h4>
                      <div className="text-gray-600 text-sm">Stayed in May 2025</div>
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    ★★★★<span className="text-gray-400">★</span>
                  </div>
                </div>
                <p className="text-gray-800">
                  &quot;Amazing accommodations with incredible views. The space walk experience was the highlight of my stay. Only wish the WiFi was a bit faster, but I suppose that&apos;s to be expected in space!&quot;
                </p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 font-bold mr-3">
                      RJ
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Robert Johnson</h4>
                      <div className="text-gray-600 text-sm">Stayed in April 2025</div>
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <p className="text-gray-800">
                  &quot;Worth every penny! The luxury suite exceeded all expectations. The private tour of the facility was exceptional, and the food was out of this world - literally! Would definitely come back.&quot;
                </p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button className="text-blue-600 font-medium">
                View all {accommodation.reviewCount} reviews
              </button>
            </div>
          </div>

          {/* Related Accommodations */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Similar Accommodations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {accommodations
                .filter(a => a.id !== accommodation.id && a.type === accommodation.type)
                .slice(0, 3)
                .map((relatedAccommodation) => (
                  <div key={relatedAccommodation.id} className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="bg-gray-300 h-40 relative">
                      <div className="absolute top-0 left-0 m-3">
                        <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                          {relatedAccommodation.type.charAt(0).toUpperCase() + relatedAccommodation.type.slice(1)}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                        <h3 className="text-lg font-bold text-white">{relatedAccommodation.name}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between mb-2">
                        <div className="text-blue-800 font-medium">{relatedAccommodation.location}</div>
                        <div className="flex items-center">
                          <span className="text-yellow-400">★</span>
                          <span className="ml-1">{relatedAccommodation.rating.toFixed(1)}</span>
                        </div>
                      </div>
                      <div className="text-blue-800 font-bold mb-2">
                        From ${(relatedAccommodation.price.standard / 1000000).toFixed(1)}M
                      </div>
                      <Link
                        href={`/accommodations/${relatedAccommodation.id}`}
                        className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-md transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
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