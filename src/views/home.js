import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Vague Enchanted Gaur</title>
        <meta property="og:title" content="Vague Enchanted Gaur" />
        <link
          rel="canonical"
          href="https://vague-enchanted-gaur-tj7c9p.teleporthq.app/"
        />
        <meta
          property="og:url"
          content="https://vague-enchanted-gaur-tj7c9p.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
section {
  position: relative;
  overflow: hidden;
  background-color: var(--color-surface);
  color: var(--color-on-surface);
}
</style>`}
          ></Script>
        </div>
      </div>
      <section className="futuristic-hero">
        <div className="hero-background">
          <video
            src="https://videos.pexels.com/video-files/5473972/5473972-hd_720_1366_25fps.mp4"
            loop="true"
            muted="true"
            autoPlay="true"
            playsInline="true"
            className="hero-video"
          ></video>
          <div className="hero-overlay"></div>
          <div aria-hidden="true" className="hero-code-stream"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title home-hero-title">MentralAI</h1>
            <p className="hero-subtitle">
              Kelajak intellekti: Real-vaqt rejimida kodlash, tahlil va muloqot.
            </p>
            <div className="hero-typing-wrapper">
              <span id="heroTyping" className="hero-typing-text">
                AI o&apos;ylamoqda...
              </span>
              <span className="hero-cursor"></span>
            </div>
            <div className="hero-cta-group">
              <a href="#demo">
                <div className="btn-primary btn hero-btn-glow btn-lg">
                  <span>Real-time Demo</span>
                  <div className="btn-icon-wrapper">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                </div>
              </a>
              <a href="#explore">
                <div className="btn-outline btn btn-lg">
                  <span>Batafsil ma&apos;lumot</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="capabilities-showcase">
        <div className="capabilities-container">
          <h2 className="section-title">Real-vaqt imkoniyatlari</h2>
          <div className="capabilities-rail">
            <div className="capability-card">
              <div className="capability-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  <path d="M10 10l4 4m0-4l-4 4"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Tezkor Chat</h3>
              <p className="section-content">
                Millisekundlar ichida javob beruvchi aqlli suhbatdosh.
              </p>
              <div className="streaming-demo micro-demo">
                <div className="demo-line"></div>
                <div className="demo-line"></div>
              </div>
            </div>
            <div className="capability-card">
              <div className="capability-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m16 18 6-6-6-6"></path>
                  <path d="M8 6l-6 6 6 6"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Kod Assist</h3>
              <p className="section-content">
                Murakkab algoritmlarni yozish va xatolarni tuzatishda yordamchi.
              </p>
              <div className="micro-demo code-demo">
                <code>function mentral() &#123; ... &#125;</code>
              </div>
            </div>
            <div className="capability-card">
              <div className="capability-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" rx="2" ry="2" width="18" height="18"></rect>
                  <circle r="2" cx="9" cy="9"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Rasm Tahlili</h3>
              <p className="section-content">
                Vizual ma&apos;lumotlarni soniyalar ichida matnga aylantirish.
              </p>
              <div className="image-demo micro-demo">
                <div className="demo-scan-line"></div>
              </div>
            </div>
            <div className="capability-card">
              <div className="capability-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Ultra Tezlik</h3>
              <p className="section-content">
                Eng yuqori unumdorlik va uzluksiz ishlash kafolati.
              </p>
              <div className="speed-demo micro-demo">
                <div className="speed-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features-snapshot">
        <div className="features-container">
          <div className="features-header">
            <h2 className="section-title">Asosiy Funksiyalar</h2>
            <p className="section-content">
              MentralAI yordamida ish samaradorligingizni yangi bosqichga olib
              chiqing.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-glow"></div>
              <div className="feature-inner">
                <h3 className="section-subtitle">Ultra-tezkor javoblar</h3>
                <p className="section-content">
                  Bizning AI modelimiz so&apos;rovlaringizga real-vaqtda,
                  kechikishlarsiz javob beradi.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-glow"></div>
              <div className="feature-inner">
                <h3 className="section-subtitle">Kodlash yordamchisi</h3>
                <p className="section-content">
                  Kod yozish, xatolarni topish (debug) va murakkab funksiyalarni
                  tushuntirish.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-glow"></div>
              <div className="feature-inner">
                <h3 className="section-subtitle">Rasm tahlili</h3>
                <p className="section-content">
                  Rasmlarni yuklang va AI ulardagi ob&apos;ektlarni yoki
                  matnlarni tahlil qilib beradi.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-glow"></div>
              <div className="feature-inner">
                <h3 className="section-subtitle">Smooth Chat UX</h3>
                <p className="section-content">
                  Neon effektlar va yumshoq animatsiyalar bilan boyitilgan qulay
                  foydalanuvchi interfeysi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dashboard-preview">
        <div className="dashboard-container">
          <div className="dashboard-split">
            <div className="dashboard-content-side">
              <h2 className="section-title">Interaktiv Boshqaruv Paneli</h2>
              <p className="section-content">
                Barcha vositalar bir joyda. Kod muharriri, chat va rasm tahlili
                panellari uyg&apos;unlikda ishlaydi.
              </p>
              <ul className="dashboard-feature-list">
                <li className="flex-row">
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="var(--color-primary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span className="section-content">
                    Avtomatik skroll va yozish animatsiyasi
                  </span>
                </li>
                <li className="flex-row">
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="var(--color-primary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span className="section-content">
                    Sintaksisni ajratib ko&apos;rsatuvchi kod paneli
                  </span>
                </li>
                <li className="flex-row">
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="var(--color-primary)"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span className="section-content">
                    Glow effektli rasm tahlili darchasi
                  </span>
                </li>
              </ul>
            </div>
            <div className="dashboard-visual-side">
              <div className="mockup-frame">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="mockup-body">
                  <div className="mockup-chat">
                    <div className="chat-bubble ai">
                      <div className="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div className="user chat-bubble">
                      <span>Loyiha kodini tekshirib ber.</span>
                    </div>
                  </div>
                  <div className="mockup-code">
                    <pre className="home-thq-code-keyword-elm code-keyword">
                      const = () =&gt; &#123; &#125;
                    </pre>
                    <span className="code-func">analyze</span>
                    <span className="code-comment">
                      // AI tahlil jarayoni...
                    </span>
                  </div>
                </div>
                <div className="mockup-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="performance-stats">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-card">
              <div data-target="250" className="stat-value">
                <span>0</span>
              </div>
              <div className="stat-label">
                <span>ms Latentlik</span>
              </div>
            </div>
            <div className="stat-card">
              <div data-target="99" className="stat-value">
                <span>0</span>
              </div>
              <div className="stat-label">
                <span>% Aniqlik</span>
              </div>
            </div>
            <div className="stat-card">
              <div data-target="99.9" className="stat-value">
                <span>0</span>
              </div>
              <div className="stat-label">
                <span>% Uptime</span>
              </div>
            </div>
            <div className="stat-card">
              <div data-target="500" className="stat-value">
                <span>0</span>
              </div>
              <div className="stat-label">
                <span>K+ Foydalanuvchilar</span>
              </div>
            </div>
            <div className="stat-card">
              <div data-target="4.9" className="stat-value">
                <span>0</span>
              </div>
              <div className="stat-label">
                <span>Reyting</span>
              </div>
            </div>
            <div className="stat-card">
              <div data-target="15" className="stat-value">
                <span>0</span>
              </div>
              <div className="stat-label">
                <span>M+ Kod satrlari</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="video-highlight">
        <div className="video-bg-wrapper">
          <video
            src="https://videos.pexels.com/video-files/31358014/13381562_640_360_30fps.mp4"
            loop="true"
            muted="true"
            autoPlay="true"
            playsInline="true"
            className="bg-video"
          ></video>
          <div className="video-scrim"></div>
        </div>
        <div className="video-content-overlay">
          <h2 className="hero-title home-hero-title">MentralAI Amalda</h2>
          <p className="hero-subtitle">
            Kod yozish va tahlil qilishning eng zamonaviy usuli bilan tanishing.
          </p>
          <div className="video-play-hint">
            <div className="pulse-ring"></div>
            <svg
              fill="currentColor"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 0 24 24"
            >
              <path d="m7 4 12 8-12 8V4z"></path>
            </svg>
          </div>
        </div>
      </section>
      <section className="primary-launchpad">
        <div className="launchpad-container">
          <div className="launchpad-grid">
            <div className="launchpad-item">
              <div className="launchpad-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                  <path d="M12 7v5l3 3"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">AI Assistant</h3>
              <p className="section-content">
                Muloqotni hoziroq boshlang va savollaringizga javob oling.
              </p>
              <a href="#">
                <div className="btn-primary btn">
                  <span>Sessiyani boshlash</span>
                </div>
              </a>
            </div>
            <div className="launchpad-item featured">
              <div className="launchpad-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Coding Helper</h3>
              <p className="section-content">
                Kod yozish va xatolarni tuzatishda real-vaqtda yordam oling.
              </p>
              <a href="#">
                <div className="btn btn-accent">
                  <span>Kodlashni boshlash</span>
                </div>
              </a>
            </div>
            <div className="launchpad-item">
              <div className="launchpad-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Image Analysis</h3>
              <p className="section-content">
                Rasmlarni yuklang va chuqur tahlil natijalarini ko&apos;ring.
              </p>
              <a href="#">
                <div className="btn btn-secondary">
                  <span>Tahlilni sinash</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container4">
        <div className="home-container5">
          <Script
            html={`<style>
        @keyframes blink {0%,100% {opacity: 1;}
50% {opacity: 0;}}@keyframes lineGrow {0% {width: 0%;
opacity: 0.3;}
50% {width: 90%;
opacity: 1;}
100% {width: 0%;
opacity: 0.3;}}@keyframes dotBlink {0%,100% {opacity: 0.2;}
50% {opacity: 1;}}@keyframes ringPulse {0% {transform: scale(0.5);
opacity: 1;}
100% {transform: scale(1.5);
opacity: 0;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container6">
        <div className="home-container7">
          <Script
            html={`<script defer data-name="mentral-ai-logic">
(function(){
  // Typing Animation for Hero
  const typingTextElement = document.getElementById("heroTyping")
  const phrases = ["AI o'ylamoqda...", "Kod tahlil qilinmoqda...", "Rasm analiz qilinmoqda...", "MentralAI tayyor."]
  let phraseIndex = 0
  let charIndex = 0
  let isDeleting = false
  let typingSpeed = 100

  function type() {
    const currentPhrase = phrases[phraseIndex]

    if (isDeleting) {
      typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1)
      charIndex--
      typingSpeed = 50
    } else {
      typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1)
      charIndex++
      typingSpeed = 100
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true
      typingSpeed = 2000 // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      phraseIndex = (phraseIndex + 1) % phrases.length
      typingSpeed = 500
    }

    setTimeout(type, typingSpeed)
  }

  // Stats Counter Animation
  function animateStats() {
    const stats = document.querySelectorAll(".stat-value")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = parseFloat(entry.target.getAttribute("data-target"))
            const duration = 2000
            const startTime = performance.now()

            function update(currentTime) {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              const currentVal = progress * target

              entry.target.textContent = target % 1 === 0 ? Math.floor(currentVal).toLocaleString() : currentVal.toFixed(1)

              if (progress < 1) {
                requestAnimationFrame(update)
              }
            }
            requestAnimationFrame(update)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    stats.forEach((stat) => observer.observe(stat))
  }

  // Initialize
  type()
  animateStats()
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon39"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text35">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
