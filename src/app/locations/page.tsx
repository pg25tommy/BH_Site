import { Metadata } from 'next';
import { PhoneIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';
import locationsData from '@/data/locations.json';
import { Location } from '@/types/menu';

const locations = locationsData.locations as Location[];

export const metadata: Metadata = {
  title: 'Location | Burger Heaven',
  description: 'Visit us in New Westminster, BC. Order online through Skip the Dishes.',
};

export default function LocationsPage() {
  return (
    <div className="bg-wood-100 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-5xl md:text-6xl font-heading text-center mb-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
            OUR LOCATION
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto font-light">
            Serving New Westminster with the best burgers around
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {locations.map((location, index) => (
              <div
                key={location.id}
                id={location.id}
                className="diner-card rounded-2xl overflow-hidden scroll-mt-24 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Map Placeholder */}
                <div className="h-64 bg-wood-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-accent-700">
                    <div className="text-center">
                      <MapPinIcon className="w-16 h-16 mx-auto mb-2 text-primary-600" />
                      <p className="text-sm font-semibold">Map: {location.name}</p>
                      <p className="text-xs mt-1">
                        Lat: {location.coordinates?.lat}, Lng: {location.coordinates?.lng}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location Details */}
                <div className="p-8">
                  <h2 className="text-3xl font-heading text-primary-700 mb-6">
                    {location.name.toUpperCase()}
                  </h2>

                  {/* Address */}
                  <div className="flex items-start gap-4 mb-4">
                    <MapPinIcon className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-accent-800">{location.address}</p>
                      <p className="text-accent-800">
                        {location.city}, {location.province} {location.postalCode}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4 mb-4">
                    <PhoneIcon className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <a
                      href={`tel:${location.phone.replace(/\D/g, '')}`}
                      className="text-accent-800 hover:text-primary-600 font-semibold transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 mb-6">
                    <ClockIcon className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-accent-800">{location.hours.weekday}</p>
                      <p className="text-accent-800">{location.hours.weekend}</p>
                    </div>
                  </div>

                  {/* Order Button */}
                  <div id="order" className="scroll-mt-24">
                    {location.skipTheDishes && (
                      <a
                        href={location.skipTheDishes}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:shadow-xl text-white text-center font-bold py-4 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        Order Online - Skip the Dishes
                      </a>
                    )}
                  </div>

                  {/* Directions Button */}
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${location.coordinates?.lat},${location.coordinates?.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mt-3 bg-wood-200 hover:bg-wood-300 text-accent-900 text-center font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="diner-card rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl md:text-3xl font-heading text-primary-700 mb-4">
              ORDERING INFORMATION
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-accent-800">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-accent-900">
                  Dine-In
                </h3>
                <p className="leading-relaxed">
                  Walk-ins welcome! For groups of 6 or more, we recommend calling
                  ahead to ensure we can accommodate you.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-accent-900">
                  Takeout
                </h3>
                <p className="leading-relaxed">
                  Call ahead to place your order and we&apos;ll have it ready for
                  pickup. Payment can be made over the phone or in person.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-accent-900">
                  Delivery
                </h3>
                <p className="leading-relaxed">
                  Order through Skip the Dishes for convenient delivery right to
                  your door. Delivery fees and minimums apply.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-accent-900">
                  Catering
                </h3>
                <p className="leading-relaxed">
                  Planning an event? Contact us for catering options. We can
                  accommodate groups of all sizes with advance notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
