import { motion as Motion } from 'framer-motion'
import { useReducedMotion } from '../motion/hooks'
import { ease } from '../motion/settings'

export default function ApproachDiagram({ active }) {
  const reduced = useReducedMotion()
  const transition = { duration: reduced ? 0 : .65, ease }
  return <div className="approach-diagram" aria-hidden="true">
    <svg viewBox="0 0 300 160" fill="none">
      <path d="M10 76H290" stroke="#98a7b9" strokeOpacity=".2" strokeDasharray="2 5"/>
      {[65, 150, 235].map((x, index) => <g key={x}>
        <Motion.circle cx={x} cy="76" r="54" animate={{ stroke: index === active ? '#38d6d2' : '#344959', fill: index === active ? '#38d6d20b' : '#38d6d200' }} transition={transition}/>
        <Motion.circle cx={x} cy="76" r="3" animate={{ fill: index === active ? '#38d6d2' : '#67778b' }} transition={transition}/>
      </g>)}
      <Motion.path d="M65 76C95 40 120 40 150 76S205 112 235 76" stroke="#38d6d2" strokeWidth="1.3" initial={false} animate={{ pathLength: (active + 1) / 3 }} transition={transition}/>
      <path d="M145 12h10m-5-5v10M280 132h10m-5-5v10" stroke="#38d6d2" strokeOpacity=".4"/>
    </svg>
    <div><span>CLARITY</span><span>TRUST</span><span>OPPORTUNITY</span></div>
  </div>
}
