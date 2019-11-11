import React from 'react'
import logo from 'src/static/logo-colour.png'

import Link from 'gatsby-link'

const NavDesktop = () => {
  return (
    <>
      <Link className="logo" smooth offset={-100} hashSpy={true} to="home">
        <img src={logo} alt="Rick Booth" />
      </Link>
    </>
  )
}

export default NavDesktop
