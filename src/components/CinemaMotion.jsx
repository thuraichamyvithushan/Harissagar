import { useRef, useState } from 'react'
import { motion as Motion, useInView, useScroll, useSpring } from 'framer-motion'
import { ArrowUpRight, Plus, Minus } from 'lucide-react'
import { useParallaxLayer, usePointerMotion, useReducedMotion } from '../motion/hooks'
import { ease } from '../motion/settings'

export function CinemaHeading({ id, lines, className = '' }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const visible = useInView(ref, { once: true, amount: .15 })
  const label = lines.map(line => typeof line === 'string' ? line : line.text).join(' ')
  return <h2 ref={ref} id={id} className={`cinema-motion-heading ${className}`} aria-label={label}>
    {lines.map((line, index) => {
      const text = typeof line === 'string' ? line : line.text
      return <span className="cinema-line-mask" key={`${text}-${index}`} aria-hidden="true"><Motion.span initial={reduced ? false : { y: '110%', rotate: 2 }} animate={{ y: reduced || visible ? 0 : '110%', rotate: reduced || visible ? 0 : 2 }} transition={{ duration: reduced ? 0 : .95, delay: reduced ? 0 : index * .09, ease }}>{line.italic ? <em>{text}</em> : text}</Motion.span></span>
    })}
  </h2>
}

export function CinemaQuote({ text }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const visible = useInView(ref, { once: true, amount: .3 })
  return <blockquote ref={ref} aria-label={`“${text}.”`} className="cinema-motion-quote">{`“${text}.”`.split(' ').map((word, index) => <span key={`${word}-${index}`} className="cinema-quote-mask" aria-hidden="true"><Motion.span initial={reduced ? false : { y: '110%', opacity: 0 }} animate={{ y: reduced || visible ? 0 : '110%', opacity: reduced || visible ? 1 : 0 }} transition={{ duration: reduced ? 0 : .85, delay: reduced ? 0 : index * .065, ease }}>{word}</Motion.span></span>)}</blockquote>
}

export function MagneticLink({ href, children, className = '', external = false }) {
  const pointer = usePointerMotion()
  const position = useParallaxLayer(pointer, 5, 3)
  return <Motion.a href={href} className={className} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} style={position} {...pointer.handlers}>{children}</Motion.a>
}

export function AnimatedCapability({ item, index }) {
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()
  const id = `capability-${index}`
  return <div className="cinema-capability">
    <h3><button className="cinema-capability-button" type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(value => !value)}><span className="cinema-overline">{String(index + 1).padStart(2, '0')}</span><span className="cinema-capability-name">{item.title}</span><span className="cinema-capability-toggle">{open ? <Minus size={20} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}</span></button></h3>
    <Motion.div id={id} className="cinema-disclosure" inert={!open} aria-hidden={!open} initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ height: { duration: reduced ? 0 : .42, ease }, opacity: { duration: reduced ? 0 : .25, delay: open && !reduced ? .08 : 0 } }}><p>{item.description}</p></Motion.div>
  </div>
}

export function AnimatedTimeline({ children }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] })
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return <div ref={ref} className="cinema-timeline"><Motion.div className="cinema-timeline-fill" aria-hidden="true" style={{ scaleY: reduced ? 1 : progress }} />{children}</div>
}

export function AnimatedChapter({ number, children, light = false }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const visible = useInView(ref, { once: true, amount: .5 })
  return <div ref={ref} className={`cinema-chapter ${light ? 'on-paper' : ''}`}><span>{number}</span><Motion.p initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: reduced || visible ? 1 : 0, y: reduced || visible ? 0 : 8 }} transition={{ duration: reduced ? 0 : .65, ease }}>{children}</Motion.p><Motion.i aria-hidden="true" initial={false} animate={{ scaleX: reduced || visible ? 1 : 0 }} transition={{ duration: reduced ? 0 : 1.1, ease, delay: reduced ? 0 : .1 }} /></div>
}

export function ConnectLink({ href, children }) {
  return <MagneticLink href={href} external className="cinema-connect"><span>{children}</span><ArrowUpRight aria-hidden="true" /></MagneticLink>
}
