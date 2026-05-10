# Manish Kumar — Portfolio

A Next.js 14 portfolio with dark theme, scroll animations, and 4 mini-games.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.js          # Root layout + metadata
│   ├── page.js            # Home page (composes all sections)
│   └── globals.css        # Design tokens + global styles
├── components/
│   ├── Navbar.jsx         # Sticky nav with active-link tracking
│   ├── Hero.jsx           # Landing section with stats
│   ├── Skills.jsx         # Tech skill cards
│   ├── Experience.jsx     # Timeline
│   ├── Projects.jsx       # Project cards
│   ├── Awards.jsx         # Award items
│   ├── Contact.jsx        # Contact links
│   ├── Footer.jsx
│   └── games/
│       ├── GameZone.jsx   # Tab container for games
│       ├── TicTacToe.jsx  # vs AI (minimax)
│       ├── Snake.jsx      # Canvas-based snake
│       ├── MemoryMatch.jsx# Flip-card memory game
│       └── NumberGuess.jsx# Hot/cold guessing game
├── data/
│   └── portfolio.js       # ← Edit your info here
├── hooks/
│   └── useReveal.js       # IntersectionObserver scroll reveal
├── next.config.js
└── package.json
```

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Customisation

All content lives in **`data/portfolio.js`** — edit the exported objects to update your name, skills, experience, projects, and awards without touching any component.

## Deploy

```bash
npm run build
npm start
```

Or push to GitHub and deploy instantly on [Vercel](https://vercel.com).
