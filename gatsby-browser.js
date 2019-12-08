require('typeface-montserrat')
require('typeface-open-sans')
require('src/styles/prism-atom-dark.css')
require('prismjs/plugins/line-numbers/prism-line-numbers.css')

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`)
  }
}
