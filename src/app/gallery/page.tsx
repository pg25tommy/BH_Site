import { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';
import galleryData from '@/data/galleryImages.json';
import { GalleryImage } from '@/types/menu';

const images = galleryData.images as GalleryImage[];

export const metadata: Metadata = {
  title: 'Gallery | Burger Heaven',
  description: 'Browse photos of our delicious burgers, appetizers, and restaurant locations.',
};

export default function GalleryPage() {
  return (
    <div className="bg-wood-100 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-5xl md:text-6xl font-heading text-center mb-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
            GALLERY
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto font-light">
            A visual feast of our mouth-watering burgers and restaurant atmosphere
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <GalleryGrid images={images} />

        <div className="mt-12 text-center diner-card rounded-2xl p-8 animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-heading text-primary-700 mb-4">
            SHARE YOUR EXPERIENCE
          </h2>
          <p className="text-accent-800 mb-6">
            Tag us on social media with <span className="font-bold text-primary-600">#BurgerHeaven</span> to be featured in our gallery!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 shadow-md"
            >
              Follow on Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 shadow-md"
            >
              Like on Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
