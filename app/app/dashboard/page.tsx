import Link from 'next/link';

export default function DashboardPage() {
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
            <Link href="/accommodations" className="hover:text-blue-200 transition-colors">
              Accommodations
            </Link>
            <Link
              href="/dashboard"
              className="text-blue-200 border-b-2 border-blue-200 transition-colors"
            >
              Dashboard
            </Link>
          </nav>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="flex-1 py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Space Travel Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Stats Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Your Travel Stats</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Total Journeys</span>
                  <span className="font-semibold text-blue-800">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Destinations Visited</span>
                  <span className="font-semibold text-blue-800">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Light Years Traveled</span>
                  <span className="font-semibold text-blue-800">0.0042</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Space Miles</span>
                  <span className="font-semibold text-blue-800">248,500</span>
                </div>
              </div>
            </div>
            
            {/* Upcoming Trips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Journeys</h2>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-3">
                  <div className="font-semibold text-blue-800">Lunar Explorer</div>
                  <div className="text-gray-700">May 15, 2025</div>
                  <div className="mt-1 text-sm text-gray-600">Countdown: 32 days</div>
                </div>
                <div>
                  <div className="font-semibold text-blue-800">Orbital Weekend</div>
                  <div className="text-gray-700">August 22, 2025</div>
                  <div className="mt-1 text-sm text-gray-600">Countdown: 131 days</div>
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
                View All Trips
              </button>
            </div>
            
            {/* Space Rewards */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Space Rewards</h2>
              <div className="text-4xl font-bold text-blue-800 mb-2">★ 78,500</div>
              <div className="text-gray-700 mb-4">Space Miles Earned</div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-blue-600 w-3/4"></div>
              </div>
              <div className="text-sm text-gray-600 mb-4">21,500 miles to next reward tier</div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
                View Rewards Catalog
              </button>
            </div>
          </div>
          
          {/* Recent Journeys */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Journeys</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Journey</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Destination</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Duration</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">
                    <div className="font-medium text-blue-800">Orbital Hotel Stay</div>
                  </td>
                  <td className="py-3 px-4 text-gray-700">Jan 12, 2025</td>
                  <td className="py-3 px-4 text-gray-700">Low Earth Orbit</td>
                  <td className="py-3 px-4 text-gray-700">3 days</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">
                    <div className="font-medium text-blue-800">Lunar Surface Walk</div>
                  </td>
                  <td className="py-3 px-4 text-gray-700">Nov 28, 2024</td>
                  <td className="py-3 px-4 text-gray-700">Moon</td>
                  <td className="py-3 px-4 text-gray-700">7 days</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">
                    <div className="font-medium text-blue-800">Space Station Tour</div>
                  </td>
                  <td className="py-3 px-4 text-gray-700">Jul 3, 2024</td>
                  <td className="py-3 px-4 text-gray-700">ISS</td>
                  <td className="py-3 px-4 text-gray-700">1 day</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Completed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Recommendations */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-gray-300 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">Mars Preview Experience</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-blue-800 font-medium mb-2">14 days • $9.8M</div>
                <p className="text-gray-700 mb-4 text-sm">
                  Get a glimpse of future Mars missions with this orbital flyby and simulation package.
                </p>
                <Link
                  href="/packages"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-md transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-gray-300 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">Zero-G Golf Championship</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-blue-800 font-medium mb-2">5 days • $4.2M</div>
                <p className="text-gray-700 mb-4 text-sm">
                  Join the inaugural Zero-G Golf tournament in Earth orbit. Equipment and training included.
                </p>
                <Link
                  href="/packages"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-md transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-gray-300 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">Lunar Photography Retreat</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-blue-800 font-medium mb-2">10 days • $6.5M</div>
                <p className="text-gray-700 mb-4 text-sm">
                  Capture stunning Earth-rise photos and lunar landscapes with expert guidance.
                </p>
                <Link
                  href="/packages"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-md transition-colors"
                >
                  View Details
                </Link>
              </div>
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