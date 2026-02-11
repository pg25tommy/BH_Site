import Image from 'next/image';
import Link from 'next/link';
import { WeeklyFeatured } from '@/types/menu';

interface WeeklyChalkboardProps {
  featured: WeeklyFeatured;
  showViewMenuButton?: boolean;
}

export default function WeeklyChalkboard({
  featured,
  showViewMenuButton = true,
}: WeeklyChalkboardProps) {
  const weekDate = new Date(featured.weekOf + 'T00:00:00');
  const weekString = weekDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <section className="section-padding bg-wood-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Wooden frame */}
        <div
          className="rounded-lg p-3 sm:p-4 shadow-2xl"
          style={{
            background: 'linear-gradient(145deg, #8B6914, #6B4F12, #8B6914, #5C4410)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 8px 30px rgba(0,0,0,0.4)',
          }}
        >
          {/* Chalkboard surface */}
          <div
            className="relative rounded overflow-hidden px-6 py-10 sm:px-10 sm:py-12"
            style={{
              background: 'linear-gradient(160deg, #2d4a3e, #1e3a2f, #243f35, #1a332b)',
            }}
          >
            {/* Chalk dust texture */}
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
              }}
            />
            {/* Chalk smudge marks */}
            <div className="absolute top-6 right-10 w-20 h-8 bg-white/[0.03] rounded-full blur-xl rotate-12" />
            <div className="absolute bottom-10 left-8 w-16 h-6 bg-white/[0.02] rounded-full blur-lg -rotate-6" />

            <div className="relative">
              {/* Header */}
              <div className="text-center mb-8 sm:mb-10">
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-heading text-white mb-2 tracking-wider"
                  style={{
                    textShadow: '0 0 15px rgba(255,255,255,0.1)',
                    opacity: 0.95,
                  }}
                >
                  THIS WEEK&apos;S SPECIALS
                </h2>
                <p
                  className="text-sm tracking-widest uppercase"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  Week of {weekString}
                </p>
                {/* Chalk line divider */}
                <div
                  className="mt-4 mx-auto h-[2px] w-40"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), rgba(255,255,255,0.35), rgba(255,255,255,0.2), transparent)',
                  }}
                />
              </div>

              {/* Two featured items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {[
                  { item: featured.burger, label: 'Featured Burger' },
                  { item: featured.sandwich, label: 'Featured Sandwich' },
                ].map(({ item, label }) => (
                  <div key={item.id} className="text-center group">
                    <p
                      className="text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3 font-light"
                      style={{ color: 'rgba(255,255,255,0.4)' }}
                    >
                      {label}
                    </p>

                    {item.image && (
                      <div className="relative h-44 sm:h-52 md:h-56 rounded-lg overflow-hidden mb-5 border border-white/5">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a332b]/70 to-transparent" />
                      </div>
                    )}

                    <h3
                      className="text-xl sm:text-2xl md:text-3xl font-heading text-white mb-2 tracking-wide"
                      style={{
                        textShadow: '0 0 10px rgba(255,255,255,0.08)',
                        opacity: 0.92,
                      }}
                    >
                      {item.name}
                    </h3>

                    <p
                      className="text-sm leading-relaxed mb-3 max-w-xs mx-auto font-light"
                      style={{ color: 'rgba(255,255,255,0.55)' }}
                    >
                      {item.description}
                    </p>

                    <span
                      className="inline-block text-lg sm:text-xl font-heading tracking-wider"
                      style={{ color: 'rgba(255,255,255,0.85)' }}
                    >
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {showViewMenuButton && (
                <div className="text-center mt-10">
                  <Link
                    href="/menu"
                    className="inline-block rounded-full border border-white/20 text-white/80 px-8 py-3 text-sm font-semibold tracking-wider hover:bg-white/5 transition-all duration-300 hover:border-white/40"
                  >
                    View Full Menu
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
