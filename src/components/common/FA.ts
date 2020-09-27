import '@fortawesome/fontawesome-svg-core/styles.css'
import { library, config } from '@fortawesome/fontawesome-svg-core'

import {
    faMoon,
    faSun,
    faEnvelope,
    faPaperPlane,
    faCheck,
    faClock,
    faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons'

import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import {
    faFacebook,
    faTwitter,
    faReddit,
    faDev,
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

library.add(
    faMoon,
    faSun,
    faEnvelope,
    faPaperPlane,
    faCheck,
    faClock,
    faCalendarAlt,
    faFacebook,
    faTwitter,
    faReddit,
    faDev,
    faTimesCircle,
    faGithub,
    faLinkedin
)
config.autoAddCss = false
