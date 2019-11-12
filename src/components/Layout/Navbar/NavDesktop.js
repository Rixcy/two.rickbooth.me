import React from 'react'
import logo from 'src/static/logo-colour.png'

import Link from 'gatsby-link'

const NavDesktop = () => {
  return (
    <>
      <Link className="logo" to="/">
        <img src={logo} alt="Rick Booth" />
      </Link>
    </>
  )
}

export default NavDesktop
