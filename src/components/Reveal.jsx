import { useReducedMotion } from '../motion/hooks'
import { motion as Motion } from 'framer-motion'
import { ease, duration, viewport } from '../motion/settings'
import { useMediaQuery } from '../motion/hooks'

export default function Reveal({ children, className = '', delay = 0, direction = 'up', distance = 32, stagger = 0 }) {
  const reduced = useReducedMotion()
  const mobile = useMediaQuery('(max-width: 767px)')
  const travel = mobile ? Math.min(distance, 15) : distance
  const offset = direction === 'up' ? { y: travel } : { x: direction === 'left' ? -travel : travel }
  const variants = {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: reduced ? 0 : duration.reveal, ease, delay: reduced ? 0 : delay + stagger * .1 } },
  }
  return <Motion.div className={className} variants={variants} initial={reduced ? false : 'hidden'} {...(reduced ? { animate: 'visible' } : { whileInView: 'visible', viewport })}>{children}</Motion.div>
}
