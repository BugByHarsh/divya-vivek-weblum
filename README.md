# Rahul & Payal — Wedding Website

Built with **React + Vite + Tailwind CSS**.

## Structure

```
src/
  assets/
    couple.jpg          <- replace/add more photos here
  components/
    Petals.jsx           # falling petal background effect
    SectionHead.jsx       # reusable kicker + title + divider
    Hero.jsx               # full-bleed hero with names/date
    Countdown.jsx           # ring-style day/hour/minute counter
    OurStory.jsx             # two-column photo + copy
    CherishedMoments.jsx      # overlapping photo collage
    LoveQuote.jsx               # centered quote band
    TimelineItem.jsx              # single alternating ritual row
    RitualsTimeline.jsx            # 5-stop vertical timeline
    Gallery.jsx                      # masonry grid + load more
    Forever.jsx                        # closing full-bleed band
    Footer.jsx                          # monogram + socials
  hooks/
    useReveal.js       # IntersectionObserver scroll-reveal
    useCountdown.js    # live days/hours/minutes calculator
  App.jsx             # composes all sections in order
  index.css           # Tailwind directives + fonts + custom keyframes
tailwind.config.js    # custom color palette, fonts, animations
```

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
```

## Customizing

- **Photos**: drop new images into `src/assets/` and import them in the
  relevant component (currently every section reuses `couple.jpg` —
  swap each `import couple from "../assets/couple.jpg"` for a distinct file
  once you have more shots).
- **Wedding date**: change the `weddingDate` prop passed to `<Countdown />`
  in `App.jsx`.
- **Colors/fonts**: edit `tailwind.config.js` under `theme.extend.colors`
  and `theme.extend.fontFamily`.
- **Rituals**: edit the `RITUALS` array in `RitualsTimeline.jsx`.
