import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import LogoIcon from "assets/shared/logo.svg";
import HamburgerIcon from "assets/shared/icon-hamburger.svg";
import CloseIcon from "assets/shared/icon-close.svg";
import { Colors } from "themes";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 2.4rem 0 2.4rem;
  position: relative;

  @media (min-width: 768px) {
    padding: 0 0 0 3.9rem;
  }
  @media (min-width: 1440px) {
    padding: 4rem 0 0 5.5rem;
  }
`;

const MobileMenuIcon = styled.img`
  height: ${(p) => (p.menuOpen ? "1.909rem" : "2.1rem")};
  width: ${(p) => (p.menuOpen ? "1.909rem" : "2.4rem")};
  position: absolute;
  top: 3.3rem;
  right: 2.4rem;
  z-index: 10;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 4rem;
  height: 4rem;
  vertical-align: top;

  @media (min-width: 768px) {
    width: 4.8rem;
    height: 4.8rem;
  }
`;

const Divider = styled.div`
  position: absolute;
  height: 1px;
  background: ${Colors.Text};
  align-self: center;
  left: 16.7rem;
  right: 78rem;
  z-index: 10;
  display: none;
  @media (min-width: 1440px) {
    display: block;
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  position: absolute;
  right: 0;
  top: 0;
  transform: translateX(${(p) => (p.menuOpen ? "0%" : "100%")});
  width: 25.4rem;
  height: 100vh;
  padding-top: 11.8rem;
  padding-left: 3.2rem;
  transition: transform 0.3s linear;

  @media (min-width: 768px) {
    padding: 0 4.6rem 0 4.8rem;
    transform: translateX(0);
    flex-direction: row;
    position: initial;
    width: initial;
    height: initial;
    transition: none;
  }

  @media (min-width: 1440px) {
    padding: 0 16.5rem 0 12.3rem;
  }
`;

const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3.7rem;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 4.8rem;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 2.7px;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 400;
  color: ${Colors.Text};
  position: relative;

  > span {
    font-weight: bold;
  }

  @media (min-width: 768px) {
    font-size: 1.4rem;
    padding: 3.9rem 0 3.9rem 0;
    > span {
      display: none;
    }

    &.active::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 0.3rem;
      background: ${Colors.Text};
      bottom: 0;
      left: 0;
    }

    :hover::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 0.3rem;
      background: ${Colors.Text};
      opacity: 0.5;
      bottom: 0;
      left: 0;
    }
  }
  @media (min-width: 1440px) {
    font-size: 1.6rem;
    > span {
      display: inline-block;
    }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <MobileMenuIcon
        src={menuOpen ? CloseIcon : HamburgerIcon}
        alt={menuOpen ? "Menu Open" : "Menu Close"}
        menuOpen={menuOpen}
        onClick={() => setMenuOpen((prevState) => !prevState)}
      />
      <Link to="/">
        <Logo src={LogoIcon} alt="Logo" />
      </Link>
      <Divider />
      <Menu menuOpen={menuOpen}>
        <MenuItems>
          <StyledLink to="/" exact activeClassName="active" onClick={() => setMenuOpen((prevState) => !prevState)}>
            <span>00</span> HOME
          </StyledLink>
          <StyledLink to="/destination" activeClassName="active" onClick={() => setMenuOpen((prevState) => !prevState)}>
            <span>01</span> DESTINATION
          </StyledLink>
          <StyledLink to="/crew" activeClassName="active" onClick={() => setMenuOpen((prevState) => !prevState)}>
            <span>02</span> CREW
          </StyledLink>
          <StyledLink to="/technology" activeClassName="active" onClick={() => setMenuOpen((prevState) => !prevState)}>
            <span>03</span> TECHNOLOGY
          </StyledLink>
        </MenuItems>
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;
