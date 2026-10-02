import { motion as Motion, useScroll } from 'framer-motion'
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return <>
    <div className="scroll-progress" aria-hidden="true"><Motion.div style={{ scaleY: scrollYProgress }}/></div>
    <div className="mobile-scroll-progress" aria-hidden="true"><Motion.div style={{ scaleX: scrollYProgress }}/></div>
  </>
}
