import { destinations } from "../../../data/destinations";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingForm from "./booking-form";
import { Metadata } from "next";

// Generate static params for all destinations
export function generateStaticParams() {
  return destinations.map((destination) => ({
    id: destination.id,
  }));
}

// Generate dynamic metadata for the page
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const destination = destinations.find((d) => d.id === params.id);
  
  if (!destination) {
    return {
      title: "Destination Not Found",
    };
  }
  
  return {
    title: `${destination.name} | Space Travel`,
    description: destination.description,
  };
}

export default function DestinationPage({ params }: { params: { id: string } }) {
  // Find the destination in our data
  const destination = destinations.find((d) => d.id === params.id);

  // If destination not found, show 404
  if (!destination) {
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

      {/* Destination Details */}
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <Link
            href="/destinations"
            className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800"
          >
            ← Back to destinations
          </Link>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gray-300 min-h-[240px] md:min-h-[400px] relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 flex flex-col justify-end p-6">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-2">
                    {destination.type.charAt(0).toUpperCase() +
                      destination.type.slice(1)}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {destination.name}
                  </h1>
                </div>
              </div>
              <div className="md:w-1/2 p-6">
                <div className="flex flex-wrap mb-6">
                  <div className="w-1/2 mb-4">
                    <div className="text-gray-900 text-sm font-medium">Distance</div>
                    <div className="font-semibold text-gray-900">{destination.distance}</div>
                  </div>
                  <div className="w-1/2 mb-4">
                    <div className="text-gray-900 text-sm font-medium">Travel Time</div>
                    <div className="font-semibold text-gray-900">
                      {destination.travelTime}
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="text-gray-900 text-sm font-medium">Starting Price</div>
                    <div className="text-3xl font-bold text-blue-800">
                      ${(destination.price.economy / 1000000).toFixed(1)}M
                    </div>
                  </div>
                </div>
                <p className="text-gray-900 font-medium mb-6">{destination.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2 text-blue-800">Amenities</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {destination.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center text-gray-900 font-medium">
                        <span className="mr-2 text-green-600">✓</span>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <BookingForm destination={destination} />
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