import { site } from 'config/site'

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  email: site.email,
  jobTitle: site.role,
  image: `${site.url}${site.avatar}`,
  sameAs: [site.githubProfile, site.linkedIn, site.instagram],
}
