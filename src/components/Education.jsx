import { profile, scenes } from '../data/portfolioData'
import SectionLabel from './SectionLabel'
import MaskedHeading from './MaskedHeading'
import RevealText from './RevealText'
import ParallaxImage from './ParallaxImage'
import EducationOrbit from './EducationOrbit'

export default function Education() {
  const education = profile.education
  return <section id="education" tabIndex={-1} className="section education-section" aria-labelledby="education-heading"><ParallaxImage scene={scenes.education} /><div className="education-shade" aria-hidden="true" />
    <div className="shell education-content"><SectionLabel number="06">A BROADER LENS</SectionLabel><div className="education-layout"><div><MaskedHeading id="education-heading" lines={education.institution.split(' of ').map((line, i) => i ? `of ${line}` : line)} /><RevealText direction="dissolve"><p className="education-qualification">{education.qualification}</p><div className="education-status"><span>{education.period}</span><span><i className="status-dot" />{education.status}</span></div><div className="tags">{education.subjects.map(subject => <span key={subject} className="tag">{subject}</span>)}</div></RevealText></div>
      <div className="education-concept"><p className="micro-label">COMMERCE / PERSPECTIVE / CURIOSITY</p><EducationOrbit /><RevealText direction="dissolve" className="education-community"><span className="micro-label">BEYOND BUSINESS / COMMUNITY</span><h3>{profile.volunteering.organization}</h3><p>{profile.volunteering.role} · {profile.volunteering.chapter}</p><span className="micro-label">{profile.volunteering.period}</span></RevealText></div></div>
    </div>
  </section>
}
