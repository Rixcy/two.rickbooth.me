import React from 'react'
import logo from 'src/static/logo-colour.png'

import Link from 'gatsby-link'

import ToggleSwitch from 'src/components/common/ToggleSwitch'

const NavDesktop = () => {
  return (
    <>
      <Link className="logo" to="/">
        <img src={logo} alt="Rick Booth" />
      </Link>

      <nav>
        <ToggleSwitch />
      </nav>
    </>
  )
}

export default NavDesktop
