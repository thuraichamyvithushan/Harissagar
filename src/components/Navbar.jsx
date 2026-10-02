import { useReducedMotion } from '../motion/hooks'
import { useEffect, useRef, useState } from 'react'
import { motion as Motion, useAnimationControls } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { navigation, profile, scenes } from '../data/portfolioData'
import ParallaxImage from './ParallaxImage'
import SocialLinks from './SocialLinks'
import { ease } from '../motion/settings'

function MenuGlyph({ open }) {
  const reduced = useReducedMotion()
  return <span className="menu-glyph" aria-hidden="true">
    <Motion.span animate={{ y: open ? 0 : -5, rotate: open ? 45 : 0 }} transition={{ duration: reduced ? 0 : .35, ease }}/>
    <Motion.span animate={{ scaleX: open ? 0 : 1, opacity: open ? 0 : 1 }} transition={{ duration: reduced ? 0 : .25, ease }}/>
    <Motion.span animate={{ y: open ? 0 : 5, rotate: open ? -45 : 0 }} transition={{ duration: reduced ? 0 : .35, ease }}/>
  </span>
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const dialog = useRef(null)
  const closing = useRef(false)
  const navigationTarget = useRef('')
  const controls = useAnimationControls()
  const reduced = useReducedMotion()
  const menuItems = [{ id: 'home', label: 'Home' }, ...navigation]

  useEffect(() => {
    const scroll = () => { setScrolled(window.scrollY > 40); if (window.scrollY < 100) setActive('') }
    scroll()
    window.addEventListener('scroll', scroll, { passive: true })
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id) }), { rootMargin: '-15% 0px -60% 0px' })
    navigation.forEach(({ id }) => observer.observe(document.getElementById(id)))
    return () => { window.removeEventListener('scroll', scroll); observer.disconnect() }
  }, [])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    const currentDialog = dialog.current
    document.body.style.overflow = 'hidden'
    controls.set('closed')
    currentDialog.showModal()
    controls.start('open')
    const desktop = window.matchMedia('(min-width: 1024px)')
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false) }
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      controls.stop()
      currentDialog.close()
      document.body.style.overflow = previous
      desktop.removeEventListener('change', closeOnDesktop)
      closing.current = false
    }
  }, [open, controls])

  // Navigate after the dialog cleanup restores focus and unlocks scrolling.
  useEffect(() => {
    if (open || !navigationTarget.current) return
    const id = navigationTarget.current
    navigationTarget.current = ''
    const frame = window.requestAnimationFrame(() => {
      const section = document.getElementById(id)
      if (!section) return
      section.focus({ preventScroll: true })
      section.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' })
      window.history.replaceState(null, '', `#${id}`)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [open, reduced])

  async function closeMenu(id) {
    if (closing.current) return
    closing.current = true
    await controls.start('closed')
    navigationTarget.current = id || ''
    setOpen(false)
  }
  function containFocus(event) {
    if (event.key !== 'Tab') return
    const elements = dialog.current.querySelectorAll('a[href], button')
    const first = elements[0], last = elements[elements.length - 1]
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
  }
  const menuVariants = {
    closed: { clipPath: 'inset(0 0 100% 0)', opacity: 0, transition: { duration: reduced ? 0 : .35, ease } },
    open: { clipPath: 'inset(0 0 0% 0)', opacity: 1, transition: { duration: reduced ? 0 : .55, ease, delayChildren: reduced ? 0 : .12, staggerChildren: reduced ? 0 : .065 } },
  }
  const itemVariants = {
    closed: { opacity: 0, y: 20, transition: { duration: reduced ? 0 : .2, ease } },
    open: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : .6, ease } },
  }
  return <>
    <Motion.header className={`site-header ${scrolled ? 'scrolled' : ''}`} initial={reduced ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .8, delay: reduced ? 0 : .05, ease }}>
      <div className="shell nav-inner">
        <a className="brand" href="#home" aria-label={`${profile.name}, home`}><span className="brand-mark">{profile.initials}<i /></span><span>{profile.name}</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>)}</nav>
        <SocialLinks className="cinema-nav-socials cinema-social-links--compact" />
        <button className="menu-toggle" onClick={() => setOpen(true)} aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-menu"><MenuGlyph open={open}/></button>
      </div>
    </Motion.header>
    <Motion.dialog ref={dialog} id="mobile-menu" className="mobile-menu" variants={menuVariants} animate={controls} initial="closed" onCancel={event => { event.preventDefault(); closeMenu() }} onKeyDown={containFocus} aria-label="Navigation">
      <ParallaxImage scene={scenes.strategy}/>
      <div className="mobile-menu-top"><span className="eyebrow">{profile.name}<small>{profile.eyebrow}</small></span><button aria-label="Close navigation" className="menu-close" onClick={() => closeMenu()}><MenuGlyph open={open}/></button></div>
      <nav aria-label="Mobile navigation">{menuItems.map((item,i) => <Motion.a variants={itemVariants} key={item.id} href={`#${item.id}`} onClick={event => { event.preventDefault(); closeMenu(item.id) }}><span>0{i + 1}</span>{item.label}<ArrowUpRight aria-hidden="true" /></Motion.a>)}</nav>
      <Motion.div variants={itemVariants} className="cinema-mobile-socials"><SocialLinks /></Motion.div>
      <p className="muted">{profile.location}</p>
    </Motion.dialog>
  </>
}
