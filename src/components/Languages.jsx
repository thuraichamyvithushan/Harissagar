import { profile } from '../data/portfolioData'
import Reveal from './Reveal'
import { Globe2 } from 'lucide-react'
import SectionLabel from './SectionLabel'
export default function Languages() {
  return <section className="languages-section shell" aria-labelledby="languages-heading"><Reveal className="languages-heading"><SectionLabel>LANGUAGES I SPEAK</SectionLabel><h2 id="languages-heading">More ways to connect.</h2></Reveal><div className="language-grid">{profile.languages.map((language,i) => <Reveal key={language.name} delay={i * .07} distance={15}><div className="language"><Globe2 className="language-icon" size={16} aria-hidden="true"/><span className="micro-label">0{i + 1} /</span><h3>{language.name}</h3>{language.proficiency && <p>{language.proficiency}</p>}</div></Reveal>)}</div></section>
}
