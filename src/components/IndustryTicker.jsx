import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Pause, Play } from 'lucide-react'
import { industries } from '../data/portfolioData'
export default function IndustryTicker() {
  const [paused, setPaused] = useState(false)
  const ref = useRef(null)
  const visible = useInView(ref, { margin: '80px' })
  const Icon = paused ? Play : Pause
  return <div ref={ref} className="industry-ticker" role="region" aria-label={`Fields of experience and study: ${industries.join(', ')}`}><div className="ticker-track" style={{ animationPlayState: paused || !visible ? 'paused' : undefined }} aria-hidden="true">{[0,1].map(copy => <div className="ticker-set" key={copy}>{industries.map((word,i) => <span key={word} className={i % 3 === 1 ? 'outline-text' : i % 3 === 2 ? 'ticker-accent' : ''}>{word}<i>✳</i></span>)}</div>)}</div><button className="ticker-toggle" onClick={() => setPaused(!paused)} aria-label={paused ? 'Resume industry ticker' : 'Pause industry ticker'}><Icon size={13} aria-hidden="true"/></button></div>
}
