import React, { useState, useContext } from 'react'

import Link from 'gatsby-link'

import {
    MobileMenuWrapper,
    FloatingButton,
    NavItemMobile as NavItem,
    NavItemsBottomNav,
} from './NavMobile.style'

import { NavLinks } from './NavLinks'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ThemeToggleContext from '../ThemeToggleContext'
import { Burger } from './Burger'

const DarkModeButton = () => {
    const { toggleTheme, theme } = useContext(ThemeToggleContext)

    return (
        <>
            <FloatingButton as="button" type="button" onClick={toggleTheme}>
                <FontAwesomeIcon icon={theme === 'light' ? 'moon' : 'sun'} size="2x" />
            </FloatingButton>
        </>
    )
}

export const NavbarMobile = () => {
    const [isMenuOpen, setMenu] = useState(false)

    const handleMenuState = () => {
        setMenu(!isMenuOpen)
    }

    return (
        <>
            <MobileMenuWrapper>
                <FloatingButton onClick={handleMenuState} as="button">
                    <Burger isActive={isMenuOpen} />
                </FloatingButton>

                <NavItemsBottomNav isOpen={isMenuOpen}>
                    <NavLinks NavItem={NavItem} />

                    <NavItem>
                        <Link to="/blog">blog</Link>
                    </NavItem>
                    <NavItem style={{ width: 'auto' }}>
                        <DarkModeButton />
                    </NavItem>
                </NavItemsBottomNav>
            </MobileMenuWrapper>
        </>
    )
}

