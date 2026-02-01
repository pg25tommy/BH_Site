# Burger Heaven Website - Project Specification

## Project Overview
A modern, responsive website for Burger Heaven - a Canadian burger restaurant chain known for its signature burgers, specialty items, and the famous "Ernie's Mile High" challenge burger.

## Brand Identity

### Theme & Tone
- **Heaven-Themed Branding**: Angelic/celestial naming conventions throughout (Angelic Appetizers, Heaven Sent Burgers, Lil Angels, etc.)
- **Playful & Fun**: Casual, friendly atmosphere with humor in descriptions ("Magic Mushrooms (not the real thing!)", "It will make you yodel!!")
- **Canadian Pride**: Canadian cheddar, perogies, poutine - celebrating Canadian food culture
- **Bold & Adventurous**: Challenge burgers (Mile High Club), creative combinations (Insanity Burger)

### Unique Selling Points
1. **The Mile High Challenge**: Ernie's Mile High burger ($72.69) - 3 pounds of meat, 8 patties high
2. **Canadian Flavors**: Perogy Burger, Poutine variants, Canadian cheddar
3. **Creative Burgers**: Unique combinations like Thai Beef Burger with peanut butter, Insanity Burger (burger between grilled cheese sandwiches)
4. **Customization**: Extensive topping options (23+ toppings available)

## Target Audience
- Burger enthusiasts and food adventurers
- Families (dedicated kids menu)
- Seniors (special pricing for 65+)
- Challenge seekers (Mile High Club)
- Local Canadian communities

## Website Goals

### Primary Objectives
1. **Showcase the Menu**: Complete, accurate menu display with descriptions and pricing
2. **Drive Orders**: Easy access to online ordering (Skip the Dishes integration)
3. **Build Community**: Mile High Club feature, gallery of customer experiences
4. **Expand Reach**: Franchise information, multiple location support
5. **Engage Customers**: Career opportunities, contact forms

### User Experience Goals
1. **Easy Navigation**: Quick access to menu categories via sticky navigation
2. **Visual Appeal**: Food photography, gallery of burgers and happy customers
3. **Mobile-Friendly**: Responsive design for on-the-go ordering
4. **Clear Information**: Prices, descriptions, locations, hours clearly displayed
5. **Fast Loading**: Optimized images and efficient code

## Menu Structure

### Categories (In Order)
1. **Angelic Appetizers** (8 items)
   - Chicken Fingers, Wings, Onion Rings, Poutine variants, Magic Mushrooms, Yam Wedges

2. **Galaxy of Special Sandwiches** (7 items)
   - Clubs, Grilled Cheese, Beef Dip, BLT, Fish 'n' Chips

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
5. **Multiple Pages**: Home, Menu, Gallery, Mile High Club, Locations, About, Franchise, Careers, Contact

### Menu Page Features
- Sticky top navigation (stays visible on scroll)
- Category quick-jump buttons
- Item cards with name, description, price
- Daily featured items section at top
- Toppings section at bottom
- Pricing notes and disclaimers

### Daily Featured Items System
**How it works:**
- Uses a date-based seeded random selection algorithm
- Items remain consistent throughout the entire day
- Changes automatically at midnight
- Excludes kids/seniors menu and soup/salad items from random selection
- Displays 6 items on home page, 4 items on menu page
- Visually highlighted with special styling and "Featured Today" badge
- Includes current date display on home page
- Helps keep content fresh and encourages repeat visits

**Technical Implementation:**
- Utility function: `getDailyFeaturedItems(menuData, count)`
- Seeded random number generator using current date (YYYY-MM-DD format)
- Deterministic selection ensures consistency across server renders
- Component: `FeaturedItems` - reusable featured items display
- Located in: `/src/utils/featuredItems.ts`

### Required Functionality
1. **Online Ordering Integration**: Links to Skip the Dishes
2. **Location Finder**: Multiple location support with:
   - Address, phone, hours
   - Map embeds
   - Individual Skip the Dishes links per location
3. **Mile High Club**: Hall of fame for challenge completers
4. **Image Gallery**: Food photos, restaurant atmosphere, customer photos
5. **Contact Forms**: General inquiries, franchise inquiries, career applications

## Technical Specifications

### Technology Stack
- **Framework**: Next.js (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Data**: JSON-based menu system

### File Structure
```
src/
├── app/                    # Next.js app router pages
│   ├── menu/              # Menu page
│   ├── gallery/           # Gallery page
│   ├── mile-high-club/    # Mile High Club page
│   ├── locations/         # Locations page
│   ├── about/             # About page
│   ├── franchise/         # Franchise info
│   ├── careers/           # Career opportunities
│   └── contact/           # Contact form
├── components/            # Reusable components
│   ├── Header.tsx         # Main navigation
│   ├── Footer.tsx         # Site footer
│   ├── MenuItem.tsx       # Individual menu item card
│   └── MenuCategory.tsx   # Menu category section
├── data/
│   └── menuData.json      # Complete menu data
└── types/
    └── menu.ts            # TypeScript interfaces
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

#### Topping
```typescript
{
  id: string;
  name: string;
  price: number;
}
```

## Design Considerations

### Color Scheme
- **Primary**: Burger Heaven red/orange (appetizing, energetic)
- **Accent**: Golden yellow (premium, heaven theme)
- **Neutrals**: Grays for text, white backgrounds

### Typography
- **Headings**: Bold, friendly font (heaven theme)
- **Body**: Clean, readable sans-serif
- **Prices**: Clear, prominent display

### Visual Elements
- Food photography (appetizing, high-quality)
- Heaven/celestial imagery (clouds, halos, wings)
- Canadian elements (maple leaf, flag colors)
- Fun, casual atmosphere photos

## Content Guidelines

### Writing Style
- **Playful Descriptions**: "Miss Piggy's favorite", "It will make you yodel!!"
- **Descriptive Details**: Specific ingredients and preparation methods
- **Honest Pricing**: All prices displayed, add-ons clearly marked
- **Canadian Spelling**: Honour Canadian English conventions

### Menu Description Patterns
- Lead with main ingredients
- Include cooking method when relevant
- Add personality with taglines
- Note customization options inline
- Use exclamation points for emphasis on exciting items

## Future Enhancements

### Potential Features
1. **Online Ordering System**: Full e-commerce integration
2. **Loyalty Program**: Rewards for repeat customers
3. **Nutritional Information**: Calories, allergens
4. **Daily Specials**: Rotating featured items
5. **User Reviews**: Customer testimonials and ratings
6. **Reservation System**: Table booking for dine-in
7. **Catering Menu**: Large order options
8. **Mobile App**: Native iOS/Android apps
9. **Social Media Integration**: Instagram feed, sharing features
10. **Gift Cards**: Purchase and redeem online

### Marketing Opportunities
- Mile High Club social sharing
- Customer photo submissions
- Seasonal burger specials
- Local partnerships (breweries, suppliers)
- Event hosting (burger eating contests)

## Success Metrics

### Key Performance Indicators
1. **Online Orders**: Conversion rate from menu views to orders
2. **Location Traffic**: Visitors checking hours/directions
3. **Menu Engagement**: Time spent on menu page, category clicks
4. **Mobile Usage**: % of mobile vs desktop traffic
5. **Franchise Inquiries**: Leads generated from franchise page
6. **Career Applications**: Job application submissions

## Brand Voice Examples

### Do's
✓ "A Heavenly Meal at a heck of a deal"
✓ "Food for the God's indeed!" (intentional apostrophe as per original menu)
✓ "Gooood Morningnn!!"
✓ "Beats poi any day!"
✓ "It's a bite of heaven!!"

### Don'ts
✗ Corporate/stiff language
✗ Overly formal descriptions
✗ Generic menu terminology
✗ Underselling the experience

## Notes & Considerations

### Menu Specifics
- Maintain exact pricing from original menu
- Keep all original descriptions verbatim (including quirks)
- Note about "Magic Mushrooms (not the real thing!)" stays for humor
- All add-on prices clearly stated in descriptions
- Substitution prices noted where relevant

### Accessibility
- Clear contrast ratios for readability
- Alt text for all images
- Keyboard navigation support
- Screen reader friendly structure
- Mobile touch targets (minimum 44x44px)

### Performance
- Lazy load images below the fold
- Optimize image sizes (WebP format)
- Minimize JavaScript bundle size
- Fast initial page load
- Efficient routing with Next.js

## Contact & Business Information

### Required Information Per Location
- Full address
- Phone number
- Operating hours (weekday/weekend)
- Skip the Dishes ordering link
- Map/directions
- Parking information
- Accessibility features

---

**Last Updated**: 2026-01-31
**Status**: Active Development
**Priority**: Menu accuracy and user experience
