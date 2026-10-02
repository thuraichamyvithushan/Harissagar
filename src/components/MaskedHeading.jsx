import { useReducedMotion } from '../motion/hooks'
import { motion as Motion } from 'framer-motion'
import { ease, viewport } from '../motion/settings'

export default function MaskedHeading({ id, lines, delay = 0 }) {
  const reduced = useReducedMotion()
  return <Motion.h2 id={id} initial={reduced ? false : 'hidden'} {...(reduced ? { animate: 'visible' } : { whileInView: 'visible', viewport })}>
    {lines.map((line, index) => <span className="heading-mask" key={index}>
      <Motion.span className={line.muted ? 'muted' : ''} variants={{ hidden: { y: '110%' }, visible: { y: 0 } }} transition={{ duration: reduced ? 0 : .8, delay: reduced ? 0 : delay + index * .1, ease }}>{line.text || line}</Motion.span>
    </span>)}
  </Motion.h2>
}
