const assets = import.meta.glob('./assets/cinematic/*.{webp,avif,jpg,jpeg,png}', {
  eager: true, query: '?url', import: 'default',
})

export function cinematicAsset(filename) {
  return assets[`./assets/cinematic/${filename}`]
}
