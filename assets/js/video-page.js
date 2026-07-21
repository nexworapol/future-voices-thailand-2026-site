
const grid = document.querySelector('#videoGrid');
if (grid && window.FVT_VIDEOS) {
  grid.innerHTML = window.FVT_VIDEOS.map((v, idx) => {
    const media = v.videoId
      ? `<iframe src="https://www.youtube.com/embed/${v.videoId}" title="${v.name}" allowfullscreen></iframe>`
      : `<div class="placeholder-video"><div><strong>Video Showcase Coming Soon</strong><br><span>Finalist videos will appear here.</span></div></div>`;
    return `
      <article class="video-card">
        <div class="video-wrap">${media}</div>
        <div class="video-meta">
          <h3>${v.name || `Finalist ${idx + 1}`}</h3>
          <p>${v.school || ''}${v.province ? ' / ' + v.province : ''}</p>
        </div>
      </article>`;
  }).join('');
}
