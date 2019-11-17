import React, { useState, useEffect } from 'react'
import Link from 'gatsby-link'
import { Link as SLink } from 'react-scroll'

const NavLinks = ({ NavItem }) => {
  const [path, setPath] = useState(null)
  const Links = ['home', 'about me', 'contact']
  useEffect(() => {
    if (window !== 'undefined') setPath(window.location.pathname)
  }, [window.location.pathname])
  return (
    <>
      {Links.map((link, index) => (
        <NavItem key={index}>
          {path === '/' ? (
            <SLink smooth hashSpy={true} to={link.replace(' ', '-')}>
              {link}
            </SLink>
          ) : (
            <Link to={link === 'home' ? '/' : `/#${link.replace(' ', '-')}`}>
              {link}
            </Link>
          )}
        </NavItem>
      ))}
    </>
  )
}

export default NavLinks
