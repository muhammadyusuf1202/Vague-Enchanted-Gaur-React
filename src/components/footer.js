import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-root">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col footer-brand-col">
              <a href="Homepage">
                <div className="footer-logo-wrapper">
                  <div className="footer-logo-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path>
                        <rect x="4" y="4" rx="2" width="16" height="16"></rect>
                        <rect x="8" y="8" rx="1" width="8" height="8"></rect>
                      </g>
                    </svg>
                  </div>
                  <span className="footer-brand-name section-title">
                    MentralAI
                  </span>
                </div>
              </a>
              <p className="footer-description section-content">
                Zamonaviy va premium darajadagi sun&apos;iy intellekt ekotizimi.
                Real-vaqt rejimida aqlli yechimlar va kod yordamchisi.
              </p>
              <div className="footer-socials">
                <a href="#">
                  <div aria-label="Telegram" className="footer-social-link">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="GitHub" className="footer-social-link">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="LinkedIn" className="footer-social-link">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M8 11v5m0-8v.01M12 16v-5m4 5v-3a2 2 0 1 0-4 0"></path>
                        <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Instagram" className="footer-social-link">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"></path>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h3 className="footer-col-title section-subtitle">Platforma</h3>
              <nav className="footer-nav">
                <a href="#">
                  <div className="footer-nav-link">
                    <span>AI Chat</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Kod Yordamchisi</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Rasm Tahlili</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>API Hujjatlari</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Narxlar</span>
                  </div>
                </a>
              </nav>
            </div>
            <div className="footer-col">
              <h3 className="footer-col-title section-subtitle">Kompaniya</h3>
              <nav className="footer-nav">
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Biz Haqimizda</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Vakansiyalar</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Blog</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Hamkorlik</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Aloqa</span>
                  </div>
                </a>
              </nav>
            </div>
            <div className="footer-newsletter-col footer-col">
              <h3 className="footer-col-title section-subtitle">Yangiliklar</h3>
              <p className="section-content footer-newsletter-text">
                Eng so&apos;nggi AI yangiliklari va yangilanishlardan xabardor
                bo&apos;ling.
              </p>
              <form
                action="/subscribe"
                method="POST"
                data-form-id="b4ee0998-e0cf-466b-8b22-e309918c0047"
                className="footer-newsletter-form"
              >
                <div className="footer-input-group">
                  <input
                    type="email"
                    id="thq_textinput_GlqA"
                    name="textinput"
                    required="true"
                    placeholder="Email manzilingiz"
                    data-form-field-id="thq_textinput_GlqA"
                    className="footer-input"
                  />
                  <button
                    id="thq_button_kh1i"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_kh1i"
                    className="footer-submit-btn btn-primary btn"
                  >
                    <span>Yuborish</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="footer-copyright section-content">
                &amp;copy; 2026 MentralAI. Barcha huquqlar himoyalangan.
              </p>
              <div className="footer-legal">
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Maxfiylik siyosati</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Foydalanish shartlari</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-glow-1 footer-glow"></div>
        <div className="footer-glow footer-glow-2"></div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer-social-link, .footer-nav-link, .footer-logo-wrapper {
  transition: none;
  transform: none !important;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<script defer data-name="mentralai-footer">
(function(){
  // Handle newsletter form submission feedback
  const newsletterForm = document.querySelector(".footer-newsletter-form")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      const button = this.querySelector(".footer-submit-btn")
      const input = this.querySelector(".footer-input")

      // Visual feedback only - native submission still happens
      if (input.checkValidity()) {
        button.style.width = button.offsetWidth + "px"
        button.innerHTML = "..."
        button.disabled = true

        // In a real scenario, the form would submit to the action URL
        // We just show a quick visual state change
        setTimeout(() => {
          button.style.backgroundColor = "#2ecc71"
          button.style.borderColor = "#2ecc71"
          button.innerHTML = "Rahmat!"
          input.value = ""
          input.disabled = true
        }, 800)
      }
    })
  }

  // Optional: Add a subtle parallax effect to the glow elements
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY
    const glow1 = document.querySelector(".footer-glow-1")
    const glow2 = document.querySelector(".footer-glow-2")

    if (glow1 && glow2) {
      const speed = 0.05
      glow1.style.transform = \`translateY(\${scrollY * speed}px)\`
      glow2.style.transform = \`translateY(\${scrollY * -speed}px)\`
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
