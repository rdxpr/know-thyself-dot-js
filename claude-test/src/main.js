import './style.css'

const card = (i) => `
  <div class="vd-card c${i}">
    <div class="card-chrome">
      <span class="dot dot-r"></span>
      <span class="dot dot-y"></span>
      <span class="dot dot-g"></span>
    </div>
    <div class="card-body">
      <div class="w w-full"></div>
      <div class="w-row">
        <div class="w w-half"></div>
        <div class="w w-half"></div>
      </div>
      <div class="w w-full w-tall"></div>
      <div class="w w-full"></div>
    </div>
    <div class="card-fade"></div>
  </div>`

document.querySelector('#app').innerHTML = `
<section class="hero">

  <nav class="navbar">
    <div class="logo">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect width="26" height="26" rx="7" fill="#111110"/>
        <rect x="5"  y="5"  width="7" height="7" rx="2" fill="white"/>
        <rect x="14" y="5"  width="7" height="7" rx="2" fill="rgba(255,255,255,0.35)"/>
        <rect x="5"  y="14" width="7" height="7" rx="2" fill="rgba(255,255,255,0.35)"/>
        <rect x="14" y="14" width="7" height="7" rx="2" fill="rgba(255,255,255,0.75)"/>
      </svg>
      <span>CloudDesk</span>
    </div>
    <ul class="nav-links">
      <li><a href="#">Features</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Enterprise</a></li>
      <li><a href="#">Docs</a></li>
    </ul>
    <button class="btn-nav">Get Started</button>
  </nav>

  <div class="hero-copy">
    <div class="eyebrow">Virtual Desktop Infrastructure</div>
    <h1>Your Desktop,<br><em class="hl">Everywhere.</em></h1>
    <p class="hero-sub">Deploy secure virtual desktops for your entire team.<br>Scale from 10 to 10,000 users in minutes.</p>
    <div class="hero-actions">
      <button class="btn-cta">Start Free Trial</button>
      <a class="link-arrow" href="#">Watch demo →</a>
    </div>
  </div>

  <div class="cards-vp">
    ${[1,2,3,4,5,6,7].map(card).join('')}
  </div>

</section>
`
