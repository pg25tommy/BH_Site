# Changelog

All notable changes to the Burger Heaven website project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Removed - 2026-05-27

#### Weekly Chalkboard Feature
- **Removed Weekly Featured Chalkboard Component**
  - Eliminated dependency on external admin panel API for featured items
  - Simplified architecture by removing `WeeklyChalkboard` component
  - Removed `getWeeklyFeatured()` API calls from home and menu pages
  - Menu items still display featured/best seller badges as designed
  - No more API connection errors for weekly featured items

### Changed - 2026-05-27

#### Image Optimization & Performance
- **Optimized All Hero and Featured Images**
  - Compressed Mile High Challenge winner photos (Ernies_1st.jpg through Ernies_8th.jpg)
    - Reduced from 3.6-4.2 MB each to 220-264 KB each (~94% reduction)
  - Optimized hero images (Outside_Hero.jpg, Inside_Hero.jpg, Bill_Hero.jpg)
    - Reduced from 800KB-1.4MB to 112-180KB each (~88% reduction)
  - Total size savings: ~65 MB across all optimized images
  - Resized images to max 1200px width (optimal for retina displays)
  - Applied 80% JPEG compression with progressive encoding
  - **Performance Impact**:
    - Mile High Club page load reduced by ~28 MB
    - Expected LCP improvement from ~4s to <1s
    - Significant mobile performance gains on cellular connections

- **Image Optimization Tooling**
  - Created automated image optimization script (`optimize-images.js`)
  - Uses Sharp library for high-quality image compression
  - Configurable settings (max width, quality, file size threshold)
  - Batch processing with progress reporting and statistics

### Added - 2026-02-03

#### Security Enhancements
- **Security Utilities Module** (`src/utils/security.ts`)
  - HTML escaping function to prevent XSS attacks
  - Email format validation (RFC-compliant with 254 char limit)
  - Phone number validation (10-20 characters, standard formats)
  - String length validation for all text inputs
  - Filename sanitization to prevent path traversal attacks
  - PDF magic bytes validation (%PDF- header check)

- **Security Headers** (`next.config.ts`)
  - Content-Security-Policy (CSP) with Google Maps support
  - X-Content-Type-Options (nosniff)
  - X-Frame-Options (DENY)
  - X-XSS-Protection
  - Strict-Transport-Security (HSTS)
  - Referrer-Policy
  - Permissions-Policy

#### Job Application Features
- **PDF Resume Upload** (`src/app/careers/page.tsx`)
  - Optional PDF resume attachment for job applications
  - Client-side validation (MIME type, 5MB size limit)
  - Server-side PDF validation using magic bytes
  - File display with name and size preview
  - Base64 encoding for email delivery via Resend API

### Changed - 2026-02-03

#### Menu Organization
- **Top 10 Reordering** - Moved "Your Top 10!" to first position in menu
- **Featured Items Reduced** - Changed from 6 to 4 featured items on home page
- **Best Seller Badges** - Added "BEST SELLER" badges to featured menu items
- **Menu Navigation** - Simplified jump bar and reordered sections
- **Drinks Consolidation** - All beverage categories excluded from featured rotation
- **Toppings Repositioned** - Moved after "Create Your Own" section for better UX

#### Email Communication
- **Contact Form Subject Lines** (`src/app/api/contact/route.ts`)
  - Changed format to: `[Subject Category] - [Name]`
  - Enables quick urgency identification in inbox
  - Examples: "Catering Inquiry - John Smith", "Complaint - Jane Doe"

- **Application Email Subject Lines** (`src/app/api/apply/route.ts`)
  - Changed format to: `[Position] - [First Name Last Name]`
  - Enables quick position filtering and candidate identification
  - Examples: "Line Cook - John Smith", "Server - Jane Doe"

#### Security Improvements
- **XSS Protection** - All user input escaped in email templates
- **Input Validation** - Comprehensive validation on all form fields
  - Name fields: 50-100 character limits
  - Position: 100 character limit
  - Subject: 200 character limit
  - Messages: 5000 character limit
  - Email format validation
  - Phone format validation
- **File Upload Security**
  - Server-side PDF validation (not just MIME type)
  - Filename sanitization (removes path separators, null bytes)
  - 5MB file size limit enforced server-side
- **Error Handling** - Removed sensitive error details from API responses
- **Debug Cleanup** - Removed all console.log debug statements
- **Environment Variables** - Moved recipient email to CONTACT_EMAIL env var

### Fixed - 2026-02-03
- **TypeScript Build Error** - Fixed validateLength return type to explicitly return boolean
- **CSP Blocking Maps** - Added Google Maps exceptions to Content-Security-Policy
- **CSP Blocking Next.js** - Added WebSocket and hot reload support to CSP
- **Navigation Breaking** - Fixed security headers preventing site navigation

### Changed - 2026-01-31

#### Modern Design Refinement (Latest Update)
- **Contemporary UI Update** - Refined the orange/woodgrain theme with modern design patterns
- **Menu Page Modernization** - Updated menu page to match home page styling

**Modern Design Elements Added:**
- **Glass Morphism**: Added glass-card class with backdrop blur and transparency
- **Smooth Animations**: Implemented fadeInUp animation and hover effects
- **Refined Shadows**: Multi-layered shadows for depth (0.08, 0.1, 0.12 opacity levels)
- **Gradient Buttons**: Replaced solid buttons with gradient from-to effects
- **Rounded Design**: Changed from sharp corners to rounded-2xl and rounded-full
- **Better Spacing**: Implemented section-padding utility (5rem mobile, 7rem desktop)
- **Ambient Backgrounds**: Added subtle radial gradients and blur effects
- **Interactive Elements**: Underline animations on nav, scale on hover (scale-105, scale-110)

**Component Modernization:**
- **Header**:
  - Backdrop blur for modern feel
  - Animated underline on nav items
  - Gradient button with ripple effect
  - Softer shadows (0 4px 20px)
  - Rounded-lg mobile menu with glass effect

- **Home Page**:
  - Ambient blob backgrounds with blur-3xl
  - Section padding utilities for consistent spacing
  - Glass-card CTAs with backdrop filter
  - Rounded-full buttons instead of rounded-lg
  - Gradient text on pricing ($72.69)
  - Icon integration for location details (📍📞🕐)

- **FeaturedItems**:
  - Rounded-2xl cards
  - Staggered animation delays
  - Image hover zoom (scale-110)
  - Gradient overlay on images
  - Refined price badges with gradients
  - Better text hierarchy and spacing

**Technical Improvements:**
- Removed heavy wood grain textures
- Added CSS custom properties for consistency
- Implemented smooth transitions (0.3s ease)
- Better hover states across all interactive elements
- Improved typography with font-light variants

**Menu Page Overhaul** (`src/app/menu/page.tsx`, `src/components/MenuItem.tsx`, `src/components/MenuCategory.tsx`):
- **Background**: Changed from gray-50 to wood-100 for warm, consistent look
- **Header**: Gradient background with pattern overlay matching home page
- **Quick Navigation**: Glass-card styling with hover scale effects
- **Navigation Pills**: Rounded-full with hover color change to primary-500
- **MenuItem Cards**:
  - Diner-card styling with rounded-2xl
  - Image zoom on hover (scale-110)
  - Gradient price badges
  - Gradient overlay on images
  - Group hover effects for name color change
- **MenuCategory**:
  - Updated heading colors to primary-700
  - Staggered fade-in animations (animate-fade-in-up)
  - Better spacing (mb-20 between sections)
- **Toppings Section**:
  - Diner-card styling for each topping
  - Gradient price badges
  - Staggered animation delays
  - Group hover effects
- **Note Section**: Glass-card styling with border-primary-500

#### Complete Visual Theme Overhaul
- **Old-School Diner/Tavern Aesthetic** - Transformed from bright modern to warm vintage

**Color Palette Redesign** (`src/app/globals.css`)
- **Primary Colors**: Changed from red to orange tones
  - Orange color scale (50-900) for main brand elements
  - Used for buttons, headings, and CTAs
- **Accent Colors**: Woodgrain/brown tones
  - Earthy brown palette (50-900) for borders, text, and backgrounds
  - Creates warm, inviting tavern atmosphere
- **New Wood Colors**: Added dedicated woodgrain palette
  - Light to dark brown shades (50-900)
  - Used for backgrounds and panels
- **Background**: Changed from bright white (#ffffff) to warm cream (#f5e6d3)
- **Foreground**: Changed from black to dark brown (#2d1810)
- **Added subtle woodgrain texture** to body background

**Custom CSS Classes Added:**
- `.diner-card` - Card component with vintage diner styling
- `.wood-panel` - Woodgrain panel background with texture
- Woodgrain texture overlay effect using CSS gradients

**Component Updates:**
- **Header Component** (`src/components/Header.tsx`)
  - Wood-panel background with gradient
  - Dark brown navigation text
  - Orange logo with text shadow for depth
  - 4px bottom border in accent brown
  - Updated button colors to orange theme

- **Home Page** (`src/app/page.tsx`)
  - Hero section: Wood-panel background instead of red gradient
  - Orange title with drop shadow
  - Warm cream/brown color scheme throughout
  - Updated all CTAs to use orange and woodgrain colors
  - Mile High Challenge: Orange gradient background
  - Locations section: Diner card styling

- **FeaturedItems Component** (`src/components/FeaturedItems.tsx`)
  - Diner card styling for each item
  - Woodgrain background tones
  - Orange price badges with borders
  - Brown/tan color scheme replacing bright whites
  - Border accents in woodgrain colors

**Design Philosophy:**
- Darker, warmer color palette
- Orange and woodgrain as primary brand colors
- Old-school diner/tavern vibes
- Vintage aesthetic with modern functionality
- Text shadows and borders for depth
- Consistent use of warm browns and oranges throughout

### Added - 2026-01-31

#### Menu Data Implementation
- **Complete Menu Data Structure** (`src/data/menuData.json`)
  - Implemented all menu categories with exact pricing and descriptions from original menu
  - 7 main categories with 50+ menu items total
  - 23 toppings with individual pricing
  - All descriptions preserved verbatim from original menu including unique personality and humor

**Menu Categories Added:**
1. **Angelic Appetizers** (8 items)
   - Chicken Fingers ($18.09)
   - Chicken Wings ($20.69) - Hot, BBQ, Teriyaki, Sweet Thai Chili, Mango Habanero options
   - Onion Rings ($13.99)
   - Nacho Poutine ($16.89)
   - Poutine ($13.99)
   - Loaded Potato Wedges ($14.49)
   - Magic Mushrooms ($13.99) - "not the real thing!"
   - Yam Wedges ($7.89)

2. **Galaxy of Special Sandwiches** (7 items)
   - Toasted Wanker's Club ($20.09) - "Jimmy's own favorite!!"
   - Toasted Heavenly Club ($21.09) - "It's a bite of heaven!!"
   - Toasted Chicken Club ($23.29)
   - Our Great Grilled Cheddar Cheese ($11.29) - "so nippy it bites back!"
   - The Classic Beef Dip ($22.49) - with horseradish mayo and au jus
   - Toasted B.L.T. ($15.09)
   - Fish 'n' Chips ($22.89)

3. **Create Your Own Favourite** (4 base options)
   - Heaven Sent Beef Burger ($18.09)
   - Heaven Sent Grilled Chicken Burger ($20.79)
   - Heaven Sent Meatless Burger ($18.49)
   - Heaven Sent Cod Burger ($20.89) - beer battered, grilled, or cajun options

4. **Lil Angels (Under 12) & Seniors (65+)** (4 items)
   - All items $15.49
   - Includes small pop/milk/juice/coffee, potato wedges or salad, and small sundae
   - Grilled Cheese Sandwich
   - Child's Cheese Burger
   - Chicken Fingers
   - Fish 'n' Chips

5. **Your Top 10!** (10 signature burgers)
   - "The Works" Burger ($25.89) - "A Heavenly Meal at a heck of a deal"
   - Perogy Beef Burger ($25.69) - 4 mini perogies, sautéed onion, cheese
   - BBQ, Cheddar, Bacon & Mushroom Burger ($24.49) - "Democratically elected"
   - Teriyaki, Mozzarella, Bacon & Mushroom Burger ($24.49) - "Miss Piggy's favorite"
   - Swiss, Mozzarella & Pickle Burger ($23.19) - "A cheese lover's dream"
   - Thai Beef Burger ($22.89) - Crunchy peanut butter, bacon, sweet thai chili
   - Breaded Chicken, Bacon, Cheddar & Mozzarella ($27.19) - "Perfection"
   - Teriyaki Grilled Chicken, Swiss & Bacon ($27.99) - "It will make you yodel!!"
   - Mexican Meatless Garden Burger ($24.59) - Salsa, guacamole, jalapeños
   - Breakfast Burger ($25.09) - Mozzarella, fried egg, bacon - "Gooood Morningnn!!"

6. **To Die For Specialty Burgers** (10 items)
   - Ernie's Mile High ($72.69) - 3 lbs meat, 8 patties high with THE WORKS
   - Awesome! Awesome! Awesome! ($45.49) - 1.5 lbs meat with THE WORKS
   - Hulk Burger ($31.09) - Two patties with THE WORKS
   - Greek God Burger ($24.89) - Feta, green peppers, olives, tzatziki
   - Insanity Burger ($29.99) - Burger between two grilled cheese sandwiches
   - Chicken Marinara Burger ($27.19) - Marinara, parmesan, mozzarella
   - Hawaiian Burger ($25.89) - Teriyaki, ham, pineapple - "Beats poi any day!"
   - Chicken Cordon Bleu Burger ($25.89) - Breaded chicken, ham, mozzarella
   - The Spicy Inferno ($27.19) - Cajun, habanero mango, jack cheese, jalapeños
   - Greek Goddess Veggie Burger ($25.29) - Sundried tomatoes, feta, hummus

7. **Salads / Soup** (7 items)
   - Caesar by Caesar - Appy ($9.59) / Dinner ($13.49)
   - Artisan Salad - Appy ($9.59) / Dinner ($13.49)
   - Mediterranean Salad ($13.49) - Artichoke hearts, kalamata olives, pine nuts
   - Soup - Cup ($4.89) / Bowl ($7.59)
   - All salads served with garlic toast
   - Add Chicken ($5.59) or Cod ($5.89) options
   - Multiple dressing options: Strawberry Vinaigrette, Ranch, Sundried Tomato, 1000 Island, Blue Cheese, French, Italian, Honey Mustard

**Divine Toppings Added (23 toppings):**
- Canadian Cheddar Cheese ($1.89)
- Mozzarella Cheese ($1.89)
- Swiss Cheese ($2.09)
- Jack Cheese ($2.09)
- Feta Cheese ($2.09)
- Blue Cheese ($2.09)
- Canadian Bacon ($1.89)
- Mushrooms ($1.89)
- Ham ($1.89)
- Guacamole ($1.89)
- Salsa ($1.89)
- Jalapeños ($1.89)
- Caramelized Onions ($2.09)
- Fried Egg ($1.89)
- Tzatziki ($1.89)
- Pineapple ($1.89)
- Black Olives ($1.89)
- Dill Pickle ($1.89)
- Green Peppers ($1.89)
- Banana Peppers ($1.89)
- Sundried Tomatoes ($2.09)
- Hummus ($1.89)
- Mini Perogies ($2.39)

#### Daily Featured Items System
- **Created Utility Functions** (`src/utils/featuredItems.ts`)
  - `getDailyFeaturedItems(menuData, count)` - Main function for daily featured item selection
  - `getFeaturedItemsByCategory(menuData, categoryIds, count)` - Category-specific featured items
  - `getDailySeed()` - Date-based seed generator for consistent daily randomization
  - `seededRandom(seed)` - Seeded random number generator
  - `seededShuffle(array, seed)` - Deterministic array shuffling based on date
  - `getTodayDateString()` - Formatted date string for display

**Featured Items Logic:**
- Uses current date (YYYY-MM-DD) as seed for random selection
- Ensures same items featured throughout entire day
- Automatically rotates at midnight
- Excludes kids/seniors menu and soup/salad categories from selection
- Deterministic algorithm ensures consistency across all users and server renders

- **Created FeaturedItems Component** (`src/components/FeaturedItems.tsx`)
  - Responsive grid layout (1 col mobile, 2 tablet, 4 desktop)
  - Gradient background styling (primary-50 to accent-50)
  - "Featured Today" badge on each item
  - Optional date display with formatted date string
  - Hover effects with scale transitions
  - Image support with fallback handling
  - Price display in accent-colored pill
  - "View Full Menu" call-to-action button
  - Line-clamp for description overflow

#### Page Updates
- **Home Page** (`src/app/page.tsx`)
  - Replaced static featured items with daily rotating system
  - Displays 6 daily featured items
  - Shows current date with featured items section
  - Removed hardcoded `featured: true` filter
  - Integrated `FeaturedItems` component
  - Added "Featured Items Section - Changes Daily" comment for clarity

- **Menu Page** (`src/app/menu/page.tsx`)
  - Added daily featured items section at top
  - Displays 4 daily featured items
  - Featured section above sticky navigation for visibility
  - Date display hidden on menu page (showDate={false})
  - Gradient background wrapper for visual separation

- **Careers Page** (`src/app/careers/page.tsx`)
  - Updated to focus on two positions only: Line Cook and Server
  - Removed Kitchen Manager and Dishwasher positions
  - Enhanced job descriptions with more detail
  - Line Cook: Emphasizes signature burgers, fast-paced environment, growth opportunities
  - Server: Highlights heaven-themed atmosphere, tips included, experience not required
  - Both positions available full-time and part-time

- **About Us Page** (`src/app/about/page.tsx`)
  - Added Vimeo video embed (https://vimeo.com/138351283)
  - "Our Story In Action" section prominently featured after story text
  - Responsive video player with 16:9 aspect ratio
  - Professional styling with rounded corners and shadow
  - Video positioned for high visibility between story and values sections

#### Documentation
- **Project Specification** (`PROJECT_SPEC.md`)
  - Comprehensive project documentation created
  - Brand identity and theme guidelines
  - Complete menu structure documentation
  - Technical specifications and file structure
  - Design considerations and color schemes
  - Content writing style guidelines with examples
  - Future enhancements roadmap
  - Success metrics and KPIs
  - Daily Featured Items System section added with:
    - How it works explanation
    - Technical implementation details
    - Display locations and counts
    - Benefits for user engagement

- **Changelog** (`CHANGELOG.md`)
  - Created this file
  - Following Keep a Changelog format
  - Documenting all changes, additions, and updates
  - Semantic versioning ready

#### TypeScript Types
- **Menu Types** (`src/types/menu.ts`)
  - `MenuItem` interface - Individual menu item structure
  - `MenuCategory` interface - Category with items array
  - `Topping` interface - Topping structure
  - `MenuData` interface - Complete menu data structure
  - `Location` interface - Restaurant location data
  - `GalleryImage` interface - Gallery image metadata

### Technical Details

#### Project Structure
```
burger-heaven-site/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Home page with featured items
│   │   ├── menu/
│   │   │   └── page.tsx                # Menu page with categories
│   │   ├── gallery/
│   │   ├── mile-high-club/
│   │   ├── locations/
│   │   ├── about/
│   │   ├── franchise/
│   │   ├── careers/
│   │   ├── contact/
│   │   └── layout.tsx
│   ├── components/
│   │   ├── Header.tsx                  # Main navigation
│   │   ├── Footer.tsx                  # Site footer
│   │   ├── MenuItem.tsx                # Menu item card
│   │   ├── MenuCategory.tsx            # Category section
│   │   └── FeaturedItems.tsx           # Daily featured items display (NEW)
│   ├── data/
│   │   └── menuData.json               # Complete menu database (UPDATED)
│   ├── types/
│   │   └── menu.ts                     # TypeScript interfaces
│   └── utils/
│       └── featuredItems.ts            # Featured items utilities (NEW)
├── PROJECT_SPEC.md                     # Project specification (NEW)
└── CHANGELOG.md                        # This file (NEW)
```

#### Technology Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Data Storage**: JSON files
- **Deployment**: Ready for Vercel/Netlify

#### Key Features Implemented
1. ✅ Complete menu data with exact pricing and descriptions
2. ✅ Daily rotating featured items system
3. ✅ Responsive navigation with mobile menu
4. ✅ Sticky category navigation on menu page
5. ✅ TypeScript type safety throughout
6. ✅ Reusable component architecture
7. ✅ Comprehensive documentation

### Data Accuracy
- All menu item names preserved exactly as provided
- All descriptions including personality and humor maintained
- All prices accurate to original menu
- Canadian spellings and terminology preserved
- Special characters and formatting maintained (e.g., "Wanker's", "n'")

### User Experience Improvements
- Daily content variation encourages repeat visits
- Featured items highlight menu diversity
- Visual hierarchy guides users to daily specials
- Consistent experience across all devices
- Fast, efficient rendering with Next.js

---

## Development Notes

### Menu Content Philosophy
The menu maintains the original restaurant's unique voice and personality:
- Playful descriptions ("Miss Piggy's favorite", "It will make you yodel!!")
- Heaven-themed branding throughout
- Canadian cultural references (perogies, poutine)
- Honest, detailed ingredient lists
- Humor and personality in every description

### Featured Items Strategy
The daily rotation system:
- Showcases menu variety
- Increases visibility for all items
- Creates sense of urgency (today's specials)
- Encourages daily website visits
- Maintains brand freshness

### Next Steps
See PROJECT_SPEC.md "Future Enhancements" section for upcoming features including:
- Online ordering integration
- Loyalty program
- User reviews and ratings
- Nutritional information
- Mobile app development

---

**Project Start Date**: 2026-01-31
**Last Updated**: 2026-01-31
**Status**: Active Development
**Version**: 0.1.0 (Pre-release)
