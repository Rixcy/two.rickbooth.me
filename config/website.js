const meta = {
  siteTitle: 'rickboothdotme',
  siteDescription: 'My personal website built using Gatsby',
  siteTitleAlt: 'rickboothdotme',
  siteShortName: 'rickboothdotme',
  siteUrl: 'https://new.rickbooth.me',
}

const social = {
  siteLogo: `src/static/logo.svg`
}

const website = {
  ...meta,
  ...social,
  googleAnalyticsID: 'UA-92232438-2',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
}

module.exports = website
