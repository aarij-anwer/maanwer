const defaultSiteUrl = 'http://localhost:3000'

export function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl

  try {
    return new URL(value)
  } catch {
    return new URL(defaultSiteUrl)
  }
}

export function absoluteUrl(path = '/') {
  return new URL(path, getSiteUrl()).toString()
}
