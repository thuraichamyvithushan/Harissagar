import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function SocialLinks({ className = '' }) {
  const links = [
    { label: 'LinkedIn', href: profile.linkedin, Icon: Linkedin },
    { label: 'Facebook', href: profile.facebook, Icon: Facebook },
    { label: 'Instagram', href: profile.instagram, Icon: Instagram },
  ].filter(link => link.href)

  return <nav className={`cinema-social-links ${className}`} aria-label="Social media">
    {links.map(link => {
      const SocialIcon = link.Icon
      return <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} title={link.label}><SocialIcon size={17} aria-hidden="true" /><span>{link.label}</span></a>
    })}
  </nav>
}
