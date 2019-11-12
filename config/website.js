const meta = {
  siteTitle: 'rickboothdotme',
  siteDescription: 'My personal website built using Gatsby',
  siteTitleAlt: 'rickboothdotme',
  siteShortName: 'rickboothdotme',
  siteUrl: 'https://new.rickbooth.me',
}

const social = {
  siteLogo: `src/static/logo-colour.png`,
}

const website = {
  ...meta,
  ...social,
  googleAnalyticsID: 'UA-92232438-2',
  // Manifest
  themeColor: '#d8344e',
  backgroundColor: '#d8344e',
}

module.exports = website
