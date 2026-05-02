# Tayabali & Sons

A production-style business website built with React and Vite for an industrial services company specializing in HVAC ducting, thermal insulation, locker systems, and mesh supply.

This project was designed as more than a static brochure site. It focuses on trust-building, clear service discovery, strong call-to-action placement, responsive navigation, and conversion-friendly contact flows for a real business audience.

## Why This Project Stands Out

Recruiters often see portfolio projects that are visually nice but disconnected from business goals. This project is different:

- It solves a real-world B2B communication problem for an industrial company.
- It translates offline company credibility into a modern digital presence.
- It balances branding, usability, performance, and conversion.
- It shows front-end engineering decisions tied to actual user journeys.

Instead of building a generic landing page, the goal here was to create a polished multi-page marketing website that helps a traditional business present its services clearly and generate enquiries through mobile-first contact actions.

## Project Overview

Tayabali & Sons is a React single-page application with routed page views for:

- `Home`
- `About`
- `Services`
- `Contact`

The site communicates the company's value proposition, highlights trust signals, explains its service categories in depth, and gives users multiple ways to enquire quickly using direct call actions and WhatsApp deep links.

## Business Problem

Industrial service companies often rely heavily on word-of-mouth, phone calls, and PDF profiles. That works for existing relationships, but it creates friction for:

- new clients discovering the business online
- contractors comparing vendors
- decision-makers evaluating credibility quickly
- mobile users who want immediate contact options

This website addresses those gaps by turning company information into a structured, accessible, responsive digital experience.

## Core Features

### 1. Multi-page React Architecture

The site uses `react-router-dom` to provide clean route-based navigation without a full page reload:

- `/`
- `/about`
- `/services`
- `/contact`

This keeps the experience fast while still giving the feel of a full business website rather than a single-scroll landing page.

### 2. Conversion-Focused Homepage

The homepage is designed around trust, clarity, and momentum:

- strong hero section with immediate value proposition
- service cards for fast discovery
- credibility stats
- partner/company showcase
- business differentiators
- repeated call-to-action sections

This reflects a practical front-end decision: users should understand what the business does within seconds, without needing to hunt through the page.

### 3. Detailed Service Presentation

The services page goes beyond short marketing blurbs. Each core service includes:

- headline and positioning
- descriptive explanation
- included offerings
- materials used
- clear quote request CTA

This improves usability for commercial buyers who need more specificity before reaching out.

### 4. Responsive Navigation and Mobile Menu

The navigation system includes:

- desktop navigation
- animated active route underline
- mobile hamburger menu
- contact-first CTA behavior

The mobile menu now closes intentionally through interaction handlers, which avoids unnecessary state updates and keeps the implementation cleaner from a React perspective.

### 5. Animated UI with Purpose

`framer-motion` is used throughout the site for:

- page hero entrance animations
- section reveal effects
- staggered card transitions
- animated mobile menu presence
- interactive floating action behaviors

The animation strategy is not decorative for its own sake. It helps pace information, make sections feel premium, and improve perceived smoothness.

### 6. WhatsApp-Driven Enquiry Flow

The contact experience is tailored to how many service businesses actually operate:

- direct call actions
- email links
- a floating WhatsApp helper
- a quote form that prepares a WhatsApp message from user input

This is a practical product decision. For many small and mid-sized service businesses, WhatsApp is a faster and more realistic conversion channel than building a full backend form processing system.

### 7. Trust and Credibility Signals

The site includes multiple trust-building patterns:

- years of experience
- partner/company logos
- mission/vision/team storytelling
- premium material messaging
- locality and response-speed positioning

This is especially important for B2B sites, where trust often matters as much as visual design.

## Technical Stack

| Layer | Technology |
| --- | --- |
| Frontend framework | React 19 |
| Build tool | Vite |
| Routing | React Router |
| Animation | Framer Motion |
| Icon system | Lucide React |
| Styling | Plain CSS with component/page-level styles |
| Quality checks | ESLint |

## Frontend Engineering Highlights

### Componentized Structure

The app separates reusable layout pieces from routed pages:

- `Navbar`
- `Footer`
- `WhatsAppFloat`
- `Home`
- `About`
- `Services`
- `Contact`

This makes the code easier to maintain and reflects good separation of concerns for a small-to-medium front-end project.

### Reusable Animation Wrappers

Several pages use a shared pattern built around:

- `useRef`
- `useInView`
- `motion`

This keeps reveal animations consistent and avoids duplicating too much animation logic.

### Data-Driven UI Sections

Many UI sections are generated from arrays of objects instead of hardcoded repeated markup. Examples include:

- service summaries
- detailed service blocks
- business pillars
- stats
- partner logos
- contact details

This improves scalability and readability while showing comfort with declarative React patterns.

### Performance-Conscious Choices

The project keeps the architecture lightweight:

- no unnecessary backend dependency
- static asset serving through Vite/public
- client-side routing
- lazy image loading where appropriate
- production build support through Vite

This is a sensible engineering fit for a brochure-plus-conversion business site.

## User Experience Decisions

The project was shaped around likely user intent:

### For first-time visitors

- clear hero copy
- visible company positioning
- service overview
- trust indicators

### For serious buyers

- dedicated services page
- detailed materials and offering breakdowns
- multiple quote-entry points

### For mobile users

- fixed WhatsApp action
- tap-friendly call buttons
- collapsible mobile navigation

### For credibility checking

- About page narrative
- company values
- partner showcase

## Project Structure

```text
tayabali-sons/
├─ public/
│  ├─ logo/
│  ├─ partners/
│  └─ service/brand imagery
├─ src/
│  ├─ components/
│  │  ├─ Footer.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ WhatsAppFloat.jsx
│  │  └─ corresponding CSS files
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ About.jsx
│  │  ├─ Services.jsx
│  │  ├─ Contact.jsx
│  │  └─ corresponding CSS files
│  ├─ App.jsx
│  ├─ App.css
│  ├─ main.jsx
│  └─ index.css
├─ package.json
├─ vite.config.js
└─ eslint.config.js
```

## What I Improved Recently

Recent engineering fixes and quality improvements include:

- fixed a syntax error in `Home.jsx`
- cleaned up the navbar mobile-close behavior to satisfy React linting rules
- corrected the floating WhatsApp component asset usage
- updated ESLint configuration so JSX-based `motion` usage is handled properly
- verified the app with `npm run lint` and `npm run build`

These changes reflect a useful real-world workflow: debug, refactor, validate, and ship.

## Local Development

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Run lint checks

```bash
npm run lint
```

## Environment Configuration

The project supports a configurable WhatsApp number using Vite environment variables.

Example:

```env
VITE_WHATSAPP_NUMBER=919974255324
```

If no environment value is provided, the app falls back to a default WhatsApp number in the source.

## What This Project Demonstrates to Recruiters

This project shows capability in:

- translating business requirements into a real product interface
- structuring a React codebase cleanly
- using route-based architecture for a multi-page experience
- building conversion-aware UI instead of only decorative UI
- integrating motion thoughtfully
- handling responsive design
- implementing practical client-side lead generation flows
- debugging and polishing production-facing code

In other words, it demonstrates not just "can build a React UI," but "can build a business-ready front-end experience with clear user intent."

## Possible Next Steps

If this project were extended further, strong next improvements would include:

- backend form submission with persistence
- CMS-backed content management
- analytics/event tracking
- SEO metadata expansion per route
- image optimization pipeline
- accessibility audit improvements
- deployment with CI/CD

## Final Note

Tayabali & Sons is a good example of applied front-end development: not just components for a demo, but a branded, responsive, conversion-oriented website built around a real company's needs.

That makes it a strong portfolio piece for full-stack and front-end recruiter conversations because it demonstrates technical execution, product thinking, and business awareness together.
