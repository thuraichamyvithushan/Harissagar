import { ArrowDown, ArrowUpRight } from 'lucide-react'
export default function TextLink({ href, children, external = false, className = '' }) {
  const Icon = external ? ArrowUpRight : ArrowDown
  return <a className={`text-link ${external ? "link-external" : "link-down"} ${className}`} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}<Icon size={20} strokeWidth={1.5} aria-hidden="true" /></a>
}
