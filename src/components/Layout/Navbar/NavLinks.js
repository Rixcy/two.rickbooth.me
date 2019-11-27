import React from 'react'
import Link from 'gatsby-link'
import { Link as SLink } from 'react-scroll'

const NavLinks = ({ NavItem }) => {
  const Links = [
    {
      text: 'home',
    },
    {
      text: 'about me',
    },
    {
      text: 'contact',
    },
  ]
  return (
    <>
      {Links.map(({ text, offset }, index) => (
        <NavItem key={index}>
          {typeof window !== 'undefined' && window.location.pathname === '/' ? (
            <SLink smooth offset={offset} to={text.replace(' ', '-')}>
              {text}
            </SLink>
          ) : (
            <Link to={text === 'home' ? '/' : `/#${text.replace(' ', '-')}`}>
              {text}
            </Link>
          )}
        </NavItem>
      ))}
    </>
  )
}

export default NavLinks
