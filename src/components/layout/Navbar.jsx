import React, { useState } from "react";
import { NavItems } from "../../data/NavItems";
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
} from "../styles/layout/Nav.styled";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CTAButton } from "../styles/common/CTAButton.styled";
import useScrollDirection from "../../hooks/useScrollDirecton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection("down");

  return (
    <>
      <Nav scrollDirection={scrollDirection}>
        <div>
          <a href="#hero-section">
            <Logo src="./images/logo_light.png" alt="logo" />
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
