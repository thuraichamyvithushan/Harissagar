import { useEffect, useState } from 'react'
import { motion as Motion, useMotionValue, useSpring } from 'framer-motion'
import { usePointerEnabled } from '../motion/hooks'
import { ease } from '../motion/settings'

export default function CustomCursor() {
  const enabled = usePointerEnabled()
  const [visible, setVisible] = useState(false)
  const [hover, setHover] = useState(false)
  const [label, setLabel] = useState('')
  const x = useMotionValue(-100), y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 180, damping: 28 }), ringY = useSpring(y, { stiffness: 180, damping: 28 })
  useEffect(() => {
    if (!enabled) return
    const move = event => {
      if (event.pointerType === 'touch') { setVisible(false); return }
      x.set(event.clientX); y.set(event.clientY)
      setVisible(true)
      setHover(Boolean(event.target.closest('a, button, summary, .expertise-row')))
      setLabel(event.target.closest('[data-cursor]')?.dataset.cursor || (event.target.closest('.about-image') ? 'EXPLORE' : ''))
    }
    const leave = () => setVisible(false)
    window.addEventListener('pointermove', move, { passive: true })
    document.documentElement.addEventListener('pointerleave', leave)
    window.addEventListener('blur', leave)
    return () => { window.removeEventListener('pointermove', move); document.documentElement.removeEventListener('pointerleave', leave); window.removeEventListener('blur', leave) }
  }, [enabled, x, y])
  if (!enabled) return null
  return <>
    <Motion.div className="cursor-dot" aria-hidden="true" style={{ x, y, opacity: visible ? .8 : 0 }}/>
    <Motion.div className="cursor-ring" aria-hidden="true" style={{ x: ringX, y: ringY }} animate={{ scale: hover || label ? 1.6 : 1, opacity: visible ? label ? .8 : hover ? .28 : .45 : 0 }} transition={{ duration: .35, ease }}><span>{label}</span></Motion.div>
  </>
}
