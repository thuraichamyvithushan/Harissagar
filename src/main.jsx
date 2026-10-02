import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@fontsource-variable/sora'
import '@fontsource-variable/manrope'
import './index.css'
import { cinematicAsset } from './cinematicAssets'
import { profile } from './data/portfolioData'

// Preload only assets that exist; CSS fallback scenes never make image requests.
for (const filename of [profile.photo, profile.photoMobile]) {
  const href = cinematicAsset(filename)
  if (!href) continue
  const link = document.createElement('link')
  link.rel = 'preload'; link.as = 'image'; link.href = href
  if (filename === profile.photo && cinematicAsset(profile.photoMobile)) link.media = '(min-width: 768px)'
  if (filename === profile.photoMobile) link.media = '(max-width: 767px)'
  link.setAttribute('fetchpriority', 'high')
  document.head.appendChild(link)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>,
)
