import { packages } from '../../../data/packages';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Generate static params for all packages
export function generateStaticParams() {
  return packages.map((pkg) => ({
    id: pkg.id,
  }));
}

// Generate dynamic metadata for the page
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const pkg = packages.find((p) => p.id === params.id);
  
  if (!pkg) {
    return {
      title: "Package Not Found",
    };
  }
  
  return {
    title: `${pkg.name} | Space Travel`,
    description: pkg.description,
  };
}

export default function PackagePage({ params }: { params: { id: string } }) {
  // Find the package in our data
  const pkg = packages.find((p) => p.id === params.id);

  // If package not found, show 404
  if (!pkg) {
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

      {/* Package Details */}
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <Link
            href="/packages"
            className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800"
          >
            ← Back to packages
          </Link>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gray-300 min-h-[240px] md:min-h-[400px] relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 flex flex-col justify-end p-6">
                  <div className="flex gap-2 mb-2">
                    {pkg.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {pkg.name}
                  </h1>
                </div>
              </div>
              <div className="md:w-1/2 p-6">
                <div className="flex flex-wrap mb-6">
                  <div className="w-1/2 mb-4">
                    <div className="text-gray-900 text-sm font-medium">Duration</div>
                    <div className="font-semibold text-gray-900">{pkg.duration}</div>
                  </div>
                  <div className="w-1/2 mb-4">
                    <div className="text-gray-900 text-sm font-medium">Price</div>
                    <div className="text-3xl font-bold text-blue-800">
                      ${(pkg.price / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>
                </div>
                <p className="text-gray-900 font-medium mb-6">{pkg.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2 text-blue-800">Included Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-900 font-medium">
                        <span className="mr-2 text-green-600">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2 text-blue-800">Destinations Included</h3>
                  <div className="flex flex-wrap gap-2">
                    {pkg.destinations.map((dest, index) => (
                      <Link key={index} href={`/destinations/${dest}`}>
                        <span className="inline-block bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-gray-800 text-sm cursor-pointer transition-colors">
                          {dest.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Book This Package</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Standard</h3>
                <p className="text-gray-800 mb-4">Basic package with all essential features</p>
                <div className="text-2xl font-bold text-blue-800 mb-2">
                  ${(pkg.price / 1000000).toFixed(1)}M
                </div>
                <ul className="mb-4">
                  <li className="flex items-center text-gray-700 mb-1">
                    <span className="mr-2 text-green-600">✓</span> All basic features
                  </li>
                  <li className="flex items-center text-gray-700 mb-1">
                    <span className="mr-2 text-green-600">✓</span> Standard accommodations
                  </li>
                  <li className="flex items-center text-gray-700 mb-1">
                    <span className="mr-2 text-green-600">✓</span> Group activities
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors">
                  Select Standard
                </button>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 transform scale-105 shadow-md">
                <div className="bg-blue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full inline-block mb-2">Popular Choice</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium</h3>
                <p className="text-gray-800 mb-4">Enhanced experience with extra features</p>
                <div className="text-2xl font-bold text-blue-800 mb-2">
                  ${((pkg.price * 1.5) / 1000000).toFixed(1)}M
                </div>
                <ul className="mb-4">
                  <li className="flex items-center text-gray-700 mb-1">
                    <span className="mr-2 text-green-600">✓</span> All standard features
                  </li>
                  <li className="flex items-center text-gray-700 mb-1">
                    <span className="mr-2 text-green-600">✓</span> Premium accommodations
                  </li>
                  <li className="flex items-center text-gray-700 mb-1">
                    <span className="mr-2 text-green-600">✓</span> Private activities
                  </li>
                  <li className="flex items-center text-gray-700 mb-1">
                    <span className="mr-2 text-green-600">✓</span> Priority boarding
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors">
                  Select Premium
                </button>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury</h3>
                <p className="text-gray-800 mb-4">Ultimate experience with exclusive perks</p>
                <div className="text-2xl font-bold text-blue-800 mb-2">
                  ${((pkg.price * 2) / 1000000).toFixed(1)}M
                </div>
                <ul className="mb-4">
                  <li className="flex items-center text-gray-700 mb-1">
                    <span className="mr-2 text-green-600">✓</span> All premium features
                  </li>
                  <li className="flex items-center text-gray-700 mb-1">
                    <span className="mr-2 text-green-600">✓</span> Luxury suite accommodations
                  </li>
                  <li className="flex items-center text-gray-700 mb-1">
                    <span className="mr-2 text-green-600">✓</span> Private guide and concierge
                  </li>
                  <li className="flex items-center text-gray-700 mb-1">
                    <span className="mr-2 text-green-600">✓</span> Exclusive events access
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors">
                  Select Luxury
                </button>
              </div>
            </div>
          </div>

          {/* Related Packages */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages
                .filter(p => p.id !== pkg.id)
                .slice(0, 3)
                .map((relatedPkg) => (
                  <div key={relatedPkg.id} className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="bg-gray-300 h-40 relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end">
                        <div className="p-4 text-white">
                          <h3 className="text-lg font-bold">{relatedPkg.name}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-gray-900 font-medium mb-2">{relatedPkg.duration}</div>
                      <div className="text-blue-800 font-bold mb-2">
                        ${(relatedPkg.price / 1000000).toFixed(1)}M
                      </div>
                      <Link
                        href={`/packages/${relatedPkg.id}`}
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