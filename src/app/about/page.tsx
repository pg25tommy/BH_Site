import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Burger Heaven',
  description: 'Learn about Burger Heaven\'s story, our commitment to quality, and what makes our burgers special.',
};

export default function AboutPage() {
  return (
    <div className="bg-wood-100 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-5xl md:text-6xl font-heading text-center mb-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
            ABOUT US
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto font-light">
            Our story, our passion, our commitment to burger perfection
          </p>
        </div>
      </section>

      {/* Story Section with Bill Mural Image */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="diner-card rounded-2xl p-8 md:p-12 mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading text-primary-700 mb-8 text-center">
              THE HISTORY OF HOW IT ALL STARTED
            </h2>

            {/* Bill Mural Image */}
            <div className="relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-8">
              <Image
                src="/images/atmosphere/Bill_Hero.jpg"
                alt="Bill Mural - Founder of Burger Heaven"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-900/20 to-transparent"></div>
            </div>

            <p className="text-center text-lg font-semibold text-primary-700 mb-8">
              Bill Mural - Founder of Burger Heaven
            </p>

            <div className="prose prose-lg max-w-none text-accent-800 space-y-4 leading-relaxed">
              <p>
                My father "Bill Mural" came out from Montreal in September of 1985 to look at this Classy Burger Joint called Burger Haven at the time. The restaurant had been opened and run by a man named Gord Skillen, who now was looking at other ventures and wanted to move on. My father walked into the restaurant and within a half an hour had made his decision to purchase it, he said it was just the overall feeling he got when he walked through the door, and the greatest burger he had ever tasted. From that point he moved to New Westminster and starting working with Gord to take over the restaurant and make it his own, but still keeping the great base he had to work with. With his new menu developments which all had a base to work from he used to say, we can add whatever we want as long as it starts with a burger, and we hold that till this day and forever will. When I entered into the restaurant business end with my father we grew as a team and worked many long hours together and apart, till finally one day in 1993 he walked away to start yet another business venture. I consider the Burger Heaven to be my second home, it is where I am comfortable and at my best. Burgers are my life.
              </p>
              <p>
                I have always really enjoyed being a part of the Burger Heaven restaurant ever since I was 14 years old doing dishes for our customers. The atmosphere of the restaurant is very relaxed and a glad to be here feeling. Most long term customers have put something into this place whether it is suggestion on new menu items or a part of the actual structure. Two of our weekly customers gave us the cedar planking that lines our walls and to this day they still enjoy coming and reminiscing about how things are and used to be. I have grown up with our patrons and they enjoy hearing about the other things going on in my life as I do theirs. I have watched their children grow up and become our patrons as well. Many people love to make this place a first date outing as they are always greeted with a smile and a "welcome back". If you are looking for fast food this is not the place, everything in our kitchen is made with pride and freshness, we always have the attitude that if you are not proud of it you don&apos;t serve it. It&apos;s not cheap, but these days it is hard to find quality at a reasonable price, except here. With the tight spacing of the tables and the social atmosphere it is hard not to make new friends while you are dining, because your neighbor might only be inches away. I have dined at many restaurant over the years and have always compared them to the Burger Heaven and have found few which come with the entire package, Great food, Great value, Great atmosphere, and most of all professional, courteous, and friendly service, over all a glad I have been there feeling when you leave and look forward to the next time you return. This is my kind of place.
              </p>
              <p>
                We would like to thank Bill Mural, founder of Burger Heaven. We will strive to continue his commitment and dedication to quality, value and service.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="diner-card rounded-2xl p-6 text-center animate-fade-in-up group hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-4">🍔</div>
              <h3 className="text-xl font-heading text-primary-700 mb-3 group-hover:text-primary-600 transition-colors">
                QUALITY FIRST
              </h3>
              <p className="text-accent-800">
                We source only the finest ingredients and prepare everything fresh
                daily.
              </p>
            </div>
            <div className="diner-card rounded-2xl p-6 text-center animate-fade-in-up group hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.25s' }}>
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-heading text-primary-700 mb-3 group-hover:text-primary-600 transition-colors">
                MADE WITH PASSION
              </h3>
              <p className="text-accent-800">
                Every burger is crafted with care by our experienced kitchen team.
              </p>
            </div>
            <div className="diner-card rounded-2xl p-6 text-center animate-fade-in-up group hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-heading text-primary-700 mb-3 group-hover:text-primary-600 transition-colors">
                COMMUNITY FOCUSED
              </h3>
              <p className="text-accent-800">
                We&apos;re proud members of our local communities and support local
                suppliers.
              </p>
            </div>
          </div>

          {/* What Makes Us Special */}
          <div className="diner-card rounded-2xl p-8 md:p-12 mb-12 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
            <h2 className="text-3xl md:text-4xl font-heading text-primary-700 mb-6">
              WHAT MAKES US SPECIAL
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">
                  Premium Ingredients
                </h3>
                <p className="text-accent-800 leading-relaxed">
                  We use 100% Canadian beef, fresh produce, and artisan buns baked
                  daily. No frozen patties, no shortcuts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">
                  Signature Recipes
                </h3>
                <p className="text-accent-800 leading-relaxed">
                  Our unique burger combinations are the result of years of
                  experimentation and customer feedback. From the classic Works
                  Burger to the legendary Mile High, each creation tells a story.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">
                  Family Atmosphere
                </h3>
                <p className="text-accent-800 leading-relaxed">
                  Whether you&apos;re dining solo, on a date, or bringing the whole
                  family, our friendly staff ensures you feel right at home.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-900 mb-2">
                  Generous Portions
                </h3>
                <p className="text-accent-800 leading-relaxed">
                  We believe in giving you great value. Our burgers are substantial,
                  our fries are plentiful, and you&apos;ll never leave hungry.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center glass-card rounded-2xl p-12 text-accent-900 animate-fade-in-up border-2 border-primary-500/20" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl md:text-4xl font-heading text-primary-700 mb-4">
              EXPERIENCE THE DIFFERENCE
            </h2>
            <p className="text-xl text-accent-800 mb-8 font-light">
              Visit us today and taste what makes Burger Heaven special
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="inline-block rounded-full bg-gradient-to-r from-primary-600 to-primary-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View Our Menu
              </Link>
              <Link
                href="/locations"
                className="inline-block rounded-full bg-wood-200 hover:bg-wood-300 text-accent-900 px-8 py-4 text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Find a Location
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
