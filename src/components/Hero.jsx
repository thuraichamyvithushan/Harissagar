import { useReducedMotion } from '../motion/hooks'
import { useRef } from 'react'
import { motion as Motion, useInView } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { ease } from '../motion/settings'
import { usePointerMotion, useParallaxLayer } from '../motion/hooks'
import TextLink from './TextLink'

export default function Hero() {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const active = useInView(ref)
  const pointer = usePointerMotion()
  const monogram = useParallaxLayer(pointer, 4)
  const portrait = useParallaxLayer(pointer, 5, 4)
  const glow = useParallaxLayer(pointer, 13, 10)
  const enter = (delay, y = 20, duration = .75) => ({
    initial: reduced ? false : { opacity: 0, y }, animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : duration, delay: reduced ? 0 : delay, ease },
  })
  return <section ref={ref} id="home" tabIndex={-1} aria-labelledby="hero-title" className="hero" data-active={active} {...pointer.handlers}>
    <Motion.div className="hero-background" aria-hidden="true" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, ease }}><div className="hero-grid"/></Motion.div>
    <Motion.div className="hero-monogram" style={monogram} aria-hidden="true">{profile.initials}</Motion.div>
    <Motion.div className="hero-cursor-glow" style={glow} aria-hidden="true"/>
    <div className="shell hero-inner">
      <div className="hero-main">
        <Motion.div className="hero-portrait" style={portrait}>
          <Motion.div className="hero-portrait-frame" {...enter(.2, 30, .85)}>
            <img src={profile.photo} alt={profile.photoAlt} width="960" height="1200" fetchPriority="high" />
          </Motion.div>
          <Motion.div className="hero-portrait-caption" {...enter(.45)}><span>{profile.initials} / {profile.name}</span><span className="status-dot" aria-hidden="true" /></Motion.div>
        </Motion.div>
        <div className="hero-copy">
          <Motion.p className="eyebrow hero-eyebrow" {...enter(.12)}><span className="accent-rule"/>Sales / Marketing / Strategy</Motion.p>
          <h1 id="hero-title" aria-label={profile.name}>
            {profile.name.split(' ').map((word,i) => <span className="hero-word" key={word}>
              <Motion.span className={i ? 'outline-text' : ''} initial={reduced ? false : { y: '110%', letterSpacing: '-.045em' }} animate={{ y: 0, letterSpacing: '-.065em' }} transition={{ duration: reduced ? 0 : .9, delay: reduced ? 0 : .2 + i * .15, ease }}>{word}</Motion.span>
            </span>)}
          </h1>
          <Motion.p className="hero-position" {...enter(.55)}><span className="status-dot"/>Based in {profile.location}</Motion.p>
        </div>
      </div>
      <Motion.div className="hero-divider" initial={reduced ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: reduced ? 0 : .75, delay: reduced ? 0 : .55, ease }}/>
      <div className="hero-bottom">
        <Motion.div {...enter(.6)}><p className="micro-label">A COMMERCIAL MIND. A BROADER PERSPECTIVE.</p><h2>{profile.role}</h2></Motion.div>
        <div className="hero-summary">
          <Motion.p {...enter(.65)}>{profile.bio}</Motion.p>
          <Motion.div className="flex flex-wrap gap-x-9 gap-y-5" {...enter(.75, 15, .65)}><TextLink href="#experience">Explore my experience</TextLink><TextLink href={profile.linkedin} external>LinkedIn</TextLink></Motion.div>
        </div>
      </div>
      <Motion.div className="hero-foot" {...enter(.75, 12, .65)}><span>STRATEGY WITH PURPOSE. CONNECTION WITH PEOPLE.</span><a href="#about" aria-label="Discover more about me"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} aria-hidden="true"/></a></Motion.div>
    </div>
  </section>
}
