import { useEffect, useState } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'
import { gentleSpring, pointerQuery } from './settings'

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const media = window.matchMedia(query)
    const update = () => setMatches(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [query])
  return matches
}

export function usePointerEnabled() {
  const desktopPointer = useMediaQuery(pointerQuery)
  const reduced = useReducedMotion()
  return desktopPointer && !reduced
}

// Keep the preference reactive, including changes while this page is open.
export function useReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}

// Normalized coordinates let several layers share one event and one spring pair.
export function usePointerMotion(spring = gentleSpring) {
  const enabled = usePointerEnabled()
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, spring)
  const y = useSpring(rawY, spring)
  useEffect(() => {
    if (!enabled) { rawX.jump(0); rawY.jump(0); x.jump(0); y.jump(0) }
  }, [enabled, rawX, rawY, x, y])
  const reset = () => { rawX.set(0); rawY.set(0) }
  const move = event => {
    if (!enabled || event.pointerType === 'touch') return
    const rect = event.currentTarget.getBoundingClientRect()
    const clamp = value => Math.max(-1, Math.min(1, value))
    rawX.set(clamp((event.clientX - rect.left) / rect.width * 2 - 1))
    rawY.set(clamp((event.clientY - rect.top) / rect.height * 2 - 1))
  }
  return { enabled, x, y, handlers: { onPointerMove: move, onPointerLeave: reset, onBlur: reset } }
}

export function useParallaxLayer(pointer, maxX, maxY = maxX) {
  const x = useTransform(pointer.x, [-1, 1], [-maxX, maxX])
  const y = useTransform(pointer.y, [-1, 1], [-maxY, maxY])
  return { x: pointer.enabled ? x : 0, y: pointer.enabled ? y : 0 }
}
