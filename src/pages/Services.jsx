import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Wind, Thermometer, LayoutGrid, Grid3X3, ArrowRight, Check } from 'lucide-react';
import './Services.css';

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

const services = [
  {
    id: 'ducting',
    icon: Wind,
    tag: '01',
    title: 'HVAC & Spiral Ducting',
    headline: 'Precision-engineered ducts for peak airflow performance.',
    desc: 'We specialise in the fabrication and installation of high-performance ductwork for commercial and industrial environments. From design to installation, every duct system is crafted for optimal efficiency, leak-free performance, and long-term durability.',
    img: '/ducting_final.png',
    features: [
      'G.I (Galvanised Iron) Duct Fabrication',
      'S.S (Stainless Steel) Duct Fabrication',
      'HVAC Duct Design & Installation',
      'Spiral Duct Systems',
      'Custom Bends, Elbows & Transitions',
      'Supply, Return & Exhaust Air Systems',
    ],
    materials: ['Galvanised Iron (G.I)', 'Stainless Steel (S.S)', 'Aluminium Ducts'],
  },
  {
    id: 'insulation',
    icon: Thermometer,
    tag: '02',
    title: 'Thermal Insulation',
    headline: 'Reduce heat loss. Cut energy costs. Maintain optimal temperature.',
    desc: 'Our thermal insulation services cover both hot and cold applications for pipes, ducts, and industrial equipment. Using only premium-grade materials, we ensure that your systems operate at peak efficiency with minimal heat transfer losses.',
    img: '/insulation_final.jpg',
    features: [
      'Hot Insulation for Steam & High-Temp Pipes',
      'Cold Insulation for Chilled Water Systems',
      'Duct Insulation (Supply & Return)',
      'Equipment & Tank Insulation',
      'Condensation Control Solutions',
      'Energy Audit & Recommendation',
    ],
    materials: ['Nitrile Rubber (Armaflex)', 'Rockwool / Mineral Wool', 'Glass Wool', 'Aluminium Cladding Finish'],
  },
  {
    id: 'lockers',
    icon: LayoutGrid,
    tag: '03',
    title: 'Office & Staff Locker Cupboards',
    headline: 'Smart, secure storage for the modern workplace.',
    desc: 'Our Office & Staff Locker Cupboards are designed to provide smart, secure, and organised storage solutions for modern workplaces. Built for durability and aesthetic appeal, they suit offices, factories, schools, and hospitality environments.',
    img: '/lockers_new.png',
    features: [
      'Single-Door & Multi-Door Locker Models',
      'G.I Sheet Fabricated Steel Lockers',
      'Custom Dimensions & Configurations',
      'Powder Coat Finish in Multiple Colours',
      'Locking Mechanisms (Key, Padlock & Digital)',
      'Bench Seating & Wardrobe Combinations',
    ],
    materials: ['G.I (Galvanised Iron) Sheet', 'Mild Steel (M.S) Sheet', 'Powder Coated Finish'],
  },
  {
    id: 'mesh',
    icon: Grid3X3,
    tag: '04',
    title: 'G.I & S.S Mesh Supply',
    headline: 'High-quality mesh for security and industrial applications.',
    desc: 'We are trusted suppliers of high-quality Galvanised Iron (G.I) and Stainless Steel (S.S) mesh for a wide range of security, industrial, and commercial needs — from fencing and partitions to filtration and ventilation grilles.',
    img: '/mesh_new.png',
    features: [
      'G.I Welded Wire Mesh Rolls & Sheets',
      'S.S Woven & Welded Mesh',
      'Security Fencing & Partitions',
      'Industrial Filtration Mesh',
      'Ventilation Grilles & Guards',
      'Cut to Size & Custom Orders Welcome',
    ],
    materials: ['Galvanised Iron (G.I)', 'Stainless Steel (S.S 304 & 316)', 'Various Aperture Sizes'],
  },
];

export default function Services() {
  return (
    <div className="services-page">
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <motion.div
            className="page-hero__content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-tag">What We Offer</span>
            <h1 className="page-hero__title">Four Core Services.<br /><em>One Reliable Partner.</em></h1>
            <p className="page-hero__subtitle">
              From HVAC ducting systems to thermal insulation, storage solutions, and security mesh — Tayabali &amp; Sons is your single-source specialist for all industrial and commercial needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Service Detail Sections ── */}
      {services.map((service, i) => {
        const Icon = service.icon;
        const isEven = i % 2 === 0;
        return (
          <section key={service.id} className={`service-detail ${i % 2 === 1 ? 'service-detail--alt' : ''}`}>
            <div className="container">
              <AnimatedSection className={`service-detail__grid ${isEven ? '' : 'service-detail__grid--reversed'}`}>
                {/* Image */}
                <motion.div variants={fadeUp} className="service-detail__visual">
                  <div className="service-detail__img-wrap">
                    <img src={service.img} alt={service.title} />
                    <div className="service-detail__img-badge">
                      <Icon size={24} />
                      <span>{service.tag}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div variants={fadeUp} custom={1} className="service-detail__content">
                  <span className="section-tag">{service.title}</span>
                  <h2 className="service-detail__headline">{service.headline}</h2>
                  <p className="service-detail__desc">{service.desc}</p>

                  <div className="service-detail__features">
                    <h4 className="service-detail__features-title">What's Included</h4>
                    <ul className="service-detail__feature-list">
                      {service.features.map((f, j) => (
                        <li key={j}>
                          <Check size={14} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-detail__materials">
                    <h4 className="service-detail__features-title">Materials Used</h4>
                    <div className="service-detail__material-tags">
                      {service.materials.map((m, j) => (
                        <span key={j} className="material-tag">{m}</span>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact" className="btn btn--primary btn--md" style={{ marginTop: 'var(--space-8)', alignSelf: 'flex-start' }}>
                    Request a Quote <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </AnimatedSection>
            </div>
          </section>
        );
      })}

      {/* ── CTA ── */}
      <section className="services-cta">
        <div className="container">
          <AnimatedSection className="services-cta__inner text-center">
            <motion.span variants={fadeUp} className="section-tag">Let's Work Together</motion.span>
            <motion.h2 variants={fadeUp} className="section-title" style={{ color: 'white' }}>
              Have a Project in Mind?
            </motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle" style={{ color: 'rgba(255,255,255,0.65)', margin: 'var(--space-4) auto 0' }}>
              We collaborate with builders, consultants, contractors, and businesses to deliver HVAC and insulation solutions that save energy, reduce costs, and enhance comfort.
            </motion.p>
            <motion.div variants={fadeUp} style={{ marginTop: 'var(--space-10)', display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn--outline-white btn--lg">Get in Touch <ArrowRight size={18} /></Link>
              <a href="tel:+919974255324" className="btn btn--outline-white btn--lg">Call +91 99742 55324</a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
