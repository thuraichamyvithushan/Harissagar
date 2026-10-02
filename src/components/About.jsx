import { profile, scenes } from '../data/portfolioData'
import SectionLabel from './SectionLabel'
import MaskedHeading from './MaskedHeading'
import RevealText from './RevealText'
import ParallaxImage from './ParallaxImage'

export default function About() {
  return <section id="about" tabIndex={-1} aria-labelledby="about-heading" className="section about-section">
    <div className="shell"><SectionLabel number="02">MY STORY</SectionLabel>
      <div className="about-grid"><div className="about-copy"><MaskedHeading id="about-heading" lines={profile.copy.aboutHeading} />
        <RevealText direction="dissolve" className="about-bio">{profile.about.split('\n\n').map(text => <p key={text}>{text}</p>)}</RevealText>
        <p className="about-signature">{profile.name}<span>{profile.copy.aboutSignature}</span></p>
      </div><RevealText direction="wipe" className="about-image" delay={.1}>
        <ParallaxImage scene={scenes.about} /><div className="image-frame" aria-hidden="true" />
        <div className="image-coordinate"><span>{profile.address.addressLocality.toUpperCase()} / {profile.address.addressRegion}</span><span>AUSTRALIA</span></div>
        <div className="image-caption"><span>A BROADER<br />PERSPECTIVE.</span><span>02 / CONTEXT</span></div>
      </RevealText></div>
    </div>
  </section>
}
