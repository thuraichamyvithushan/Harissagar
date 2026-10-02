import { useRef } from 'react'
import { motion as Motion, useInView } from 'framer-motion'
import { useReducedMotion } from '../motion/hooks'
import { ease } from '../motion/settings'

export default function RevealText({ children, className = '', direction = 'curtain', delay = 0 }) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, amount: .12 })
  const show = reduced || visible
  const clips = { curtain: 'inset(100% 0 0 0)', wipe: 'inset(0 100% 0 0)', dissolve: 'inset(0 0 0 0)' }
  // Observe the unclipped wrapper. A fully clipped observation target can never
  // intersect, which would otherwise leave content hidden in normal motion.
  return <div ref={ref} className={className}><Motion.div className="scene-reveal-content" initial={reduced ? false : { clipPath: clips[direction], opacity: direction === 'dissolve' ? 0 : 1 }}
    animate={{ clipPath: show ? 'inset(0 0 0 0)' : clips[direction], opacity: show || direction !== 'dissolve' ? 1 : 0 }}
    transition={{ duration: reduced ? 0 : .85, delay: reduced ? 0 : delay, ease }}>{children}</Motion.div></div>
}
