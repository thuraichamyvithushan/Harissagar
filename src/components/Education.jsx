import { profile, scenes } from '../data/portfolioData'
import SectionLabel from './SectionLabel'
import MaskedHeading from './MaskedHeading'
import RevealText from './RevealText'
import ParallaxImage from './ParallaxImage'
import EducationOrbit from './EducationOrbit'

export default function Education() {
  const education = profile.education[0]
  const community = [...profile.volunteer, ...profile.organisations]
  return <section id="education" tabIndex={-1} className="section education-section" aria-labelledby="education-heading"><ParallaxImage scene={scenes.education} /><div className="education-shade" aria-hidden="true" />
    <div className="shell education-content"><SectionLabel number="06">A BROADER LENS</SectionLabel><div className="education-layout"><div><MaskedHeading id="education-heading" lines={education.institution.split(' of ').map((line, i) => i ? `of ${line}` : line)} />{profile.education.map((item, index) => <RevealText key={`${item.institution}-${item.qualification}`} direction="dissolve" className={index ? 'education-community' : undefined}>
      {index > 0 && <h3>{item.institution}</h3>}
      <p className="education-qualification">{item.qualification}{item.field && !item.qualification.toLowerCase().includes(item.field.toLowerCase()) && ` · ${item.field}`}</p>
      <div className="education-status"><span>{item.period}</span>{item.status && <span><i className="status-dot" />{item.status}</span>}</div>
      {item.description && <p className="job-description">{item.description}</p>}
      {item.subjects.length > 0 && <div className="tags">{item.subjects.map(subject => <span key={subject} className="tag">{subject}</span>)}</div>}
    </RevealText>)}</div>
      <div className="education-concept"><p className="micro-label">COMMERCE / PERSPECTIVE / CURIOSITY</p><EducationOrbit />{community.map(item => <RevealText key={`${item.organisation}-${item.role}`} direction="dissolve" className="education-community"><span className="micro-label">BEYOND BUSINESS / COMMUNITY</span><h3>{item.organisation}</h3><p>{[item.role, item.chapter].filter(Boolean).join(' · ')}</p><span className="micro-label">{[item.period, item.cause].filter(Boolean).join(' · ')}</span></RevealText>)}</div></div>
    </div>
  </section>
}
