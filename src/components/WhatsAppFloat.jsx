import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';
import './WhatsAppFloat.css';

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '919974255324';

export default function WhatsAppFloat() {
  const [expanded, setExpanded] = useState(false);

  const openWhatsApp = (message) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
    setExpanded(false);
  };

  return (
    <div className="wa-float" aria-label="Contact via WhatsApp">
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="wa-panel"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="wa-panel__header">
              <div className="wa-panel__avatar">
                <img src="/logo/logo.png" alt="Tayabali & Sons" className="wa-avatar-img" />
              </div>
              <div>
                <p className="wa-panel__name">Tayabali &amp; Sons</p>
                <span className="wa-panel__status">
                  <span className="wa-panel__dot" />
                  Typically replies within an hour
                </span>
              </div>
            </div>
            <p className="wa-panel__msg">Hi! How can we help you today?</p>
            <div className="wa-panel__actions">
              <button
                className="wa-panel__btn"
                id="wa-quick-quote"
                onClick={() => openWhatsApp("Hello! I'd like to request a quote for your services.")}
              >
                Request a Quote
              </button>
              <button
                className="wa-panel__btn"
                id="wa-quick-service"
                onClick={() => openWhatsApp("Hello! I have a question about your HVAC/Insulation services.")}
              >
                Ask About Services
              </button>
              <button
                className="wa-panel__btn"
                id="wa-quick-site"
                onClick={() => openWhatsApp("Hello! I'd like to schedule a site visit.")}
              >
                Schedule a Site Visit
              </button>
            </div>
            <a
              href="tel:+919974255324"
              className="wa-panel__call"
              id="wa-call-btn"
            >
              <Phone size={14} />
              Or call: +91 99742 55324
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`wa-fab ${expanded ? 'wa-fab--open' : ''}`}
        id="whatsapp-fab"
        onClick={() => setExpanded(!expanded)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={expanded ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
      >
        <AnimatePresence mode="wait">
          {expanded ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {!expanded && <span className="wa-pulse" aria-hidden="true" />}
    </div>
  );
}
