import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Target, Eye, Users } from 'lucide-react';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

const values = [
  { icon: Target, title: 'Our Mission', color: '#1D4ED8',
    desc: 'To deliver high-quality ducting, insulation, office & staff locker cupboards, and mesh solutions that enhance energy efficiency, ensure durability, and support sustainable growth for our clients. Through skilled workmanship, timely execution, and customer-focused service, we aim to build long-term partnerships and become a trusted name in the HVAC and insulation industry.' },
  { icon: Eye, title: 'Our Vision', color: '#059669',
    desc: "Our vision is to be recognised as a leading provider of ducting, insulation, office & staff locker cupboards, and mesh solutions — known for quality, price, and sustainability. We aim to set new benchmarks in the industry by continuously improving our processes and delivering solutions that truly make a difference." },
  { icon: Users, title: 'Our Team', color: '#7C3AED',
    desc: 'Founded and led by Abbasali and Asgarali, Tayabali & Sons is built on a foundation of family values and professional excellence. Our team of skilled craftsmen and project managers bring dedication to every installation, ensuring each project meets our strict quality and timing standards.' },
];

export default function About() {
  return (
    <div className="about">
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <motion.div
            className="page-hero__content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-tag">Our Story</span>
            <h1 className="page-hero__title">Committed to Excellence,<br /><em>Driven by Trust</em></h1>
            <p className="page-hero__subtitle">
              We are committed to delivering excellence through skilled workmanship, durable materials, and timely project completion. Our goal is to help clients reduce energy costs, prevent heat loss, and create sustainable, long-lasting solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Intro with image ── */}
      <section className="about-intro">
        <div className="container">
          <AnimatedSection className="about-intro__grid">
            <motion.div variants={fadeUp} className="about-intro__visual">
              <div className="about-intro__img-wrap">
                <img src="/about_final.jpg" alt="The Tayabali & Sons facility" />
                <div className="about-intro__badge">
                  <span className="about-intro__badge-num">10+</span>
                  <span className="about-intro__badge-label">Years of Trust</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} custom={1} className="about-intro__text">
              <span className="section-tag">Who We Are</span>
              <h2 className="section-title">Your Preferred Partner for HVAC & Insulation</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginTop: 'var(--space-4)' }}>
                Tayabali &amp; Sons specialises in providing ducting and insulation solutions for commercial and industrial projects. With a strong focus on quality, efficiency, and innovation, we deliver customised HVAC systems designed to improve airflow, energy efficiency, and temperature control.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginTop: 'var(--space-4)' }}>
                Our services include design, fabrication, and installation of high-performance G.I, S.S, and Aluminium ducts, as well as hot and cold insulation for pipes, ducts, and equipment using premium materials such as Nitrile Rubber, Rockwool, and Glass Wool.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginTop: 'var(--space-4)' }}>
                With a reputation built on trust and reliability, we aim to be your preferred partner for all HVAC ducting and insulation needs.
              </p>
              <Link to="/contact" className="btn btn--primary btn--md" style={{ marginTop: 'var(--space-8)', alignSelf: 'flex-start' }}>
                Work With Us <ArrowRight size={16} />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Mission / Vision / Team ── */}
      <section className="about-values">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center" style={{ marginBottom: 'var(--space-16)' }}>
              <span className="section-tag">What We Stand For</span>
              <h2 className="section-title">Mission, Vision & Values</h2>
            </motion.div>
            <div className="values-grid">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div key={i} className="value-card" variants={fadeUp} custom={i}>
                    <div className="value-card__icon" style={{ background: `${v.color}15`, color: v.color }}>
                      <Icon size={24} />
                    </div>
                    <h3 className="value-card__title">{v.title}</h3>
                    <p className="value-card__desc">{v.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Tagline Banner ── */}
      <section className="about-banner">
        <div className="container">
          <AnimatedSection className="about-banner__inner">
            <motion.p variants={fadeUp} className="about-banner__quote">
              "Better Airflow. Lower Energy Loss. Long-lasting Quality."
            </motion.p>
            <motion.p variants={fadeUp} custom={1} className="about-banner__sub">
              — The Tayabali &amp; Sons Promise
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link to="/services" className="btn btn--outline btn--lg" style={{ marginTop: 'var(--space-8)' }}>
                Explore Our Services <ArrowRight size={18} />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
