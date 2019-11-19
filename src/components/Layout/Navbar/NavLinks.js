import React from 'react'
import Link from 'gatsby-link'
import { Link as SLink } from 'react-scroll'

const NavLinks = ({ NavItem }) => {
  const Links = [
    {
      text: 'home',
      offset: -70,
    },
    {
      text: 'about me',
      offset: -310,
    },
    {
      text: 'contact',
      offset: -200,
    },
  ]
  return (
    <>
      {Links.map(({ text, offset }, index) => (
        <NavItem key={index}>
          {typeof window !== 'undefined' && window.location.pathname === '/' ? (
            <SLink
              smooth
              hashSpy={true}
              offset={offset}
              to={text.replace(' ', '-')}
            >
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
