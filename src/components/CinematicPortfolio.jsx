import { useRef } from 'react'
import { motion as Motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUp, ArrowUpRight, Plus } from 'lucide-react'
import { profile, philosophy, industries, scenes } from '../data/portfolioData'
import { cinematicAsset } from '../cinematicAssets'
import { useParallaxLayer, usePointerMotion, usePointerEnabled, useReducedMotion } from '../motion/hooks'
import { ease } from '../motion/settings'
import SocialLinks from './SocialLinks'
import { AnimatedCapability, AnimatedChapter, AnimatedTimeline, CinemaHeading, CinemaQuote, ConnectLink, MagneticLink } from './CinemaMotion'

const indexLabel = index => String(index + 1).padStart(2, '0')

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const visible = useInView(ref, { once: true, amount: .08 })
  return <div ref={ref} className={`cinema-reveal ${className}`} data-revealed={reduced || visible}><Motion.div className="cinema-reveal-content" initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: reduced || visible ? 1 : 0, y: reduced || visible ? 0 : 24 }} transition={{ duration: reduced ? 0 : .9, ease, delay: reduced ? 0 : delay }}>{children}</Motion.div></div>
}

function Chapter({ number, children, light = false }) {
  return <AnimatedChapter number={number} light={light}>{children}</AnimatedChapter>
}

function Link({ href, children, className = '', external = false }) {
  return <MagneticLink href={href} className={`cinema-link ${className}`} external={external}><span>{children}</span><ArrowUpRight size={20} aria-hidden="true" /></MagneticLink>
}

function Tags({ items }) {
  return items?.length > 0 && <ul className="cinema-tags">{items.map(item => <li key={item}>{item}</li>)}</ul>
}

function FilmScene({ scene, className = '' }) {
  const ref = useRef(null)
  const enabled = usePointerEnabled()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-35, 35])
  const scale = useTransform(scrollYProgress, [0, 1], [1.025, 1.11])
  const photo = cinematicAsset(scene.file)
  return <div ref={ref} className={`cinema-scene ${className}`} aria-hidden="true"><Motion.picture style={{ y: enabled ? y : 0, scale: enabled ? scale : 1 }}>{scene.mobile && <source media="(max-width: 767px)" srcSet={cinematicAsset(scene.mobile)} />}{photo && <img src={photo} alt="" loading="lazy" decoding="async" style={{ objectPosition: scene.position }} />}</Motion.picture><div className="cinema-scene-shade" /></div>
}

function Hero() {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const enabled = usePointerEnabled()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const pointer = usePointerMotion()
  const portraitPointer = useParallaxLayer(pointer, 6, 4)
  const glowPointer = useParallaxLayer(pointer, -14, -8)
  const active = useInView(ref)
  const photo = cinematicAsset(profile.photo)
  return <section ref={ref} id="home" tabIndex={-1} className="cinema-hero" data-active={active} aria-labelledby="hero-title" {...pointer.handlers}>
    <Motion.div className="cinema-hero-light" aria-hidden="true" style={glowPointer} initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : 2, ease }} />
    <div className="cinema-hero-gridlines" aria-hidden="true" />
    {!reduced && <div className="cinema-hero-aperture" aria-hidden="true"><Motion.div className="cinema-hero-shutter cinema-hero-shutter--top" initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} transition={{ duration: 1.25, delay: .1, ease }} /><Motion.div className="cinema-hero-shutter cinema-hero-shutter--bottom" initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} transition={{ duration: 1.25, delay: .1, ease }} /></div>}
    <div className="cinema-wrap cinema-hero-layout">
      <span className="cinema-hero-frame-number" aria-hidden="true">01</span>
      <div className="cinema-hero-copy">
        <Motion.p className="cinema-overline cinema-hero-prologue" initial={reduced ? false : { opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduced ? 0 : .45, duration: reduced ? 0 : .8 }}><Motion.span aria-hidden="true" initial={reduced ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: reduced ? 0 : .9, delay: reduced ? 0 : .4, ease }} />A STORY OF WORK & STUDY</Motion.p>
        <h1 id="hero-title" aria-label={profile.name}>{profile.name.split(' ').map((word, index) => <span className="cinema-name-mask" key={word}><Motion.span initial={reduced ? false : { y: '110%', filter: 'blur(6px)' }} animate={{ y: 0, filter: 'blur(0px)' }} transition={{ duration: reduced ? 0 : 1.2, delay: reduced ? 0 : .5 + index * .16, ease }}>{word}<i aria-hidden="true">{index === 1 ? '.' : ''}</i></Motion.span></span>)}</h1>
        <Motion.div className="cinema-hero-intro" initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .85, delay: reduced ? 0 : 1, ease }}><div className="cinema-hero-position"><p className="cinema-hero-role">{profile.role}</p><p className="cinema-hero-company">{profile.company}</p></div><p className="cinema-hero-statement">{profile.intro}</p><div className="cinema-hero-actions"><Link href="#experience" className="cinema-hero-primary">Explore my experience</Link><a className="cinema-hero-profile" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="View Haris’s LinkedIn profile"><ArrowUpRight size={22} aria-hidden="true" /><span>LinkedIn profile</span></a></div></Motion.div>
      </div>
      <Motion.figure className="cinema-portrait" initial={reduced ? false : { clipPath: 'inset(0 18% 0 18%)', opacity: 0 }} animate={{ clipPath: 'inset(0 0 0 0)', opacity: 1 }} transition={{ duration: reduced ? 0 : 1.6, delay: reduced ? 0 : .3, ease }}>
        <Motion.div className="cinema-portrait-image" style={{ y: enabled ? portraitY : 0, scale: enabled ? portraitScale : 1 }}>{photo ? <Motion.img src={photo} alt={profile.photoAlt} width="715" height="715" fetchPriority="high" style={{ ...portraitPointer, scale: enabled ? 1.035 : 1 }} /> : <span className="cinema-portrait-fallback">{profile.initials}</span>}</Motion.div>
        {!reduced && <Motion.div className="cinema-portrait-sweep" aria-hidden="true" initial={{ x: '-130%', opacity: 0 }} animate={{ x: '230%', opacity: [0, .18, 0] }} transition={{ duration: 1.8, delay: .8, ease }} />}
        <div className="cinema-portrait-wash" aria-hidden="true" /><div className="cinema-viewfinder" aria-hidden="true"><i /><i /><i /><i /></div>
        <figcaption><span>01 / INTRODUCTION</span><span>{profile.address.addressLocality.toUpperCase()}, {profile.address.addressRegion}</span></figcaption>
        <span className="cinema-portrait-side" aria-hidden="true">{profile.copy.heroCredit[0]} / {profile.copy.heroCredit[1]}</span><span className="cinema-portrait-reel" aria-hidden="true">I</span>
      </Motion.figure>
    </div>
    <div className="cinema-wrap cinema-hero-bottom"><a href="#about" className="cinema-scroll"><ArrowDown size={17} aria-hidden="true" /><span>SCROLL TO EXPLORE</span></a><p>{profile.location}</p><span className="cinema-hero-study">LEGAL STUDIES / IN PROGRESS</span></div>
  </section>
}

function About() {
  return <section id="about" tabIndex={-1} className="cinema-paper cinema-about" aria-labelledby="about-heading"><div className="cinema-wrap">
    <Chapter number="02" light>THE PERSON BEHIND THE WORK</Chapter>
    <div className="cinema-about-layout"><Reveal className="cinema-about-title"><CinemaHeading id="about-heading" lines={["Sales and", "marketing.", { text: "Learning", italic: true }, { text: "through law.", italic: true }]} /><span className="cinema-signature">{profile.name}</span><p className="cinema-overline">{profile.copy.aboutSignature}</p></Reveal>
      <div className="cinema-about-story"><Reveal><p className="cinema-pullquote">{profile.intro}</p></Reveal><div className="cinema-biography">{profile.about.split('\n\n').map((paragraph, i) => <Reveal key={paragraph} delay={i * .04}><p>{paragraph}</p></Reveal>)}</div><Reveal><div className="cinema-about-facts">{profile.snapshot.map(item => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div></Reveal></div>
    </div>
  </div></section>
}

function Interlude() {
  return <section className="cinema-interlude" aria-label="Continuing to learn"><FilmScene scene={scenes.about} /><div className="cinema-wrap cinema-interlude-content"><span className="cinema-overline">{profile.copy.quoteLabel}</span><Reveal><CinemaQuote text={profile.quote} /></Reveal><span className="cinema-overline cinema-interlude-credit">{profile.name} / {profile.copy.quoteCaption}</span></div><span className="cinema-scene-number" aria-hidden="true">II</span></section>
}

function Expertise() {
  return <section id="expertise" tabIndex={-1} className="cinema-expertise cinema-section" aria-labelledby="expertise-heading"><div className="cinema-wrap"><Chapter number="03">CAPABILITIES & PERSPECTIVE</Chapter><div className="cinema-section-head"><Reveal><CinemaHeading id="expertise-heading" lines={["Professional skills.", { text: "A broader perspective.", italic: true }]} /></Reveal><p>{profile.copy.expertiseIntro}</p></div>
    <div className="cinema-expertise-layout"><div className="cinema-capability-list">{profile.expertise.map((item, i) => <Reveal key={item.title} delay={i % 3 * .05}><AnimatedCapability item={item} index={i} /></Reveal>)}</div><div className="cinema-capability-art"><FilmScene scene={scenes.experience} /><div className="cinema-art-frame" aria-hidden="true" /><p className="cinema-overline">SALES / MARKETING / LEGAL STUDIES</p><div className="cinema-art-copy"><span>Different fields.</span><em>Connected<br />perspectives.</em></div><span className="cinema-overline cinema-art-caption">{profile.focus}</span></div></div>
  </div></section>
}

function Experience() {
  return <section id="experience" tabIndex={-1} className="cinema-experience cinema-section" aria-labelledby="experience-heading"><div className="cinema-wrap"><Chapter number="04">THE PROFESSIONAL JOURNEY</Chapter><div className="cinema-experience-layout"><div className="cinema-sticky-heading"><Reveal><CinemaHeading id="experience-heading" lines={["Experience", "across", { text: "markets.", italic: true }]} /><p>{profile.copy.experienceIntro}</p><Link href={profile.linkedin} external>View my full profile</Link></Reveal><span className="cinema-overline cinema-timeline-caption">2019 — {profile.edition} / WORK & STUDY</span></div>
      <AnimatedTimeline>{profile.experience.map((item, i) => <Reveal key={`${item.company}-${item.role}-${item.startDate}`} className="cinema-timeline-entry"><article><div className="cinema-job-top"><span className="cinema-overline">{indexLabel(i)} / {item.period}</span>{item.endDate === 'Present' && <span className="cinema-current"><i />CURRENT</span>}</div><p className="cinema-company">{item.company}</p><h3>{item.role}</h3><p className="cinema-job-meta">{item.location}<br />{item.arrangement}</p><p className="cinema-job-description">{item.description}</p><Tags items={item.tags} />{item.responsibilities?.length > 0 && <details className="cinema-responsibilities"><summary>Role details<Plus size={14} aria-hidden="true" /></summary><ul>{item.responsibilities.map(line => <li key={line}>{line}</li>)}</ul></details>}</article></Reveal>)}</AnimatedTimeline>
    </div></div></section>
}

function Fields() {
  return <div className="cinema-fields" aria-label={`Fields of experience and study: ${industries.join(', ')}`}><div className="cinema-wrap"><span className="cinema-overline">FIELDS OF EXPERIENCE & STUDY</span><div>{industries.map((item, i) => <span key={item}>{item}{i < industries.length - 1 && <i aria-hidden="true"> / </i>}</span>)}</div></div></div>
}

function Approach() {
  return <section id="approach" tabIndex={-1} className="cinema-approach cinema-section" aria-labelledby="approach-heading"><FilmScene scene={scenes.strategy} /><div className="cinema-wrap"><Chapter number="05">WORK / STUDY / COMMUNITY</Chapter><Reveal><CinemaHeading id="approach-heading" lines={["Sales and marketing.", { text: "Learning through law.", italic: true }]} /></Reveal><div className="cinema-philosophy">{philosophy.map((item, i) => <Reveal key={item.title} delay={i * .08}><article><span className="cinema-overline">{indexLabel(i)} / {item.title}</span><h3>{item.principle}</h3><p>{item.detail}</p><ul>{item.practices.map(practice => <li key={practice}>{practice}</li>)}</ul><span className="cinema-philosophy-outcome">{item.outcome}<ArrowUpRight size={17} aria-hidden="true" /></span></article></Reveal>)}</div></div></section>
}

function Education() {
  return <section id="education" tabIndex={-1} className="cinema-paper cinema-education cinema-section" aria-labelledby="education-heading"><div className="cinema-wrap"><Chapter number="06" light>EDUCATION & CONTINUING STUDY</Chapter><div className="cinema-section-head"><Reveal><CinemaHeading id="education-heading" lines={["A foundation", { text: "that keeps growing.", italic: true }]} /></Reveal><p>{profile.copy.aboutSignature}</p></div><div className="cinema-education-list">{profile.education.map((item, i) => <Reveal key={`${item.institution}-${item.qualification}`}><article className={`cinema-education-entry ${item.status ? 'cinema-education-current' : ''}`}><span className="cinema-overline cinema-education-index">{indexLabel(i)}</span><div><p className="cinema-institution">{item.institution}</p><h3>{item.qualification}</h3>{item.field && <p className="cinema-field">{item.field}</p>}{item.description && <p className="cinema-education-description">{item.description}</p>}<Tags items={item.subjects} /></div><div className="cinema-education-period"><span>{item.period}</span>{item.status && <p><i />{item.status}</p>}</div></article></Reveal>)}</div></div></section>
}

function Community() {
  return <section id="community" tabIndex={-1} className="cinema-community cinema-section" aria-labelledby="community-heading"><div className="cinema-wrap"><Chapter number="07">BEYOND BUSINESS</Chapter><div className="cinema-section-head"><Reveal><CinemaHeading id="community-heading" lines={["Community.", { text: "Connection. Contribution.", italic: true }]} /></Reveal></div><div className="cinema-community-grid">{profile.volunteer.map((item, i) => <Reveal key={`${item.organisation}-${item.role}`}><article><span className="cinema-overline">{indexLabel(i)} / {item.cause}</span><h3>{item.organisation}</h3><p className="cinema-community-role">{item.role}{item.chapter && <span>{item.chapter}</span>}</p><p className="cinema-community-description">{item.description}</p><div className="cinema-community-period"><span>{item.period}</span>{item.duration && <span>{item.duration}</span>}</div></article></Reveal>)}</div>{profile.organisations.map(item => <Reveal key={item.organisation}><div className="cinema-association"><span className="cinema-overline">PROFESSIONAL ASSOCIATION</span><h3>{item.organisation}</h3><p>{item.role} / {item.period}</p></div></Reveal>)}</div></section>
}

function SkillsAndLanguages() {
  return <section className="cinema-details cinema-section" aria-labelledby="skills-heading"><div className="cinema-wrap"><Chapter number="08">SKILLS & COMMUNICATION</Chapter><div className="cinema-details-layout"><div><Reveal><CinemaHeading id="skills-heading" lines={["More ways", { text: "to connect.", italic: true }]} /></Reveal><p className="cinema-overline cinema-language-label">LANGUAGES I SPEAK</p><div className="cinema-languages">{profile.languages.map((item, i) => <Reveal key={item.language}><div><span className="cinema-overline">{indexLabel(i)}</span><h3>{item.language}</h3><p>{item.proficiency}</p></div></Reveal>)}</div></div><div className="cinema-skill-groups">{profile.skills.map(group => <Reveal key={group.category}><div><h3>{group.category}</h3><Tags items={group.items} /></div></Reveal>)}</div></div></div></section>
}

function Contact() {
  return <section id="contact" tabIndex={-1} className="cinema-contact" aria-labelledby="contact-heading"><FilmScene scene={scenes.cta} /><div className="cinema-wrap cinema-contact-content"><Chapter number="09">THE NEXT CHAPTER</Chapter><Reveal><CinemaHeading id="contact-heading" lines={["Good opportunities", "start with a", { text: "conversation.", italic: true }]} /></Reveal><div className="cinema-contact-actions"><p>{profile.copy.contactIntro}</p><ConnectLink href={profile.linkedin}>LET’S CONNECT</ConnectLink></div><div className="cinema-contact-bottom"><p>{profile.location}</p><SocialLinks /></div></div></section>
}

function Footer() {
  return <footer className="cinema-footer"><div className="cinema-wrap"><a href="#home" className="cinema-footer-name">{profile.name}<i>.</i></a><p>SALES / MARKETING / LEGAL STUDIES</p><SocialLinks className="cinema-social-links--compact" /><a href="#home" className="cinema-back-top">Back to top<ArrowUp size={17} aria-hidden="true" /></a><span>© {profile.edition}</span></div></footer>
}

export default function CinematicPortfolio() {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return <><Motion.div className="cinema-reading-progress" style={{ scaleX: reduced ? scrollYProgress : progress }} aria-hidden="true" /><main id="main" tabIndex={-1}><Hero /><About /><Interlude /><Expertise /><Experience /><Fields /><Approach /><Education /><Community /><SkillsAndLanguages /><Contact /></main><Footer /></>
}
