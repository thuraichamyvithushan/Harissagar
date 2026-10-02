import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { profile } from './src/data/portfolioData.js'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  const siteUrl = env.VITE_SITE_URL || 'https://example.com/'
  const title = `${profile.name} | ${profile.role}`
  const description = profile.seoDescription
  return { plugins: [react(), tailwindcss(), {
    name: 'portfolio-metadata',
    transformIndexHtml() {
      return [
        { tag: 'title', children: title, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'description', content: description } },
        { tag: 'link', attrs: { rel: 'canonical', href: siteUrl } },
        ...Object.entries({ 'og:type': 'profile', 'og:title': title, 'og:description': description, 'og:url': siteUrl, 'og:locale': 'en_AU', 'og:site_name': profile.name }).map(([property, content]) => ({ tag: 'meta', attrs: { property, content } })),
        ...Object.entries({ 'twitter:card': 'summary', 'twitter:title': title, 'twitter:description': description }).map(([name, content]) => ({ tag: 'meta', attrs: { name, content } })),
        { tag: 'script', attrs: { type: 'application/ld+json' }, children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: profile.name, jobTitle: profile.role, url: siteUrl, sameAs: [profile.linkedin], worksFor: { '@type': 'Organization', name: profile.experience[0].company }, address: { '@type': 'PostalAddress', ...profile.address }, knowsLanguage: profile.languages.map(language => language.name) }).replace(/</g, '\\u003c') },
      ]
    },
  }] }
})
