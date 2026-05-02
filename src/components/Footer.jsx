import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img src="/logo/logo.png" alt="Tayabali & Sons logo" className="footer__logo-image" />
              <div className="logo-text">
                <span className="logo-text__primary">Tayabali</span>
                <span className="logo-text__secondary" style={{ color: 'rgba(255,255,255,0.5)' }}>& Sons</span>
              </div>
            </Link>
            <p className="footer__tagline">
              Seamless Ducting &amp; Superior Insulation. Your trusted partner for HVAC and insulation solutions across commercial and industrial projects.
            </p>
            <div className="footer__contact-list">
              <a href="tel:+919974255324" className="footer__contact-item">
                <Phone size={14} />
                <span>+91 99742 55324 (Abbasali)</span>
              </a>
              <a href="tel:+919979768654" className="footer__contact-item">
                <Phone size={14} />
                <span>+91 99797 68654 (Asgarali)</span>
              </a>
              <a href="mailto:tayabaliandsons@gmail.com" className="footer__contact-item">
                <Mail size={14} />
                <span>tayabaliandsons@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer__col">
            <h4 className="footer__col-title">Navigate</h4>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__links">
              <li><Link to="/services">HVAC &amp; Spiral Ducting</Link></li>
              <li><Link to="/services">Thermal Insulation</Link></li>
              <li><Link to="/services">Office &amp; Locker Cupboards</Link></li>
              <li><Link to="/services">G.I &amp; S.S Mesh Supply</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="footer__col">
            <h4 className="footer__col-title">Get Started</h4>
            <p className="footer__cta-text">
              Looking for quality HVAC solutions? Reach out and let's build something together.
            </p>
            <Link to="/contact" className="btn btn--outline-white btn--md" style={{ marginTop: 'var(--space-4)' }}>
              Request a Quote <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {year} Tayabali &amp; Sons. All rights reserved.
          </p>
          <p className="footer__tagline-bottom">
            Better Airflow &middot; Lower Energy Loss &middot; Long-lasting Quality
          </p>
        </div>
      </div>
    </footer>
  );
}
