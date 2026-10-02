import { MotionConfig } from 'framer-motion'
import { ease, duration } from './motion/settings'
import { useReducedMotion } from './motion/hooks'
import Navbar from './components/Navbar'
import CinematicHero from './components/CinematicHero'
import About from './components/About'
import Expertise from './components/Expertise'
import ExperienceTimeline from './components/ExperienceTimeline'
import IndustryInterlude from './components/IndustryInterlude'
import Approach from './components/Approach'
import QuoteInterlude from './components/QuoteInterlude'
import Education from './components/Education'
import Languages from './components/Languages'
import CareerSnapshot from './components/CareerSnapshot'
import CinematicCTA from './components/CinematicCTA'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import FilmGrain from './components/FilmGrain'

export default function App() {
  const reduced = useReducedMotion()
  return <MotionConfig reducedMotion={reduced ? 'always' : 'never'} transition={{ ease, duration: reduced ? 0 : duration.ui }}><a href="#main" className="skip-link">Skip to content</a><Navbar /><main id="main" tabIndex={-1}><CinematicHero /><About /><QuoteInterlude /><Expertise /><ExperienceTimeline /><IndustryInterlude /><Approach /><Education /><Languages /><CareerSnapshot /><CinematicCTA /></main><Footer /><FilmGrain /><ScrollProgress /><CustomCursor /></MotionConfig>
}
