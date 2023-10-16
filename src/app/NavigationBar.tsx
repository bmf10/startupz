'use client'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import {
  Button,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap'

interface Props {
  onHomeClick: () => void
  onStartupClick: () => void
  onContactClick: () => void
  onWorkWithUsClick: () => void
}

const NavigationBar: FC<Props> = ({
  onContactClick,
  onHomeClick,
  onStartupClick,
  onWorkWithUsClick,
}) => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = (ev: Event) => {
      const scrollY = window.scrollY
      if (scrollY >= 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={`navigation-bar ${scrolled && 'shadow'}`}>
      <main className="navigation-bar__container">
        <Navbar className="desktop-navbar">
          <NavbarBrand tag="div" onClick={onHomeClick}>
            <Image alt="logo" src="/logo.svg" width={200} height={47} />
          </NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink onClick={onStartupClick} href="/#startup">
                Startups
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={onContactClick} href="/#contact">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                tag="a"
                color="primary"
                outline
                onClick={onWorkWithUsClick}
              >
                Work with us!
              </Button>
            </NavItem>
          </Nav>
        </Navbar>
        <Navbar className="mobile-navbar">
          <NavbarBrand tag="div" onClick={onHomeClick}>
            <Image alt="logo" src="/logo.svg" width={200} height={47} />
          </NavbarBrand>
          <NavbarToggler onClick={() => setOpen(!open)} />
          <Collapse isOpen={open} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink onClick={onStartupClick} href="/#startup">
                  Startups
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={onContactClick} href="/#contact">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  tag="a"
                  color="primary"
                  outline
                  onClick={onWorkWithUsClick}
                >
                  Work with us!
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </main>
    </section>
  )
}

export default NavigationBar
