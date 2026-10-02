import { useRef, useState } from 'react'
import { motion as Motion, useInView } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { cinematicAsset } from '../cinematicAssets'
import { useReducedMotion, usePointerMotion, useParallaxLayer } from '../motion/hooks'
import { ease } from '../motion/settings'
import TextLink from './TextLink'
import CinematicAperture from './CinematicAperture'
import useSceneCamera from '../motion/useSceneCamera'

export default function CinematicHero() {
  const ref = useRef(null)
  const active = useInView(ref)
  const [failed, setFailed] = useState(false)
  const reduced = useReducedMotion()
  const pointer = usePointerMotion()
  const camera = useSceneCamera(ref)
  const portrait = useParallaxLayer(pointer, 8, 6)
  const light = useParallaxLayer(pointer, 13, 10)
  const photo = cinematicAsset(profile.photo)
  const photoMobile = cinematicAsset(profile.photoMobile)
  const enter = (delay, duration = 1) => ({ initial: reduced ? false : { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: reduced ? 0 : duration, delay: reduced ? 0 : delay, ease } })
  return <section ref={ref} id="home" tabIndex={-1} className="cinematic-hero" data-active={active} aria-labelledby="hero-title" {...pointer.handlers}>
    <Motion.div className="hero-portrait" style={portrait} data-cursor="EXPLORE"><Motion.div className="portrait-depth-camera" style={camera.portrait}><Motion.div className="hero-portrait-camera" initial={reduced ? false : { opacity: 0, y: 20, scale: 1.04 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: reduced ? 0 : 2.5, ease }}>
      {photo && !failed ? <picture>{photoMobile && <source media="(max-width: 767px)" srcSet={photoMobile} />}<img src={photo} alt={profile.photoAlt} width="715" height="715" fetchPriority="high" onError={() => setFailed(true)} /></picture> : <div className="portrait-fallback" aria-label="Portrait placeholder"><span>{profile.initials}</span></div>}
    </Motion.div></Motion.div><div className="portrait-shade" /></Motion.div>
    <CinematicAperture />
    <div className="hero-shade" aria-hidden="true" /><div className="hero-light-sweep" aria-hidden="true" />
    <Motion.div className="hero-light" style={light} aria-hidden="true" />
    <div className="shell hero-content">
      <Motion.div className="hero-scene-label" {...enter(.08)}><span>01 / MY INTRODUCTION</span><span>{profile.address.addressLocality.toUpperCase()} / {profile.address.addressCountry}</span></Motion.div>
      <div className="hero-copy">
        <Motion.p className="eyebrow hero-eyebrow" {...enter(.15)}><span />SALES / MARKETING / STRATEGY</Motion.p>
        <h1 id="hero-title" aria-label={profile.name}>{profile.name.split(' ').map((word, i) => <span className="hero-word" key={word}><Motion.span className={i ? 'outline-text' : ''}
          initial={reduced ? false : { y: '115%', filter: 'blur(4px)' }} animate={{ y: 0, filter: 'blur(0px)' }} transition={{ duration: reduced ? 0 : 1.2, delay: reduced ? 0 : .2 + i * .12, ease }}>{word}</Motion.span></span>)}</h1>
        <Motion.p className="hero-role" {...enter(.6)}>I’m a {profile.role}</Motion.p>
        <Motion.p className="hero-statement" {...enter(.72)}>{profile.heroStatement}</Motion.p>
        <Motion.div className="hero-links" {...enter(.85)}><TextLink href="#experience">Explore my experience</TextLink><TextLink href={profile.linkedin} external>LinkedIn</TextLink></Motion.div>
      </div>
      <Motion.div className="hero-footer" {...enter(1)}><p><span className="status-dot" />I’M BASED IN {profile.location.toUpperCase()}</p><a className="scroll-cue" href="#about" aria-label="Scroll to explore my story"><span>SCROLL TO EXPLORE</span><span className="scroll-cue-line" /><ArrowDown size={16} aria-hidden="true" /></a><span className="hero-credit">A COMMERCIAL MIND.<br />A HUMAN PERSPECTIVE.</span></Motion.div>
    </div>
  </section>
}
