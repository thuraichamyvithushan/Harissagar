import { useReducedMotion } from '../motion/hooks'
import { useRef } from 'react'
import { motion as Motion, useInView } from 'framer-motion'
import { ease } from '../motion/settings'

export default function SectionLabel({ number, children }) {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, amount: .2 })
  const reduced = useReducedMotion()
  const show = reduced || visible
  return <p ref={ref} className="section-label motion-label">
    <Motion.i aria-hidden="true" initial={false} animate={{ scaleX: show ? 1 : 0 }} transition={{ duration: reduced ? 0 : .45, ease }} />
    <Motion.span className="section-label-copy" initial={false} animate={{ opacity: show ? 1 : 0, x: show ? 0 : 5 }} transition={{ duration: reduced ? 0 : .55, delay: reduced ? 0 : .15, ease }}>
      {number && <><b>{number}</b><span> / </span></>}{children}
    </Motion.span>
  </p>
}
