import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-mobile-overlay {
  transition: none;
}
.navigation-mobile-overlay.is-active .navigation-mobile-list li {
  animation: none;
  opacity: 1;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav className="navigation-wrapper">
        <div className="navigation-container">
          <div className="navigation-links-group navigation-links-left">
            <Link to="/">
              <div className="navigation-link">
                <span>Xususiyatlar</span>
              </div>
            </Link>
            <Link to="/">
              <div className="navigation-link">
                <span>Kod Yordamchisi</span>
              </div>
            </Link>
          </div>
          <Link to="/">
            <div
              aria-label="MentralAI Bosh Sahifa"
              className="navigation-logo-container"
            >
              <div className="navigation-logo-icon">
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
                    <path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                    <path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path>
                    <circle r=".5" cx="16" cy="13"></circle>
                    <circle r=".5" cx="18" cy="3"></circle>
                    <circle r=".5" cx="20" cy="21"></circle>
                    <circle r=".5" cx="20" cy="8"></circle>
                  </g>
                </svg>
              </div>
              <span className="navigation-brand-name">MentralAI</span>
            </div>
          </Link>
          <div className="navigation-links-right navigation-links-group">
            <Link to="/">
              <div className="navigation-link">
                <span>Rasm Tahlili</span>
              </div>
            </Link>
            <Link to="/">
              <div className="btn-primary btn btn-sm">
                <span>Boshlash</span>
              </div>
            </Link>
          </div>
          <button
            id="mobile-nav-toggle"
            aria-label="Menyuni ochish"
            aria-expanded="false"
            className="navigation-mobile-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="mobile-nav-overlay" className="navigation-mobile-overlay">
        <div className="navigation-mobile-header">
          <Link to="/">
            <div
              aria-label="MentralAI Bosh Sahifa"
              className="navigation-logo-container"
            >
              <div className="navigation-logo-icon">
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
                    <path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                    <path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path>
                    <circle r=".5" cx="16" cy="13"></circle>
                    <circle r=".5" cx="18" cy="3"></circle>
                    <circle r=".5" cx="20" cy="21"></circle>
                    <circle r=".5" cx="20" cy="8"></circle>
                  </g>
                </svg>
              </div>
              <span className="navigation-brand-name">MentralAI</span>
            </div>
          </Link>
          <button
            id="mobile-nav-close"
            aria-label="Menyuni yopish"
            className="navigation-mobile-close"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-mobile-content">
          <ul className="navigation-mobile-list">
            <li>
              <Link to="/">
                <div className="navigation-mobile-link">
                  <span>Xususiyatlar</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className="navigation-mobile-link">
                  <span>Kod Yordamchisi</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className="navigation-mobile-link">
                  <span>Rasm Tahlili</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className="btn-primary btn btn-lg">
                  <span>Boshlash</span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="navigation-mobile-footer">
            <p className="section-content">
              Kelajak AI bilan bugun boshlanadi.
            </p>
          </div>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
        @keyframes slideIn {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const toggleBtn = document.getElementById("mobile-nav-toggle")
  const closeBtn = document.getElementById("mobile-nav-close")
  const overlay = document.getElementById("mobile-nav-overlay")
  const body = document.body

  function openMenu() {
    overlay.classList.add("is-active")
    toggleBtn.setAttribute("aria-expanded", "true")
    body.style.overflow = "hidden"
  }

  function closeMenu() {
    overlay.classList.remove("is-active")
    toggleBtn.setAttribute("aria-expanded", "false")
    body.style.overflow = ""
  }

  toggleBtn.addEventListener("click", openMenu)
  closeBtn.addEventListener("click", closeMenu)

  // Close menu when clicking a link
  const mobileLinks = overlay.querySelectorAll(".navigation-mobile-link, .btn")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  // Close menu on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-active")) {
      closeMenu()
    }
  })

  // Handle window resize to clean up state
  window.addEventListener("resize", () => {
    if (window.innerWidth > 767 && overlay.classList.contains("is-active")) {
      closeMenu()
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

export default Navigation
