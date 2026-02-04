'use client';

import { Metadata } from 'next';
import { StarIcon, HeartIcon, FireIcon, TrophyIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

// This will be replaced with actual Google Reviews API data
// For now, using example structure
const reviews = [
  {
    id: '1',
    author: 'Sarah M.',
    rating: 5,
    text: 'Best burgers in New Westminster! The atmosphere is amazing and the staff are so friendly. Their specialty burgers are absolutely incredible. Will definitely be back!',
    date: '2 weeks ago',
    profilePhoto: null,
    featured: true,
    highlight: 'Amazing burgers!',
  },
  {
    id: '2',
    author: 'Mike T.',
    rating: 5,
    text: 'Tried the Mile High Challenge - it was intense but so much fun! Even though I didn\'t finish it, the burger was delicious. Great local spot.',
    date: '1 month ago',
    profilePhoto: null,
    highlight: 'Mile High Challenge',
  },
  {
    id: '3',
    author: 'Jessica L.',
    rating: 5,
    text: 'Amazing food and great service! The perogy burger is a must-try. Love supporting local businesses like this. Highly recommend!',
    date: '1 month ago',
    profilePhoto: null,
    highlight: 'Must-try!',
  },
  {
    id: '4',
    author: 'David R.',
    rating: 4,
    text: 'Solid burger joint with lots of variety. Good portions and reasonable prices. The wood-paneled atmosphere gives it a classic diner feel.',
    date: '2 months ago',
    profilePhoto: null,
    highlight: 'Great value',
  },
  {
    id: '5',
    author: 'Amanda K.',
    rating: 5,
    text: 'Been coming here for years and it never disappoints. The burgers are consistently good and the staff remember regulars. True local gem!',
    date: '2 months ago',
    profilePhoto: null,
    highlight: 'Local gem!',
  },
  {
    id: '6',
    author: 'Tom B.',
    rating: 5,
    text: 'The best burger experience in the lower mainland. Fresh ingredients, creative combinations, and the service is always top-notch!',
    date: '3 months ago',
    profilePhoto: null,
    highlight: 'Top-notch!',
  },
];

const overallRating = 4.7;
const totalReviews = 247;

const ratingBreakdown = [
  { stars: 5, percentage: 85, count: 210 },
  { stars: 4, percentage: 10, count: 25 },
  { stars: 3, percentage: 3, count: 7 },
  { stars: 2, percentage: 1, count: 3 },
  { stars: 1, percentage: 1, count: 2 },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <div key={star}>
          {star <= rating ? (
            <StarIcon className="h-5 w-5 text-yellow-400" />
          ) : (
            <StarOutlineIcon className="h-5 w-5 text-gray-300" />
          )}
        </div>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const featuredReview = reviews.find(r => r.featured);
  const regularReviews = reviews.filter(r => !r.featured);

  return (
    <div className="bg-wood-100 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-10 right-10 opacity-20 animate-bounce">
          <HeartIcon className="w-16 h-16" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-20 animate-pulse">
          <FireIcon className="w-20 h-20" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 mb-6">
            <TrophyIcon className="w-12 h-12 md:w-16 md:h-16 text-yellow-300 animate-pulse" />
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg">
              What Our Customers Say
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Real reviews from real burger lovers. See why locals keep coming back to Burger Heaven!
          </p>
        </div>
      </section>

      {/* Overall Rating & Stats Section */}
      <section className="py-12 bg-white border-b-4 border-primary-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Overall Rating */}
            <div className="text-center lg:text-left">
              <div className="inline-flex flex-col items-center lg:items-start gap-4 p-8 bg-gradient-to-br from-primary-50 to-white rounded-3xl shadow-xl border-2 border-primary-200 w-full">
                <div className="flex items-center gap-4">
                  <div className="text-8xl font-bold text-primary-600 animate-pulse">{overallRating}</div>
                  <div className="flex flex-col items-start">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon
                          key={star}
                          className={`h-8 w-8 transition-all duration-300 ${
                            star <= Math.round(overallRating)
                              ? 'text-yellow-400 scale-110'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-lg text-gray-600 mt-2 font-semibold">
                      {totalReviews} Google Reviews
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/place/Burger+Heaven/@49.2047,-122.9128,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 w-full justify-center"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Write a Review on Google
                </a>
              </div>
            </div>

            {/* Rating Breakdown */}
            <div className="bg-gradient-to-br from-wood-50 to-white p-8 rounded-3xl shadow-xl border-2 border-wood-200">
              <h3 className="font-heading text-2xl font-bold mb-6 text-accent-900">Rating Breakdown</h3>
              <div className="space-y-3">
                {ratingBreakdown.map((item) => (
                  <div key={item.stars} className="flex items-center gap-4">
                    <div className="flex items-center gap-1 w-20">
                      <span className="font-semibold text-accent-900">{item.stars}</span>
                      <StarIcon className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-600 w-16 text-right">
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Review */}
      {featuredReview && (
        <section className="py-12 bg-gradient-to-br from-primary-50 to-wood-50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-full font-semibold text-sm shadow-lg">
                <StarIcon className="w-5 h-5" />
                Featured Review
              </span>
            </div>

            <div className="relative bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-4 border-primary-300 transform hover:scale-[1.02] transition-all duration-300">
              {/* Large quote mark */}
              <div className="absolute top-4 left-4 text-primary-200 opacity-50">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>

              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {featuredReview.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-accent-900">{featuredReview.author}</h3>
                    <p className="text-gray-500">{featuredReview.date}</p>
                    <div className="mt-2">
                      <StarRating rating={featuredReview.rating} />
                    </div>
                  </div>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed mb-4 italic">
                  "{featuredReview.text}"
                </p>

                <div className="flex items-center gap-2 text-primary-600 font-semibold">
                  <FireIcon className="w-5 h-5" />
                  <span>{featuredReview.highlight}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-center mb-12 text-accent-900 flex items-center justify-center gap-3">
            <ChatBubbleLeftIcon className="w-10 h-10 text-primary-600" />
            More Happy Customers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularReviews.map((review, index) => (
              <div
                key={review.id}
                className="group bg-white p-6 rounded-2xl shadow-lg border-2 border-wood-200 hover:border-primary-400 transition-all hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Quote icon */}
                <div className="absolute top-4 right-4 text-primary-200 opacity-30">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>

                {/* Review Header */}
                <div className="flex items-start justify-between mb-4 relative">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-accent-900">{review.author}</h3>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="mb-3">
                  <StarRating rating={review.rating} />
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-4">{review.text}</p>

                {/* Highlight badge */}
                {review.highlight && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-3">
                    <HeartIcon className="w-4 h-4" />
                    {review.highlight}
                  </div>
                )}

                {/* Google Icon */}
                <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Posted on Google
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps/place/Burger+Heaven/@49.2047,-122.9128,17z/data=!4m5!3m4!1s0x0:0x0!8m2!3d49.2047!4d-122.9128"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              See All {totalReviews} Reviews on Google
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 animate-bounce">
            <StarIcon className="w-24 h-24" />
          </div>
          <div className="absolute bottom-10 right-10 animate-pulse">
            <HeartIcon className="w-32 h-32" />
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Had a Great Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Share your Burger Heaven experience and help other burger lovers discover us!
          </p>
          <a
            href="https://www.google.com/maps/place/Burger+Heaven/@49.2047,-122.9128,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl hover:scale-110"
          >
            <StarIcon className="w-6 h-6" />
            Leave a Review
          </a>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
