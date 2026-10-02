import { useScroll, useTransform } from 'framer-motion'
import { usePointerEnabled } from './hooks'

export default function useSceneCamera(target) {
  const enabled = usePointerEnabled()
  const { scrollYProgress } = useScroll({ target, offset: ['start start', 'end start'] })
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -32])
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 24])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.055])
  return {
    background: { y: enabled ? backgroundY : 0, scale: enabled ? scale : 1 },
    portrait: { y: enabled ? portraitY : 0, scale: enabled ? scale : 1 },
  }
}
