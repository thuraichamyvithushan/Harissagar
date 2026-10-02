import { useReducedMotion } from '../motion/hooks'
import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'
import { ease } from '../motion/settings'

export default function AnimatedCounter({ value }) {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, amount: .5 })
  const reduced = useReducedMotion()
  const completed = useRef(false)
  const number = Number.parseInt(value, 10)
  const suffix = value.replace(/^\d+/, '')
  useEffect(() => {
    const node = ref.current
    if (reduced || completed.current) { completed.current = true; node.textContent = value; return }
    if (!visible) { node.textContent = `0${suffix}`; return }
    // Update only this text node, not the React tree, and stop on unmount.
    const controls = animate(0, number, {
      duration: 1.3, ease,
      onUpdate: current => { node.textContent = `${Math.round(current)}${suffix}` },
      onComplete: () => { completed.current = true; node.textContent = value },
    })
    return () => controls.stop()
  }, [visible, reduced, number, suffix, value])
  return <strong><span className="sr-only">{value}</span><span ref={ref} data-counter={value} aria-hidden="true">{value}</span></strong>
}
