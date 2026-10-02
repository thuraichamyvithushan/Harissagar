import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function EducationOrbit() {
  const ref = useRef(null)
  const active = useInView(ref, { margin: '40px' })
  return <div ref={ref} className="education-orbit" data-active={active} role="img" aria-label="Business, marketing and law">
    <svg viewBox="0 0 420 130" fill="none" aria-hidden="true">
      <path className="education-orbit-path" d="M45 65C100 0 150 0 210 65S330 130 375 65" />
      <path className="education-orbit-trace" d="M45 65C100 0 150 0 210 65S330 130 375 65" />
      <circle className="education-traveller" r="2.5" />
      <circle className="education-traveller second" r="2" />
    </svg>
    {['BUSINESS', 'MARKETING', 'LAW'].map((word, index) => <div className="education-node" style={{ '--node-delay': `${index * -3}s` }} key={word}><span aria-hidden="true"/><span>{word}</span></div>)}
  </div>
}
