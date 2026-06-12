# Switchback

A mobile app design concept for Wild Spokes — a women's cycling group based in suburban Chicago. This started as a design exercise and turned into a full interactive prototype I'm using as a portfolio piece.

The idea came from actually riding with a group and noticing how much coordination happens over text threads: who's packing the first aid kit, who owes who for the Airbnb, where's the SAG van. Felt like there was a real app in there.

## What it is

Seven screens built as a React web app, laid out as an interactive design canvas. Click any screen to zoom in, use arrow keys to step through them, tab navigation works between related screens.

**Screens:**
- Home — group dashboard, upcoming trip countdown
- Trip Detail — day-by-day itinerary with stops and elevation
- Live Ride — GPS map view with crew positions and live stats
- Packing — collaborative gear list with assignments
- Chat — group messaging with channels and pinned alerts
- Expenses — trip cost split and receipt tracking
- Profile / Crew — group settings and member roster

A few features on the Live Ride screen I'm particularly happy with: a road condition banner (slurry risk from recent rain), a media player widget synced to your pace, and a SAG meetup countdown card.

## Stack

- React 18 + Vite
- CSS custom properties for the design token system — no CSS-in-JS library
- Per-screen color anchor system (each screen overrides `--pine` to its accent color)
- SVG icon set, all stroke-based
- Google Fonts: Outfit, Inter, Geist Mono, Instrument Serif
- No routing library — state-based navigation

## Running locally

```bash
npm install
npm run dev
```

## Notes

This is a prototype / portfolio project, not a real product. The data is all hardcoded. If it ever became a real app the obvious next step would be React Native — the component structure maps over pretty cleanly.

## License

MIT — use whatever you want from it.
