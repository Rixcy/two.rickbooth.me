import React from 'react'
import logo from 'src/static/logo-colour.png'

import Link from 'gatsby-link'
import { Link as SLink } from 'react-scroll'

import { NavItems, NavItem } from './Navbar.style'

import { NavLinks } from './NavLinks'
import { ToggleSwitch } from '../../common/ToggleSwitch'

export const NavDesktop = () => {
    return (
        <>
            {typeof window !== 'undefined' && window.location.pathname === '/' ? (
                <SLink className="logo" smooth offset={-100} to="home">
                    <img src={logo} alt="Rick Booth" />
                </SLink>
            ) : (
                <Link className="logo" to="/">
                    <img src={logo} alt="Rick Booth" />
                </Link>
            )}

            <nav>
                <NavItems>
                    <NavLinks NavItem={NavItem} />

                    <NavItem>
                        <Link to="/blog">blog</Link>
                    </NavItem>
                    <NavItem>
                        <ToggleSwitch />
                    </NavItem>
                </NavItems>
            </nav>
        </>
    )
}

