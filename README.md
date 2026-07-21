
# Future Voices Thailand 2026 Static Website

This is a free-host-ready static website for Future Voices Thailand 2026.

## Pages
- `index.html` — Home / Overview
- `timeline.html` — Project timeline
- `divisions.html` — Competition divisions and speech topics
- `rules.html` — Summary rules and guidelines
- `awards.html` — Awards, benefits, judging criteria
- `videos.html` — Video showcase
- `apply.html` — Google Form registration page

## How to update the Google Form
Open `apply.html` and replace:
- the direct form link inside the "Open Form in New Tab" button
- the iframe `src`

Current embedded form:
`https://docs.google.com/forms/d/e/1FAIpQLScjF0NZxpz45kO-HtWY65SadU_9oU-jTab8cJmIPEdGOZozSg/viewform?embedded=true`

## How to add finalist videos
Open `assets/js/videos.js`.

Add YouTube video IDs:
```js
{ name: "Student Name", school: "School Name", province: "Province", videoId: "abc123xyz" }
```

For YouTube Shorts:
`https://www.youtube.com/shorts/abc123xyz`
Use only:
`abc123xyz`

## Recommended free deploy
1. Netlify Drop: drag this whole folder to Netlify Drop.
2. Cloudflare Pages: connect to GitHub or upload static files.
3. GitHub Pages: push files to a repository and enable Pages.

## Notes
- No backend required.
- Application data stays in the existing Google Form / Google Sheets.
- You can replace images inside `assets/img/` while keeping the same filenames.
