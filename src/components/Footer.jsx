import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Footer() {
  return <footer className="footer"><div className="shell footer-inner"><a className="footer-brand" href="#home">{profile.name}</a><p>{profile.address.addressLocality}, {profile.address.addressRegion}<br />Australia</p><a className="footer-linkedin" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={14} aria-hidden="true" /></a><a className="back-top" href="#home">Back to top<ArrowUp size={15} aria-hidden="true" /></a><span className="footer-end">END / {profile.edition}</span></div></footer>
}
