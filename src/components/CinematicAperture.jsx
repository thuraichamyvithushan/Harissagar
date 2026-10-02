import { motion as Motion } from 'framer-motion'
import { useReducedMotion } from '../motion/hooks'
import { ease } from '../motion/settings'

// A local opening reveal, never a loading screen or scroll lock.
export default function CinematicAperture() {
  const reduced = useReducedMotion()
  if (reduced) return null
  return <div className="cinematic-aperture" aria-hidden="true">
    <Motion.div className="aperture-panel aperture-top" initial={{ y: '0%' }} animate={{ y: '-101%' }} transition={{ duration: 1.15, ease }}/>
    <Motion.div className="aperture-panel aperture-bottom" initial={{ y: '0%' }} animate={{ y: '101%' }} transition={{ duration: 1.15, ease }}/>
  </div>
}
