import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useReducedMotion } from '../motion/hooks'

// Fixed particle positions keep the scene stable across renders and resizing.
const dust = [
  [9, 81, 17, -4], [17, 38, 21, -12], [26, 67, 19, -8],
  [35, 24, 23, -16], [43, 86, 18, -2], [51, 46, 22, -10],
  [61, 73, 20, -6], [72, 31, 24, -18], [83, 63, 19, -13],
  [92, 42, 22, -7],
]

export default function CinematicAtmosphere({ paused = false }) {
  const ref = useRef(null)
  const inView = useInView(ref)
  const reduced = useReducedMotion()
  const [pageVisible, setPageVisible] = useState(() => !document.hidden)

  useEffect(() => {
    const update = () => setPageVisible(!document.hidden)
    document.addEventListener('visibilitychange', update)
    return () => document.removeEventListener('visibilitychange', update)
  }, [])

  return <div ref={ref} className="cinema-atmosphere" aria-hidden="true" data-moving={inView && pageVisible && !reduced && !paused}>
    <div className="cinema-atmosphere-haze cinema-atmosphere-haze--warm" />
    <div className="cinema-atmosphere-haze cinema-atmosphere-haze--olive" />
    <div className="cinema-atmosphere-ray" />
    <div className="cinema-atmosphere-dust">{dust.map(([left, top, duration, delay], i) => <i key={i} style={{ left: `${left}%`, top: `${top}%`, '--drift-duration': `${duration}s`, '--drift-delay': `${delay}s` }} />)}</div>
  </div>
}
