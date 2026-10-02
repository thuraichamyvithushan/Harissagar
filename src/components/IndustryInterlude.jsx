import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Pause, Play } from 'lucide-react'
import { industries, scenes } from '../data/portfolioData'
import { useReducedMotion } from '../motion/hooks'
import ParallaxImage from './ParallaxImage'

export default function IndustryInterlude() {
  const [paused, setPaused] = useState(false)
  const ref = useRef(null)
  const visible = useInView(ref, { margin: '80px' })
  const reduced = useReducedMotion()
  const Icon = paused ? Play : Pause
  return <section ref={ref} className="industry-interlude" role="region" aria-label={`Fields of experience and study: ${industries.join(', ')}`}>
    <ParallaxImage scene={scenes.cta} /><div className="industry-content"><p className="eyebrow">DIFFERENT WORLDS. CONNECTED POSSIBILITIES.</p>
      {[0, 1].map(row => <div className={`industry-ticker ticker-row-${row}`} key={row}><div className="ticker-track" style={{ animationPlayState: paused || !visible ? 'paused' : 'running' }} aria-hidden="true">{[0, 1].map(copy => <div className="ticker-set" key={copy}>{(row ? industries.slice(3) : industries.slice(0, 3)).map((word, i) => <span key={word} className={(i + row) % 2 ? 'outline-text' : ''}>{word}<i>✳</i></span>)}</div>)}</div></div>)}
      <div className="industry-caption"><span>COMMERCIAL THINKING / A BROADER LENS</span>{!reduced && <button className="ticker-toggle" type="button" onClick={() => setPaused(!paused)} aria-label={paused ? 'Resume industry ticker' : 'Pause industry ticker'} aria-pressed={paused}><Icon size={14} aria-hidden="true" /></button>}</div>
    </div>
  </section>
}
