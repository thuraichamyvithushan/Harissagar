import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolioData'
import RevealText from './RevealText'
import SectionLabel from './SectionLabel'
import MaskedHeading from './MaskedHeading'

export default function Expertise() {
  return <section id="expertise" tabIndex={-1} aria-labelledby="expertise-heading" className="section expertise-section"><div className="shell">
    <div className="section-intro"><div><SectionLabel number="03">MY EXPERTISE</SectionLabel><MaskedHeading id="expertise-heading" lines={['Where strategy', { text: 'becomes action.', muted: true }]} /></div><p className="section-aside">I bring a connected approach to commercial challenges, from the first conversation to the bigger picture.</p></div>
    <div className="expertise-list">{profile.expertise.map((item, i) => <RevealText key={item.title} direction="wipe" delay={.03 * (i % 3)}><details className="expertise-row">
      <summary><span className="expertise-number">{String(i + 1).padStart(2, '0')}</span><h3>{item.title}</h3><span className="expertise-arrow"><ArrowUpRight size={24} strokeWidth={1.2} aria-hidden="true" /></span></summary>
      <p>{item.description}</p>
    </details></RevealText>)}</div><p className="micro-label expertise-hint">SELECT A CAPABILITY TO EXPLORE <ArrowUpRight size={13} aria-hidden="true" /></p>
  </div></section>
}
