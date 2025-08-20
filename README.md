## FILMKYU – YouTube-style video browser

Modern, responsive web app for browsing and watching videos using the YouTube Data API v3 (via RapidAPI). Built with React, React Router, Material UI, and Axios.

### Key features
- **Home feed**: Default category is “New Film”, followed by “New Trailers”, “Trending Movies”, and curated “Movie Channel”.
- **Categories**: Quickly switch topics from the left sidebar.
- **Search**: Find videos by keyword.
- **Video detail**: Wide 16:9 player, metadata, and a right-side “Recommended” list.
- **Responsive**: Works well on desktop and mobile.

### Tech stack
- React 18, React Router v6
- Material UI v5
- Axios
- YouTube v3 through RapidAPI

## Getting started

1) Install dependencies
```bash
npm install
```

2) Configure environment
Create `.env` in the project root:
```bash
REACT_APP_RAPID_API_KEY=your_rapidapi_key_here
```

3) Run locally
```bash
npm start
```
App runs at `http://localhost:3000`.

### Helpful scripts
- `npm start`: start dev server
- `npm run build`: production build

## Project structure
```text
filmkyu/
  public/                 # Static assets & HTML template
  src/
    components/
      ChannelCard.jsx     # Channel avatar, title, link, subscriber count
      ChannelDetail.jsx    # Channel banner + videos from the channel
      Feed.jsx             # Home feed with sidebar + videos grid
      Navbar.jsx           # Sticky top bar with logo and SearchBar
      SearchBar.jsx        # Search input (submit navigates to results)
      SearchFeed.jsx       # Search results page
      Sidebar.jsx          # Categories list
      VideoCard.jsx        # Single video card used in lists
      VideoDetail.jsx      # Video player page (player left, recs right)
      Videos.jsx           # Generic list renderer for videos/channels
    utils/
      constants.js         # UI constants, categories, curated Indo channels
      fetchFromAPI.js      # Axios helper for RapidAPI (maxResults=50)
    App.js                # Router and page mounting
    index.js              # React entry
    index.css             # Global styles (navbar sticky, player sizing)
```

## Routing
- `/` → `Feed`: shows “New Trailers” by default
- `/search/:searchTerm` → `SearchFeed`
- `/video/:id` → `VideoDetail`
- `/channel/:id` → `ChannelDetail`

## Components (brief)
- `Videos` (props: `videos`, `direction='row'`): renders a list. Detects whether an item is a video or a channel by inspecting `item.id`.
- `VideoCard` (prop: `video`): safe fallbacks for title/thumbnail; links to `/video/:id`.
- `ChannelCard` (prop: `channelDetail`): safe fallbacks; links to `/channel/:id`.
- `VideoDetail`: responsive 16:9 player; recommendations on the right (column on small screens).
- `Feed`/`SearchFeed`/`ChannelDetail`: fetch data and render `Videos`.

## Data fetching
- All requests go through `utils/fetchFromAPI.js`.
- Base: `https://youtube-v31.p.rapidapi.com`
- Common params: `maxResults: 50`
- Env var required: `REACT_APP_RAPID_API_KEY`

### Curation rules (Filmkyu)
- Feed/search queries are scoped to Indonesia by default.
- “Movie Channel” shows a curated list of Indonesian channels (editable in `utils/constants.js` via `indoChannelIds`).
- Shorts are avoided by preferring standard videos in queries; trailers remain included.

## Styling notes
- Sticky navbar with high `z-index` to avoid overlap.
- Player uses CSS aspect ratio trick for full-width 16:9.
- Global rules in `src/index.css` (scrollbar, search input, responsive tweaks).

## Troubleshooting
- Empty lists or crashes → ensure `.env` has a valid `REACT_APP_RAPID_API_KEY`, then restart `npm start` (Create React App only loads env vars at boot).
- Rate limit/403 → you may have exceeded RapidAPI quota; try again later or upgrade your plan.
- Overlapping header when scrolling → fixed by sticky `Navbar` with `zIndex: 1200` and proper spacing in `VideoDetail`.

## Customization tips
- Change default category: edit `selectedCategory` in `components/Feed.jsx`.
- Add/remove categories: update `utils/constants.js`.
- Tune layout: adjust `Videos` `direction` or container widths in `VideoDetail.jsx`.

## License
For learning and demo purposes. Replace assets and API keys with your own before publishing.