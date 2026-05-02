import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => setMobileOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
            <img src="/logo/logo.png" alt="Tayabali & Sons logo" className="navbar__logo-image" />
          </Link>

          {/* Desktop nav */}
          <nav className="navbar__nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.span
                    className="navbar__link-underline"
                    layoutId="nav-underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="navbar__actions">
            <a href="tel:+919974255324" className="navbar__phone" aria-label="Call us">
              <Phone size={14} />
              <span>+91 99742 55324</span>
            </a>
            <Link to="/contact" className="btn btn--sm btn--primary" onClick={closeMobileMenu}>
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <nav className="mobile-menu__nav">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    onClick={closeMobileMenu}
                    className={`mobile-menu__link ${location.pathname === link.path ? 'mobile-menu__link--active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mobile-menu__footer">
              <a href="tel:+919974255324" className="mobile-menu__phone">
                <Phone size={16} /> +91 99742 55324
              </a>
              <Link to="/contact" className="btn btn--primary" style={{ width: '100%', textAlign: 'center' }} onClick={closeMobileMenu}>
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
