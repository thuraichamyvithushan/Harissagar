import { useRef, useState } from 'react'
import { AnimatePresence, motion as Motion, useInView } from 'framer-motion'
import { ArrowUpRight, ArrowDownRight, Check } from 'lucide-react'
import { useReducedMotion } from '../motion/hooks'
import { philosophy } from '../data/portfolioData'
import { ease } from '../motion/settings'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import MaskedHeading from './MaskedHeading'
import ApproachDiagram from './ApproachDiagram'
import '../approach.css'

export default function Philosophy() {
  const section = useRef(null)
  const tabs = useRef([])
  const visible = useInView(section, { once: true, amount: .1 })
  const reduced = useReducedMotion()
  const [active, setActive] = useState(0)
  const selected = philosophy[active]

  function changeWithKeyboard(event, index) {
    let next
    if (event.key === 'ArrowRight') next = (index + 1) % philosophy.length
    else if (event.key === 'ArrowLeft') next = (index + philosophy.length - 1) % philosophy.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = philosophy.length - 1
    else return
    event.preventDefault()
    setActive(next)
    tabs.current[next].focus()
  }

  return <section ref={section} id="approach" className="philosophy section" aria-labelledby="philosophy-heading">
    <Motion.div className="philosophy-wipe" aria-hidden="true" initial={false} animate={{ scaleX: visible || reduced ? 1 : 0 }} transition={{ duration: reduced ? 0 : .8, ease }}/>
    <div className="shell philosophy-content">
      <div className="approach-topline"><SectionLabel>MY APPROACH</SectionLabel><span className="approach-edition">A PEOPLE-FIRST PHILOSOPHY</span></div>
      <div className="approach-intro">
        <div>
          <MaskedHeading id="philosophy-heading" delay={.2} lines={['Strategy matters.', 'People make it work.']}/>
          <Reveal delay={.35}><p className="approach-subtitle">I believe good business starts with understanding people: what they need, what they value and where we can move forward together.</p></Reveal>
        </div>
        <Reveal className="approach-visual" delay={.4}>
          <ApproachDiagram active={active}/>
          <div className="approach-visual-caption"><span>Three principles. One connected approach.</span><ArrowUpRight size={16} strokeWidth={1.2} aria-hidden="true"/></div>
        </Reveal>
      </div>
      <Reveal delay={.1}>
        <div className="approach-stage-label"><span>FROM PERSPECTIVE TO POSSIBILITY</span><span>EXPLORE THE PRINCIPLES ↓</span></div>
        <div className="approach-tabs" role="tablist" aria-label="Explore the approach">
          {philosophy.map((item, index) => <button key={item.title} ref={el => { tabs.current[index] = el }} id={`approach-tab-${index}`} className="approach-tab" type="button" role="tab" aria-selected={active === index} aria-controls="approach-panel" aria-label={item.title} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => changeWithKeyboard(event, index)}>
            <span className="approach-tab-top"><span className="approach-tab-number">0{index + 1}</span><ArrowUpRight size={20} strokeWidth={1.3} aria-hidden="true"/></span>
            <span className="approach-tab-name">{item.title}</span>
            <span className="approach-tab-summary">{item.text}</span>
          </button>)}
        </div>
        <div id="approach-panel" className="approach-panel" role="tabpanel" aria-labelledby={`approach-tab-${active}`} tabIndex={0}>
          <AnimatePresence mode="wait" initial={false}>
            <Motion.div className="approach-panel-inner" key={selected.title} initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : -5 }} transition={{ duration: reduced ? 0 : .3, ease }}>
              <div className="approach-principle"><span className="approach-panel-number" aria-hidden="true">0{active + 1}</span><div><small>THE PRINCIPLE</small><h3>{selected.principle}</h3></div></div>
              <div className="approach-detail"><p>{selected.detail}</p><ul className="approach-practices">{selected.practices.map(practice => <li key={practice}>{practice}</li>)}</ul></div>
            </Motion.div>
          </AnimatePresence>
        </div>
        <div className="approach-footer"><p><span aria-hidden="true"><Check size={12} strokeWidth={1.5}/></span>{selected.outcome}</p><a className="approach-contact" href="#contact">Start a conversation<ArrowDownRight size={18} strokeWidth={1.5} aria-hidden="true"/></a></div>
      </Reveal>
    </div>
  </section>
}
