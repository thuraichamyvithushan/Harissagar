import { useRef } from 'react'
import { useInView } from 'framer-motion'

// Lightweight scene stand-ins remain behind a photograph when one is supplied.
export default function SceneAtmosphere({ kind = 'city' }) {
  const ref = useRef(null)
  const active = useInView(ref, { margin: '100px' })
  return <div ref={ref} className={`scene-atmosphere scene-${kind}`} data-active={active} aria-hidden="true">
    <div className="scene-sky" />
    <div className="scene-grid" />
    {kind === 'mountain' ? <><div className="mountain ridge-back" /><div className="mountain ridge-mid" /><div className="mountain ridge-front" /></>
      : kind === 'optics' ? <div className="scene-lens"><i /><i /><i /><i /><span /></div>
      : <div className="scene-architecture">{Array.from({ length: 9 }, (_, i) => <i key={i} style={{ '--pillar': i, '--height': `${[68, 86, 72, 100, 82, 64, 92, 74, 88][i]}%` }} />)}</div>}
    <div className="scene-horizon" />
    <div className="scene-particles">{Array.from({ length: 8 }, (_, i) => <i key={i} style={{ '--particle': i }} />)}</div>
  </div>
}
