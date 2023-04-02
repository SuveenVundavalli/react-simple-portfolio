import React, { useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin, FaMoon } from "react-icons/fa";
import ToggleButton from "react-toggle-button";
import { useTheme } from "styled-components";
import { NavItems } from "../../data/NavItems";
import useScrollDirection from "../../hooks/useScrollDirection";
import { CTAButton } from "../styles/common/CTAButton.styled";
import {
  LineOne,
  LineThree,
  LineTwo,
  Logo,
  MenuIcon,
  Nav,
  NavItemStyled,
  NavLink,
  NavList,
  Profile,
  SocialIcons,
  StyledIcon,
  ThemeSwitcher,
} from "../styles/layout/Nav.styled";

const Navbar = ({ useDarkMode, setUseDarkMode }) => {
  const toggleDarkMode = (currentState) => {
    setUseDarkMode(!currentState);
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection("down");
  const theme = useTheme();
  return (
    <>
      <Nav scrollDirection={scrollDirection}>
        <div>
          <a href="#hero-section">
            <Logo>Suveen</Logo>
          </a>
        </div>
        <MenuIcon onClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen}>
          <LineOne menuOpen={menuOpen} />
          <LineTwo menuOpen={menuOpen} />
          <LineThree menuOpen={menuOpen} />
        </MenuIcon>
        <NavList menuOpen={menuOpen}>
          {NavItems &&
            NavItems.map((navItem, index) => (
              <NavItemStyled
                key={index}
                index={index}
                menuOpen={menuOpen}
                onClick={() => setMenuOpen(false)}
              >
                {navItem.isProfile && (
                  <NavLink href="#hero-section">
                    <Profile>
                      <img
                        src="./images/profile-pic.png"
                        alt="Suveen Vundavalli"
                      />
                      <span>Suveen Vundavalli</span>
                    </Profile>
                  </NavLink>
                )}
                {navItem.text && (
                  <NavLink href={navItem.href}>{navItem.text}</NavLink>
                )}
                {navItem.hasSocialIcons && (
                  <>
                    <SocialIcons>
                      <NavLink
                        href="https://github.com/SuveenVundavalli"
                        target="_blank"
                      >
                        <FaGithub />
                      </NavLink>
                      <NavLink
                        href="https://www.linkedin.com/in/suveenvundavalli/"
                        target="_blank"
                      >
                        <FaLinkedin />
                      </NavLink>
                      <NavLink
                        href="https://www.facebook.com/SuveenVundavalli/"
                        target="_blank"
                      >
                        <FaFacebook />
                      </NavLink>
                    </SocialIcons>
                  </>
                )}
                {navItem.hasThemeSwitch && (
                  <ThemeSwitcher>
                    <ToggleButton
                      inactiveLabel={
                        <StyledIcon>
                          <BsFillSunFill />
                        </StyledIcon>
                      }
                      activeLabel={
                        <StyledIcon>
                          <FaMoon />
                        </StyledIcon>
                      }
                      value={useDarkMode}
                      onToggle={toggleDarkMode}
                      colors={{
                        activeThumb: {
                          base: theme.colors.green,
                        },
                        inactiveThumb: {
                          base: theme.colors.green,
                        },
                        active: {
                          base: theme.colors.transparentOrange,
                          // hover: theme.colors.secondary,
                        },
                        inactive: {
                          base: theme.colors.transparentOrange,
                          // hover: theme.colors.secondary,
                        },
                      }}
                    />
                  </ThemeSwitcher>
                )}
                {navItem.hasCTA && (
                  <CTAButton href="mailto:suveenkumar.vundavalli@gmail.com">
                    Email Me
                  </CTAButton>
                )}
              </NavItemStyled>
            ))}
        </NavList>
      </Nav>
    </>
  );
};

export default Navbar;
