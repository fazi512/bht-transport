# Bilal Hafeez Transport LLC - Vercel Project

## V2 Perfect Theme with Separated Files + Database

This is 100% same V2 you approved but now PROPERLY separated for Vercel.

### Structure:
- src/components/Layout.jsx = SAME header + footer for ALL pages, motion effects, WhatsApp/call
- src/data/cranes.json = DATABASE for all crane images & specs - edit JSON to add new crane, no code needed
- src/pages/Home.jsx = Homepage V2
- src/pages/Fleet.jsx = Fleet listing with filter
- src/pages/FleetDetail.jsx = Single crane detail page
- public/images/ = All crane images

### How other pages share same theme:
Layout.jsx wraps every page - same header, footer, CSS, JS, animations.

### Database for images:
Edit src/data/cranes.json:
{
  "id": "ltm11200",
  "model": "Liebherr LTM 11200-9.1",
  "capacity": "1200 Ton",
  "boom": "100m",
  "jib": "...",
  "type": "All-Terrain",
  "image": "image_20261021_110613.webp"
}
Add new image to public/images/ and add entry to JSON - appears automatically on fleet page.

### Deploy to Vercel:
1. Push this folder to GitHub
2. Vercel → Import Project → Select repo
3. Vercel auto detects Vite → Build command: npm run build → Output: dist
4. Deploy → Live!

Or: npm install && npm run build locally, upload dist to Hostinger (works too).

### Phones: 058 937 6771 / 055 110 2426 - Owner Muhammad Hafeez
