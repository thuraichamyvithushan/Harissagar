import { profile } from '../data/portfolioData'
import AnimatedCounter from './AnimatedCounter'
import RevealText from './RevealText'
import SectionLabel from './SectionLabel'

export default function CareerSnapshot() {
  return <section className="snapshot-section section" aria-label="My career at a glance"><div className="snapshot-network" aria-hidden="true"><div /><div /><div /><span /></div><div className="shell snapshot-content"><SectionLabel>MY STORY SO FAR</SectionLabel><div className="snapshot">{profile.snapshot.map(item => <RevealText className="snapshot-item" direction="dissolve" key={item.label}><AnimatedCounter value={item.value} /><p>{item.label}</p></RevealText>)}<RevealText direction="curtain" className="snapshot-focus"><span className="micro-label">{profile.copy.focusLabel}</span><p>{profile.focus}</p></RevealText></div></div></section>
}
