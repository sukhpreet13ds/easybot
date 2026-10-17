import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import logoBot from '../assets/logobot.png'
import '../pages/style/style.css'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMobileMenuOpen(prev => !prev)
  }

  const closeMenu = () => {
    setMobileMenuOpen(false)
  }

  // Prevent background scrolling when popout panel is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="navbar-header">
        <div className="navbar-container">
          {/* Left Side: Brand Logo */}
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src={logoBot} alt="easybot" className="navbar-logo-img" />
            <span className="navbar-logo-text">easybot</span>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="navbar-links">
            <a href="#how-it-works" className="navbar-link">
              How it works
            </a>
            <a href="#what-it-can-do" className="navbar-link">
              What it can do
            </a>
            <a href="#for-your-business" className="navbar-link">
              For your business
            </a>
            <a href="#faqs" className="navbar-link">
              FAQs
            </a>
          </nav>

          {/* Right Side: Desktop Action Button with Lines Animation */}
          <div className="navbar-action">
            <div className="btn-wrapper">
              <span className="dot top left"></span>
              <span className="dot top right"></span>
              <span className="dot bottom right"></span>
              <span className="dot bottom left"></span>
              <span className="line horizontal top"></span>
              <span className="line horizontal bottom"></span>
              <span className="line vertical left"></span>
              <span className="line vertical right"></span>
              <button className="btn">
                <span>Explore the demo</span>
                <FiArrowUpRight className="btn-icon" />
              </button>
            </div>
          </div>

          {/* Right Side: Mobile Animated Hamburger Toggle */}
          <button
            className={`navbar-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="burger-line line-1"></span>
            <span className="burger-line line-2"></span>
            <span className="burger-line line-3"></span>
          </button>
        </div>
      </header>

      {/* Dimmed Blurred Backdrop Overlay */}
      <div
        className={`mobile-backdrop ${mobileMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Popout Panel with Zoom-in Animation and Screen Gap */}
      <div
        className={`mobile-popout-panel ${mobileMenuOpen ? 'active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Panel"
      >
        {/* Panel Header */}
        <div className="mobile-popout-header">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src={logoBot} alt="easybot" className="navbar-logo-img" />
            <span className="navbar-logo-text">easybot</span>
          </Link>

          <button
            className="navbar-toggle open"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <span className="burger-line line-1"></span>
            <span className="burger-line line-2"></span>
            <span className="burger-line line-3"></span>
          </button>
        </div>

        {/* Panel Nav Items with Tilt Arrows on the Right */}
        <nav className="mobile-popout-links">
          <a href="#how-it-works" className="mobile-nav-item" onClick={closeMenu}>
            <span className="nav-item-text">How it works</span>
            <FiArrowUpRight className="nav-tilt-arrow" />
          </a>
          <a href="#what-it-can-do" className="mobile-nav-item" onClick={closeMenu}>
            <span className="nav-item-text">What it can do</span>
            <FiArrowUpRight className="nav-tilt-arrow" />
          </a>
          <a href="#for-your-business" className="mobile-nav-item" onClick={closeMenu}>
            <span className="nav-item-text">For your business</span>
            <FiArrowUpRight className="nav-tilt-arrow" />
          </a>
          <a href="#faqs" className="mobile-nav-item" onClick={closeMenu}>
            <span className="nav-item-text">FAQs</span>
            <FiArrowUpRight className="nav-tilt-arrow" />
          </a>
        </nav>

        {/* Panel Footer Action Button */}
        <div className="mobile-popout-footer">
          <div className="btn-wrapper">
            <span className="dot top left"></span>
            <span className="dot top right"></span>
            <span className="dot bottom right"></span>
            <span className="dot bottom left"></span>
            <span className="line horizontal top"></span>
            <span className="line horizontal bottom"></span>
            <span className="line vertical left"></span>
            <span className="line vertical right"></span>
            <button className="btn">
              <span>Explore the demo</span>
              <FiArrowUpRight className="btn-icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar