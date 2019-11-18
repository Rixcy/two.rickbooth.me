import React from 'react'
import Link from 'gatsby-link'
import { Link as SLink } from 'react-scroll'

const NavLinks = ({ NavItem }) => {
  const Links = ['home', 'about me', 'contact']
  return (
    <>
      {Links.map((link, index) => (
        <NavItem key={index}>
          {typeof window !== 'undefined' && window.location.pathname === '/' ? (
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
