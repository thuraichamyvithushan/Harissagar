import { useRef, useState } from 'react'
import { motion as Motion, useScroll, useTransform } from 'framer-motion'
import { usePointerEnabled, useReducedMotion } from '../motion/hooks'
import { cinematicAsset } from '../cinematicAssets'
import SceneAtmosphere from './SceneAtmosphere'

export default function ParallaxImage({ scene, className = '', priority = false, tone = 0 }) {
  const ref = useRef(null)
  const [failed, setFailed] = useState(false)
  const reduced = useReducedMotion()
  const desktop = usePointerEnabled()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-25, 25])
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12])
  const source = cinematicAsset(scene.file)
  const mobile = cinematicAsset(scene.mobile)
  return <div ref={ref} className={`cinematic-scene ${className}`} aria-hidden="true">
    <Motion.div key={scene.file} className="scene-camera" style={{ y: desktop ? y : 0, scale: reduced || !desktop ? 1 : scale }} initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1, x: reduced ? 0 : tone * -8 }} transition={{ duration: reduced ? 0 : 1.6 }}>
      <SceneAtmosphere kind={scene.kind} />
      {source && !failed && <picture>{mobile && <source media="(max-width: 767px)" srcSet={mobile} />}<img src={source} alt="" loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" style={{ objectPosition: scene.position }} onError={() => setFailed(true)} /></picture>}
    </Motion.div>
    <div className="scene-tint" /><div className="scene-vignette" />
  </div>
}
