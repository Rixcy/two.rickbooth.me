import '@fortawesome/fontawesome-svg-core/styles.css'
import { library, config } from '@fortawesome/fontawesome-svg-core'

import {
  faMoon,
  faSun,
  faEnvelope,
  faPaperPlane,
  faCheck,
} from '@fortawesome/free-solid-svg-icons'

library.add(faMoon, faSun, faEnvelope, faPaperPlane, faCheck)
config.autoAddCss = false
