import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  Wind, Thermometer, LayoutGrid, Grid3X3,
  ArrowRight, CheckCircle2, Star, Award, Clock, Shield
} from 'lucide-react';
import './Home.css';

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ── Reusable animated section wrapper ── */
function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Services data ── */
const services = [
  {
    id: 'ducting',
    icon: Wind,
    title: 'HVAC & Spiral Ducting',
    desc: 'Fabrication & installation of high-performance G.I, S.S, HVAC, and Spiral ducts for commercial and industrial projects.',
    img: '/ducting_final.png',
    tag: '01',
  },
  {
    id: 'insulation',
    icon: Thermometer,
    title: 'Thermal Insulation',
    desc: 'Hot & cold insulation for pipes, ducts, and equipment using premium materials — Nitrile Rubber, Rockwool, and Glass Wool.',
    img: '/insulation_final.jpg',
    tag: '02',
  },
  {
    id: 'lockers',
    icon: LayoutGrid,
    title: 'Office & Locker Cupboards',
    desc: 'Smart, secure, and organised storage solutions for modern workplaces and industrial staff lockers.',
    img: '/lockers_new.png',
    tag: '03',
  },
  {
    id: 'mesh',
    icon: Grid3X3,
    title: 'G.I & S.S Mesh Supply',
    desc: 'High-quality galvanised iron and stainless steel mesh for security, industrial, and commercial applications.',
    img: '/mesh_new.png',
    tag: '04',
  },
];

/* ── Pillars data ── */
const pillars = [
  {
    icon: Award,
    title: 'Premium Product',
    desc: 'We use only premium-grade materials and follow strict quality standards in every project, ensuring durability, energy efficiency, and long-term reliability.',
  },
  {
    icon: Star,
    title: 'Competitive Price',
    desc: 'Every project is carefully estimated to ensure clients receive the best value. Transparent pricing with no hidden costs — ever.',
  },
  {
    icon: Shield,
    title: 'Trusted Promotion',
    desc: 'We personally reach out to understand your needs. Discover us via our Google Business Profile or through direct recommendation.',
  },
  {
    icon: Clock,
    title: 'Fast Local Service',
    desc: 'Locally based to serve across the area with quick site visits and rapid project kick-off. Timely execution is our promise.',
  },
];

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '10+', label: 'Years Experience' },
  { value: '4', label: 'Core Services' },
];

const partners = [
  { src: '/partners/company_logo_1.jpeg', alt: 'Banco' },
  { src: '/partners/company_logo_2.jpeg', alt: 'GP' },
  { src: '/partners/company_logo_3.jpeg', alt: 'Goel' },
  { src: '/partners/company_logo_4.jpeg', alt: 'SE' },
  { src: '/partners/company_logo_5.jpeg', alt: 'Sure Safety' },
  { src: '/partners/company_logo_6.jpeg', alt: 'Standard Radiators' },
  { src: '/partners/company_logo_7.jpeg', alt: 'Palvi Industries' },
  { src: '/partners/company_logo_8.jpeg', alt: 'Modern Food Products' },
  { src: '/partners/company_logo_9.jpeg', alt: 'Dave Gaskets' },
  { src: '/partners/company_logo_10.jpeg', alt: 'Shri' },
  { src: '/partners/company_logo_11.jpeg', alt: 'Maxwell' },
];

export default function Home() {
  return (
    <div className="home">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__bg">
          <img src="/hero_final.png" alt="HVAC Ducting facility" className="hero__img" />
          <div className="hero__overlay" />
        </div>

        <div className="container hero__content">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hero__text"
          >
            <motion.span
              className="section-tag"
              style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Trusted Since Day One
            </motion.span>

            <motion.h1
              className="hero__title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Seamless Ducting &<br />
              <em>Superior Insulation</em>
            </motion.h1>

            <motion.p
              className="hero__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              Specialists in HVAC ducting, thermal insulation, office lockers, and mesh solutions for commercial and industrial projects across India.
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Link to="/contact" className="btn btn--primary btn--lg">
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn--outline-white btn--lg">
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stat bar */}
        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <div className="container">
            <div className="hero__stats-grid">
              {stats.map((s, i) => (
                <div key={i} className="hero__stat">
                  <span className="hero__stat-value">{s.value}</span>
                  <span className="hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="intro-strip">
        <div className="container">
          <AnimatedSection className="intro-strip__inner">
            <motion.div variants={fadeUp} className="intro-strip__text-col">
              <span className="section-tag">About Tayabali &amp; Sons</span>
              <h2 className="section-title">Your Trusted B2B Partner for HVAC &amp; Insulation</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="intro-strip__desc-col">
              <p className="intro-strip__desc">
                We specialise in providing customised ducting and insulation solutions for commercial and industrial projects. With a strong focus on quality, efficiency, and innovation, we deliver HVAC systems designed to improve airflow, energy efficiency, and temperature control.
              </p>
              <ul className="intro-strip__checks">
                {['Skilled Workmanship', 'Durable Materials', 'Timely Project Completion', 'Reduced Energy Costs'].map(c => (
                  <li key={c}><CheckCircle2 size={16} />{c}</li>
                ))}
              </ul>
              <Link to="/about" className="btn btn--outline btn--md" style={{ marginTop: 'var(--space-6)', alignSelf: 'flex-start' }}>
                Learn Our Story <ArrowRight size={16} />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-section">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center" style={{ marginBottom: 'var(--space-16)' }}>
              <span className="section-tag">What We Offer</span>
              <h2 className="section-title">Four Core Services,<br />One Reliable Partner</h2>
              <p className="section-subtitle">
                From duct fabrication to thermal insulation and beyond — we cover every facet of your industrial HVAC requirements.
              </p>
            </motion.div>

            <div className="services-grid">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    className="service-card"
                    variants={fadeUp}
                    custom={i}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <div className="service-card__img-wrap">
                      <img src={service.img} alt={service.title} className="service-card__img" />
                      <div className="service-card__img-overlay" />
                      <span className="service-card__tag">{service.tag}</span>
                    </div>
                    <div className="service-card__body">
                      <div className="service-card__icon">
                        <Icon size={20} />
                      </div>
                      <h3 className="service-card__title">{service.title}</h3>
                      <p className="service-card__desc">{service.desc}</p>
                      <Link to="/services" className="service-card__link">
                        Learn more <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PARTNERS / COMPANIES WE SERVE ── */}
      <section className="partners-section">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center" style={{ marginBottom: 'var(--space-16)' }}>
              <span className="section-tag">Companies We Serve</span>
              <h2 className="section-title">Trusted by Leading Industrial Brands</h2>
              <p className="section-subtitle">
                We have partnered with manufacturers, safety suppliers, and industrial firms to deliver reliable HVAC, insulation, and fabrication solutions.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="partners-grid">
              {partners.map((partner, i) => (
                <div key={i} className="partner-card">
                  <img src={partner.src} alt={partner.alt} loading="lazy" className="partner-card__logo" />
                  <span className="partner-card__name">{partner.alt}</span>
                </div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PILLARS / WHY US ── */}
      <section className="pillars-section">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center" style={{ marginBottom: 'var(--space-16)' }}>
              <span className="section-tag">Why Choose Us</span>
              <h2 className="section-title">The Four Pillars of<br />our Commitment</h2>
              <p className="section-subtitle">
                Our promise to every client — uncompromising quality, fair pricing, personal service, and rapid local support.
              </p>
            </motion.div>

            <div className="pillars-grid">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div key={i} className="pillar-card" variants={fadeUp} custom={i}>
                    <div className="pillar-card__icon">
                      <Icon size={22} />
                    </div>
                    <h3 className="pillar-card__title">{pillar.title}</h3>
                    <p className="pillar-card__desc">{pillar.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="container">
          <AnimatedSection className="cta-banner__inner">
            <motion.div variants={fadeUp} className="cta-banner__text">
              <h2 className="cta-banner__title">Ready to Build Something<br />That Lasts?</h2>
              <p className="cta-banner__desc">
                We look forward to collaborating with builders, consultants, contractors, and businesses to provide solutions that save energy, reduce costs, and enhance comfort.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="cta-banner__actions">
              <Link to="/contact" className="btn btn--outline-white btn--lg">
                Get in Touch <ArrowRight size={18} />
              </Link>
              <a href="tel:+919974255324" className="btn btn--outline-white btn--lg">
                Call Now
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
