import { MotionConfig } from 'framer-motion'
import { useReducedMotion } from './motion/hooks'
import Navbar from './components/Navbar'
import CinematicPortfolio from './components/CinematicPortfolio'
import FilmGrain from './components/FilmGrain'

export default function App() {
  const reduced = useReducedMotion()
  return <MotionConfig reducedMotion={reduced ? 'always' : 'never'}><a href="#main" className="skip-link">Skip to content</a><Navbar /><CinematicPortfolio /><FilmGrain /></MotionConfig>
}
