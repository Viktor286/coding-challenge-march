"use client";

import { useState } from "react";
import { Destination } from "../../../data/destinations";
import Link from "next/link";

interface BookingFormProps {
  destination: Destination;
}

export default function BookingForm({ destination }: BookingFormProps) {
  const [selectedDate, setSelectedDate] = useState("");
  const [seatClass, setSeatClass] = useState<"economy" | "business" | "luxury">(
    "economy",
  );
  const [travelers, setTravelers] = useState(1);
  const [bookingComplete, setBookingComplete] = useState(false);

  const seatPrices = {
    economy: destination.price.economy,
    business: destination.price.business,
    luxury: destination.price.luxury,
  };

  const totalPrice = seatPrices[seatClass] * travelers;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically submit the booking data to an API
    // For now, we'll just simulate a successful booking
    setBookingComplete(true);
  };

  if (bookingComplete) {
    return (
      <div className="mt-12 p-8 bg-green-50 border border-green-200 rounded-lg text-center">
        <div className="text-5xl mb-4">🚀</div>
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          Booking Confirmed!
        </h2>
        <p className="text-gray-800 mb-6 font-medium">
          Your space journey to {destination.name} is confirmed for{" "}
          {selectedDate}. Get ready for the adventure of a lifetime!
        </p>
        <p className="text-gray-800 mb-8">
          A confirmation email has been sent to your registered email address
          with all the details.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setBookingComplete(false)}
            className="px-6 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Book Another Trip
          </button>
          <Link
            href="/dashboard"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            View Your Bookings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-blue-900 text-white p-6">
        <h2 className="text-2xl font-bold">Book Your Journey</h2>
        <p>Complete the form below to secure your space adventure</p>
      </div>

      <form onSubmit={handleBookingSubmit} className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="date"
              className="block text-gray-700 font-medium mb-2"
            >
              Select Departure Date
            </label>
            <select
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">-- Select a date --</option>
              {destination.availableDates.map((date) => (
                <option key={date} value={date}>
                  {new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="travelers"
              className="block text-gray-700 font-medium mb-2"
            >
              Number of Travelers
            </label>
            <input
              type="number"
              id="travelers"
              min="1"
              max="10"
              value={travelers}
              onChange={(e) => setTravelers(parseInt(e.target.value))}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 font-medium mb-2">
            Select Seat Class
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                seatClass === "economy"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300"
              }`}
              onClick={() => setSeatClass("economy")}
            >
              <div className="font-semibold text-lg mb-1 text-blue-900">Economy</div>
              <div className="text-gray-900 font-medium mb-2">
                Standard space travel experience
              </div>
              <div className="text-blue-800 font-bold">
                ${(destination.price.economy / 1000000).toFixed(1)}M
              </div>
            </div>

            <div
              className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                seatClass === "business"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300"
              }`}
              onClick={() => setSeatClass("business")}
            >
              <div className="font-semibold text-lg mb-1 text-blue-900">Business</div>
              <div className="text-gray-900 font-medium mb-2">
                Enhanced comfort and amenities
              </div>
              <div className="text-blue-800 font-bold">
                ${(destination.price.business / 1000000).toFixed(1)}M
              </div>
            </div>

            <div
              className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                seatClass === "luxury"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300"
              }`}
              onClick={() => setSeatClass("luxury")}
            >
              <div className="font-semibold text-lg mb-1 text-blue-900">Luxury</div>
              <div className="text-gray-900 font-medium mb-2">
                Premium experience with private quarters
              </div>
              <div className="text-blue-800 font-bold">
                ${(destination.price.luxury / 1000000).toFixed(1)}M
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-5 rounded-lg mb-6">
          <div className="flex justify-between mb-2">
            <span className="font-medium text-gray-900">Base price ({seatClass})</span>
            <span className="font-medium text-gray-900">${(seatPrices[seatClass] / 1000000).toFixed(1)}M</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium text-gray-900">Travelers</span>
            <span className="font-medium text-gray-900">x {travelers}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t border-gray-300 pt-2 mt-2">
            <span className="text-gray-900">Total</span>
            <span className="text-blue-800">${(totalPrice / 1000000).toFixed(1)}M</span>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Complete Booking
          </button>
        </div>
      </form>
    </div>
  );
}
