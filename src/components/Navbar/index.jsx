import React from "react";
import { IconContext } from "react-icons";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  ButtonContainer,
  MobileMenu,
  Logo,
  MobileLink,
  Linkedin,
  Mail,
  Github,
} from "./NavbarStyledComponent";
import ToggleButton from "./ToggleButton";
// import { useTheme } from "styled-components";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  // const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <Logo to="/" src={logo} alt="logo" />
            <Span>SwaGy.m() </Span>
          </div>
        </NavLogo>

        <ToggleButton
          style={{ zIndex: "99" }}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <IconContext.Provider value={{ className: "mail" }}>
            <a href="mailto:mitraswat999@mail.com">
              <Mail />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "linkedin" }}>
            <a href="https://www.linkedin.com/in/swaggy007/">
              <Linkedin />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "github" }}>
            <a href="https://github.com/SwagyXD">
              <Github />
            </a>
          </IconContext.Provider>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </MobileLink>
            <IconContext.Provider value={{ className: "mail" }}>
              <a href="mailto:mitraswat999@mail.com">
                <Mail />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "linkedin" }}>
              <a href="https://www.linkedin.com/in/swaggy007/">
                <Linkedin />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "github" }}>
              <a href="https://github.com/SwagyXD">
                <Github />
              </a>
            </IconContext.Provider>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
