import { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';
import { GalleryImage } from '@/types/menu';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Gallery | Burger Heaven',
  description: 'Browse photos of our delicious burgers, appetizers, and restaurant locations.',
};

// Automatically get all images from the gallery folder
function getGalleryImages(): GalleryImage[] {
  const galleryDir = path.join(process.cwd(), 'public', 'images', 'gallery');

  try {
    const files = fs.readdirSync(galleryDir);
    const imageFiles = files.filter(file =>
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );

    return imageFiles.map((file, index) => ({
      id: String(index + 1),
      src: `/images/gallery/${file}`,
      alt: file.replace(/\.(jpg|jpeg|png|gif|webp)$/i, '').replace(/[-_]/g, ' '),
      caption: file.replace(/\.(jpg|jpeg|png|gif|webp)$/i, '').replace(/[-_]/g, ' '),
      category: 'gallery'
    }));
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return [];
  }
}

export default function GalleryPage() {
  const images = getGalleryImages();

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

      {/* Instagram Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="text-center diner-card rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-heading text-primary-700 mb-4">
            FOLLOW US ON INSTAGRAM
          </h2>
          <p className="text-lg text-accent-800 mb-6">
            Check out our latest posts <span className="font-bold text-primary-600">@burgerheavennewwest</span>
          </p>
          <a
            href="https://www.instagram.com/burgerheavennewwest/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
          >
            Follow @burgerheavennewwest
          </a>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading text-accent-900 mb-4">
            OUR GALLERY
          </h2>
          <p className="text-lg text-accent-700">
            A collection of our delicious creations and restaurant atmosphere
          </p>
        </div>

        <GalleryGrid images={images} />

        <div className="mt-12 text-center diner-card rounded-2xl p-8 animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-heading text-primary-700 mb-4">
            SHARE YOUR EXPERIENCE
          </h2>
          <p className="text-accent-800 mb-6">
            Tag us <span className="font-bold text-primary-600">@burgerheavennewwest</span> or use <span className="font-bold text-primary-600">#BurgerHeaven</span> to be featured!
          </p>
        </div>
      </div>
    </div>
  );
}
