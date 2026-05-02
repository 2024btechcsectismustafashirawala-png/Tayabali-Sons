import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Loader2, MapPin } from 'lucide-react';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

const contactDetails = [
  {
    icon: Phone,
    label: 'Call Us — Abbasali',
    value: '+91 99742 55324',
    href: 'tel:+919974255324',
  },
  {
    icon: Phone,
    label: 'Call Us — Asgarali',
    value: '+91 99797 68654',
    href: 'tel:+919979768654',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'tayabaliandsons@gmail.com',
    href: 'mailto:tayabaliandsons@gmail.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon–Sat, 9:00 AM – 7:00 PM',
    href: null,
  },
];

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '919974255324';

function buildWhatsAppMessage(formData) {
  return [
    'Hello! I would like to enquire about your services.',
    '',
    `Full Name: ${formData.name || 'Not provided'}`,
    `Company / Organisation: ${formData.company || 'Not provided'}`,
    `Phone Number: ${formData.phone || 'Not provided'}`,
    `Email Address: ${formData.email || 'Not provided'}`,
    `Service Required: ${formData.service || 'Not specified'}`,
    'Project Requirements:',
    formData.message || 'Not provided',
  ].join('\n');
}

export default function Contact() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '', service: '', message: ''
  });

  // 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(buildWhatsAppMessage(formData));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      handleWhatsApp();
      setStatus('success');
      setFormData({ name: '', company: '', phone: '', email: '', service: '', message: '' });
    } catch (err) {
      console.error('WhatsApp redirect error:', err);
      setStatus('error');
    }
  };

  const resetForm = () => setStatus('idle');

  return (
    <div className="contact-page">
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <motion.div
            className="page-hero__content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-tag">Get In Touch</span>
            <h1 className="page-hero__title">Let's Build Something<br /><em>Great Together</em></h1>
            <p className="page-hero__subtitle">
              Whether you need a quote, a consultation, or have questions about our services — we're here for you. Fill the form or reach out directly via call or WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main Section ── */}
      <section className="contact-section">
        <div className="container">
          <AnimatedSection className="contact-grid">

            {/* Left — Contact Info */}
            <motion.div variants={fadeUp} className="contact-info">
              <h2 className="contact-info__title">Reach Us Directly</h2>
              <p className="contact-info__desc">
                We personally reach out to understand your needs and provide the best solutions. You can also find us via our Google Business Profile.
              </p>

              <div className="contact-cards">
                {contactDetails.map((item, i) => {
                  const Icon = item.icon;
                  const Tag = item.href ? 'a' : 'div';
                  const props = item.href ? { href: item.href } : {};
                  return (
                    <Tag key={i} className="contact-card" {...props}>
                      <div className="contact-card__icon">
                        <Icon size={18} />
                      </div>
                      <div>
                        <span className="contact-card__label">{item.label}</span>
                        <span className="contact-card__value">{item.value}</span>
                      </div>
                    </Tag>
                  );
                })}
              </div>

              {/* WhatsApp CTA */}
              <button
                type="button"
                className="whatsapp-btn"
                id="whatsapp-contact-btn"
                onClick={() => {
                  const text = encodeURIComponent("Hello! I'd like to enquire about your HVAC/Insulation services.");
                  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </button>

              <div className="contact-info__note">
                <MapPin size={16} />
                <p>Locally based to serve clients quickly with fast site visits and project kick-off across the region.</p>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div variants={fadeUp} custom={1} className="contact-form-wrap">

              {/* SUCCESS STATE */}
              {status === 'success' && (
                <motion.div
                  className="contact-feedback contact-feedback--success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <CheckCircle2 size={52} />
                  <h3>WhatsApp Opened</h3>
                  <p>Your enquiry has been prepared with all form details. Please send the WhatsApp message to complete the enquiry.</p>
                  <button className="btn btn--primary btn--md" onClick={resetForm}>
                    Send Another Enquiry
                  </button>
                </motion.div>
              )}

              {/* ERROR STATE */}
              {status === 'error' && (
                <motion.div
                  className="contact-feedback contact-feedback--error"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <AlertCircle size={52} />
                  <h3>Something went wrong</h3>
                  <p>We couldn't send the message. Please try calling or WhatsApp directly, or try again below.</p>
                  <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center', marginTop: 'var(--space-2)' }}>
                    <button className="btn btn--primary btn--md" onClick={resetForm}>
                      Try Again
                    </button>
                    <a href="tel:+919974255324" className="btn btn--outline btn--md">
                      Call Instead
                    </a>
                  </div>
                </motion.div>
              )}

              {/* FORM */}
              {(status === 'idle' || status === 'sending') && (
                <form
                  ref={formRef}
                  className="contact-form"
                  onSubmit={handleSubmit}
                  id="contact-form"
                  noValidate
                >
                  <h3 className="contact-form__title">Request a Quote</h3>
                  <p className="contact-form__subtitle">
                    Fill in the details and we will prepare a WhatsApp message with all the information. Fields marked * are required.
                  </p>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={status === 'sending'}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company" className="form-label">Company / Organisation</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="form-input"
                        placeholder="Company or project name"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={status === 'sending'}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        disabled={status === 'sending'}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === 'sending'}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service" className="form-label">Service Required *</label>
                    <select
                      id="service"
                      name="service"
                      className="form-input form-select"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      disabled={status === 'sending'}
                    >
                      <option value="">Select a service…</option>
                      <option value="HVAC & Spiral Ducting">HVAC &amp; Spiral Ducting</option>
                      <option value="Thermal Insulation">Thermal Insulation</option>
                      <option value="Office & Locker Cupboards">Office &amp; Locker Cupboards</option>
                      <option value="G.I & S.S Mesh Supply">G.I &amp; S.S Mesh Supply</option>
                      <option value="Multiple Services">Multiple Services</option>
                      <option value="Other / Not Sure">Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Project Requirements *</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-input form-textarea"
                      placeholder="Describe your project — size, location, materials, timeline, any specific needs…"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div className="form-actions">
                    <button
                      type="submit"
                      className="btn btn--primary btn--md contact-form__submit"
                      id="submit-btn"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 size={16} className="spin" />
                          Opening WhatsApp…
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Submit on WhatsApp
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      className="btn btn--whatsapp btn--md"
                      id="whatsapp-form-btn"
                      onClick={handleWhatsApp}
                      disabled={status === 'sending'}
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Send via WhatsApp
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
