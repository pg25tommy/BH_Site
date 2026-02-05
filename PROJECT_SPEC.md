# Burger Heaven Website - Project Specification

## Project Overview
A modern, responsive website for Burger Heaven - a Canadian burger restaurant in New Westminster, BC, known for signature burgers, specialty items, and the famous "Ernie's Mile High" challenge burger.

## Brand Identity

### Theme & Tone
- **Heaven-Themed Branding**: Angelic/celestial naming conventions throughout (Angelic Appetizers, Heaven Sent Burgers, Lil Angels, etc.)
- **Playful & Fun**: Casual, friendly atmosphere with humor in descriptions ("Magic Mushrooms (not the real thing!)", "It will make you yodel!!")
- **Canadian Pride**: Canadian cheddar, perogies, poutine - celebrating Canadian food culture
- **Bold & Adventurous**: Challenge burgers (Mile High Club), creative combinations (Insanity Burger)
- **Locally Owned**: Proudly serving New Westminster since 1985

### Unique Selling Points
1. **The Mile High Challenge**: Ernie's Mile High burger ($72.69) - 3 pounds of meat, 8 patties high
2. **Canadian Flavors**: Perogy Burger, Poutine variants, Canadian cheddar
3. **Creative Burgers**: Unique combinations like Thai Beef Burger with peanut butter, Insanity Burger (burger between grilled cheese sandwiches)
4. **Customization**: Extensive topping options (23+ toppings available)
5. **Hall of Fame**: Mile High Club winners with photo gallery

## Target Audience
- Burger enthusiasts and food adventurers
- Families (dedicated kids menu)
- Seniors (special pricing for 65+)
- Challenge seekers (Mile High Club)
- Local Canadian communities in New Westminster, BC

## Website Goals

### Primary Objectives
1. **Showcase the Menu**: Complete, accurate menu display with descriptions and pricing
2. **Drive Orders**: Easy access to online ordering (Skip the Dishes integration)
3. **Build Community**: Mile High Club feature, gallery of customer experiences, reviews
4. **Email List Growth**: Burger Insiders newsletter signup with Canadian CASL compliance
5. **Engage Customers**: Career opportunities, contact forms, reservation system

### User Experience Goals
1. **Easy Navigation**: Quick access to all pages via comprehensive navigation
2. **Visual Appeal**: Food photography, gallery of burgers and happy customers
3. **Mobile-Friendly**: Responsive design for on-the-go ordering
4. **Clear Information**: Prices, descriptions, locations, hours clearly displayed
5. **Fast Loading**: Optimized images (WebP format) and efficient code

## Site Structure & Pages

### Navigation Order
1. Home
2. Menu
3. Gallery
4. Mile High Club
5. Locations
6. About
7. Careers
8. Contact
9. Burger Insiders (Newsletter signup)
10. Reviews

### Page Details

#### 1. Home Page (`/`)
- Hero section with restaurant exterior photo
- Daily featured items (4 rotating items)
- Mile High Challenge promotional section
- Location information card
- Reservation call-ahead section with Reserve_2.jpg image
- Burger Insiders newsletter signup CTA
- SEO optimized for "New Westminster burger restaurant"

#### 2. Menu Page (`/menu`)
- Sticky category navigation
- 8 menu categories with detailed items
- Daily featured items section at top
- Divine Toppings section
- Pricing notes and disclaimers
- Mobile-responsive card layout

#### 3. Gallery Page (`/gallery`)
- Grid layout of food and atmosphere photos
- Categories: Food, Restaurant Interior, Customer Experiences
- High-quality images optimized for web

#### 4. Mile High Club Page (`/mile-high-club`)
- Challenge details and rules
- Pricing: $72.69
- **Hall of Fame** with actual winner photos (8 winners):
  - Ernies_1st.jpg through Ernies_8th.jpg
  - Special animated gold trophy badge for 1st place winner
  - Place labels for all winners (1st, 2nd, 3rd, etc.)
  - Hover effects with image scaling
- "What You Get" section with checklist
- Rewards for winners (Wall of Fame, T-Shirt, Bragging Rights)
- CTA buttons to locations and menu

#### 5. Locations Page (`/locations`)
- Single New Westminster location:
  - **Address**: 77 10th St, New Westminster, BC V3M 3X4
  - **Phone**: 604-522-8339
  - **Hours**: Sun-Thu 11am-9pm, Fri-Sat 11am-10pm
- Embedded Google Maps
- Skip the Dishes ordering link
- Get Directions button
- Reservation call-ahead section (centered text)
- Ordering information (Dine-in, Takeout, Delivery, Catering)

#### 6. About Page (`/about`)
- Restaurant history (since 1985)
- Brand story and values
- Team introduction
- Community involvement

#### 7. Careers Page (`/careers`)
- Current job openings
- Application process
- Company culture
- Benefits and perks

#### 8. Contact Page (`/contact`)
- Contact form
- Location information
- Business hours
- Social media links

#### 9. Burger Insiders Page (`/burger-insiders`) **NEW**
- **Newsletter signup page** with Canadian CASL compliance
- Features:
  - Full signup form (first name + email)
  - **Required consent checkbox**: "I want to receive promotions, deals, and announcements from Burger Heaven"
  - **Info button** with Canadian Anti-Spam Legislation (CASL) disclaimer including:
    - Express consent statement
    - Right to unsubscribe at any time
    - Contact methods (email unsubscribe, phone 604-522-8339, in-person)
    - Privacy protection guarantee
  - Benefits section (Exclusive Deals, Early Access, Birthday Treats)
  - API integration with https://bh-email.vercel.app/api/subscribe
  - Form validation and error handling
  - Success/error messaging
- SEO: "Join the Burger Insiders club for exclusive deals"
- Same email list as footer newsletter form

#### 10. Reviews Page (`/reviews`)
- Featured customer review with large quote styling
- Rating breakdown (5 stars: 85%, 4 stars: 10%, etc.)
- Individual review cards with:
  - Customer name and rating
  - Review text
  - Highlight badges ("Best Burgers!", "Great Service!", etc.)
  - Decorative icons (trophy, heart, fire) with animations
- Staggered fade-in animations
- Google Reviews integration (4.7+ stars, 247 reviews)
- SEO optimized for "burger heaven reviews new westminster"

## Menu Structure

### Categories (In Order)
1. **Angelic Appetizers** (8 items)
   - Chicken Fingers, Wings, Onion Rings, Poutine variants, Magic Mushrooms, Yam Wedges

2. **Galaxy of Special Sandwiches** (7 items)
   - Clubs, **Grilled Cheddar Cheese** (image: Grilled_Cheese.jpg), Beef Dip, BLT, Fish 'n' Chips

3. **Create Your Own Favourite** (4 base options)
   - Beef, Grilled Chicken, Meatless, Cod burgers
   - Build with custom toppings

4. **Lil Angels (Under 12) & Seniors (65+)** (4 items)
   - All $15.49, includes drink, side, and small sundae

5. **Your Top 10!** (10 signature burgers)
   - Numbered 1-10, featuring customer favorites
   - "The Works" Burger, Perogy Beef Burger, BBQ Cheddar Bacon & Mushroom, etc.

6. **To Die For Specialty Burgers** (10 items)
   - Premium/challenge burgers
   - Ernie's Mile High, Awesome x3, Hulk Burger
   - Themed burgers: Greek God, Hawaiian, Spicy Inferno

7. **Salads / Soup** (7 items)
   - Caesar, Artisan, Mediterranean salads
   - Soup of the day (cup/bowl)

8. **Divine Toppings** (23 toppings)
   - Prices range from $1.89 to $2.39
   - Cheeses, meats, vegetables, specialty items

### Pricing Strategy
- Appetizers: $7.89 - $20.69
- Sandwiches: $11.29 - $23.29
- Base Burgers: $18.09 - $20.89
- Top 10 Burgers: $22.89 - $27.99
- Specialty Burgers: $24.89 - $72.69
- Kids/Seniors: $15.49 (flat rate)
- Salads: $9.59 - $13.49
- Soup: $4.89 (cup) / $7.59 (bowl)

## Key Features

### Current Features
1. **Responsive Navigation**: Mobile and desktop menu with hamburger icon
2. **Sticky Category Navigation**: Quick jump links to menu sections
3. **Menu Display**: Category-based layout with item cards
4. **Daily Featured Items**: Automatically rotating featured items that change daily using date-based seeded random selection
5. **Multiple Pages**: 10 complete pages with full content
6. **Email Newsletter System**: Footer signup + dedicated Burger Insiders page with CASL compliance
7. **Reviews System**: Customer testimonials with rating breakdown
8. **Mile High Club Hall of Fame**: Real winner photos with special badges
9. **Reservation System**: Call-ahead messaging on home and locations pages
10. **Skip the Dishes Integration**: Direct ordering links throughout site

### Daily Featured Items System
**How it works:**
- Uses a date-based seeded random selection algorithm
- Items remain consistent throughout the entire day
- Changes automatically at midnight
- Excludes kids/seniors menu and soup/salad items from random selection
- Displays 4 items on home page
- Visually highlighted with special styling and "Featured Today" badge
- Includes current date display on home page
- Helps keep content fresh and encourages repeat visits

**Technical Implementation:**
- Utility function: `getDailyFeaturedItems(menuData, count)`
- Seeded random number generator using current date (YYYY-MM-DD format)
- Deterministic selection ensures consistency across server renders
- Component: `FeaturedItems` - reusable featured items display
- Located in: `/src/utils/featuredItems.ts`

### Email Newsletter System
**Integration Details:**
- **API Endpoint**: https://bh-email.vercel.app/api/subscribe
- **Method**: POST with JSON body `{ email: string, firstName: string }`
- **Response Codes**:
  - 201: Success - `{ success: true }`
  - 409: Already subscribed - `{ error: "You are already subscribed!" }`
  - 400/500: Error - `{ error: "error message" }`
- **CORS**: Enabled from site origin
- **Locations**:
  - Footer component (quick signup)
  - Dedicated /burger-insiders page (full experience with CASL compliance)
  - Home page CTA section
- **Canadian CASL Compliance**:
  - Express consent checkbox required
  - Clear opt-in language
  - Unsubscribe instructions included
  - Contact information provided
  - Privacy policy reference

### Image Assets

#### Menu Images
- Located in: `/public/images/menu/`
- Organized by category (burgers/, sandwiches/, appetizers/)
- Format: WebP for optimization, JPG fallbacks
- Key images:
  - `Grilled_Cheese.jpg` - Grilled cheddar cheese sandwich

#### Atmosphere Images
- Located in: `/public/images/atmosphere/`
- Key images:
  - `Outside_Hero.jpg` - Restaurant exterior (home page hero)
  - `Reserve_2.jpg` - Reserved table interior (reservation sections)
  - `Ernies_1st.jpg` through `Ernies_8th.jpg` - Mile High Club winners

## Technical Specifications

### Technology Stack
- **Framework**: Next.js 14 (React) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Icons**: Heroicons
- **Social Icons**: react-icons (FaInstagram, FaTiktok)
- **Data**: JSON-based menu system
- **Deployment**: Vercel

### Custom Theme (Tailwind)
```javascript
colors: {
  primary: { // Orange/red
    50-900: Various shades
  },
  accent: { // Brown/tan
    50-900: Various shades
  },
  wood: { // Beige/wood tones
    50-900: Various shades
  }
}
fontFamily: {
  heading: ['var(--font-heading)']
}
```

### File Structure
```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Home page
│   ├── menu/              # Menu page
│   ├── gallery/           # Gallery page
│   ├── mile-high-club/    # Mile High Club page with winner photos
│   ├── locations/         # Locations page
│   ├── about/             # About page
│   ├── careers/           # Career opportunities
│   ├── contact/           # Contact form
│   ├── burger-insiders/   # Newsletter signup (CASL compliant)
│   ├── reviews/           # Customer reviews & testimonials
│   │   ├── page.tsx       # Client component for animations
│   │   └── layout.tsx     # Metadata wrapper
│   └── sitemap.ts         # XML sitemap generation
├── components/            # Reusable components
│   ├── Header.tsx         # Main navigation (10 links)
│   ├── Footer.tsx         # Site footer with newsletter form
│   ├── MenuItem.tsx       # Individual menu item card
│   ├── MenuCategory.tsx   # Menu category section
│   └── FeaturedItems.tsx  # Daily featured items display
├── data/
│   ├── menuData.json      # Complete menu data
│   └── locations.json     # Location information
├── types/
│   └── menu.ts            # TypeScript interfaces
└── utils/
    └── featuredItems.ts   # Daily featured items logic
```

### Data Models

#### MenuItem
```typescript
{
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  featured?: boolean;
  available?: boolean;
}
```

#### MenuCategory
```typescript
{
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}
```

#### Location
```typescript
{
  id: string;
  name: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
  hours: {
    weekday: string;
    weekend: string;
  };
  coordinates?: {
    lat: number;
    lng: number;
  };
  skipTheDishes?: string;
}
```

## Design System

### Color Scheme
- **Primary**: Orange/red (#ea580c family) - appetizing, energetic, matches brand
- **Accent**: Brown/tan (#78350f family) - warm, earthy, comfort food
- **Wood**: Beige tones (#fef3c7 family) - diner aesthetic, warmth
- **Neutrals**: Grays for text, white backgrounds

### Typography
- **Headings**: Custom heading font (bold, friendly)
- **Body**: System sans-serif stack
- **Prices**: Prominent, clear display
- **Sizes**: Responsive (text-4xl to text-7xl for headers)

### Visual Elements
- Food photography (appetizing, high-quality, WebP optimized)
- Heaven/celestial imagery (clouds, halos, subtle patterns)
- Canadian elements (maple leaf, local pride messaging)
- Diner aesthetic (wood panels, warm tones)
- Glass morphism effects (glass-card class)
- Gradient overlays for text readability on images
- Animated elements (fade-in, scale on hover, pulse badges)

### Component Patterns
- **Diner Cards**: `.diner-card` - white background, shadow, rounded corners
- **Glass Cards**: `.glass-card` - translucent, backdrop blur
- **Wood Panels**: `.wood-panel` - textured wood background
- **Buttons**: Gradient primary buttons, rounded-full style
- **Animations**: `animate-fade-in-up` with staggered delays

## Content Guidelines

### Writing Style
- **Playful Descriptions**: "Miss Piggy's favorite", "It will make you yodel!!"
- **Descriptive Details**: Specific ingredients and preparation methods
- **Honest Pricing**: All prices displayed, add-ons clearly marked
- **Canadian Spelling**: Honour Canadian English conventions
- **Local Pride**: Emphasize "locally owned", "serving New Westminster since 1985"

### SEO Strategy
- **Location Keywords**: New Westminster, BC, 77 10th St
- **Product Keywords**: Burgers, Canadian burgers, Mile High Challenge
- **Local Intent**: "burger restaurant near me", "best burgers New Westminster"
- **Long-tail**: "locally owned burger restaurant BC", "burger challenge New Westminster"

### Menu Description Patterns
- Lead with main ingredients
- Include cooking method when relevant
- Add personality with taglines
- Note customization options inline
- Use exclamation points for emphasis on exciting items

## Marketing & Social

### Social Media
- **Instagram**: @burgerheavennewwest
- **TikTok**: @burgerheavennewwe
- Links in footer with icons

### Email Marketing
- Newsletter signup in footer and dedicated page
- Burger Insiders club branding
- Promise of exclusive deals, early access, birthday treats
- CASL compliant with explicit consent

### Online Ordering
- Primary: Skip the Dishes integration
- Links on home page, locations page, navigation
- Direct link: https://www.skipthedishes.com/burger-heaven-new-westminster

## Success Metrics

### Key Performance Indicators
1. **Online Orders**: Conversion rate from menu views to Skip the Dishes clicks
2. **Email Signups**: Newsletter subscription rate
3. **Location Traffic**: Visitors checking hours/directions
4. **Menu Engagement**: Time spent on menu page, category clicks
5. **Mobile Usage**: % of mobile vs desktop traffic
6. **Reviews**: Google review count and rating
7. **Mile High Challenge**: Participation inquiries

## Future Enhancements

### Potential Features
1. **Direct Online Ordering**: Full e-commerce integration (beyond Skip the Dishes)
2. **Loyalty Program**: Digital rewards for repeat customers
3. **Nutritional Information**: Calories, allergens per item
4. **User Reviews**: Customer testimonials submission form
5. **Table Reservation System**: Online booking for dine-in
6. **Catering Menu**: Dedicated large order section
7. **Mobile App**: Native iOS/Android apps
8. **Social Media Feed**: Live Instagram integration
9. **Gift Cards**: Purchase and redeem online
10. **Multiple Locations**: Expansion support ready in data structure

### Marketing Opportunities
- Mile High Club social sharing (Instagram hashtag campaign)
- Customer photo submissions to gallery
- Seasonal burger specials
- Local partnerships (BC breweries, local suppliers)
- Event hosting (burger eating contests)
- Google My Business optimization
- Local food blogger partnerships

## Accessibility & Performance

### Accessibility Features
- Semantic HTML structure
- Alt text for all images
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast ratios
- Mobile touch targets minimum 44x44px

### Performance Optimizations
- WebP image format with JPG fallbacks
- Next.js Image component with lazy loading
- Optimized font loading
- Minimal JavaScript bundle
- Server-side rendering for SEO
- Static generation where possible
- Fast initial page load (<3s)

## Business Information

### Single Location
- **Name**: Burger Heaven New Westminster
- **Address**: 77 10th St, New Westminster, BC V3M 3X4
- **Phone**: 604-522-8339
- **Hours**:
  - Sunday-Thursday: 11:00 AM - 9:00 PM
  - Friday-Saturday: 11:00 AM - 10:00 PM
- **Established**: 1985
- **Type**: Locally owned Canadian restaurant

### Ordering Options
1. **Dine-In**: Walk-ins welcome, call ahead for groups 6+
2. **Takeout**: Call ahead, payment in-person or over phone
3. **Delivery**: Skip the Dishes (fees and minimums apply)
4. **Catering**: Contact for large orders with advance notice

---

**Last Updated**: 2026-02-05
**Status**: Production
**Priority**: Customer experience, menu accuracy, email list growth
**Site URL**: https://burgerheavennw.ca
**Repository**: Burger_Heaven_Site
