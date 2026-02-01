'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { GalleryImage } from '@/types/menu';

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const slides = images.map((image) => ({
    src: image.src,
    alt: image.alt,
    title: image.caption,
  }));

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group bg-gray-200"
            onClick={() => {
              setPhotoIndex(index);
              setOpen(true);
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-4">
              <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                {image.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={photoIndex}
        slides={slides}
      />
    </>
  );
}
