import React from "react";
import styled from "styled-components";
import { NavLink, Route } from "react-router-dom";
import { PageTitle } from "components/common/styled";
import { Colors } from "themes";
import DestinationDetail from "components/common/DestinationDetail";
import { Redirect } from "react-router-dom";

const DestinationWrapper = styled.section`
  padding: 2.4rem 2.4rem 5.8rem;

  @media (min-width: 768px) {
    padding: 4rem 3.9rem 6.2rem;
  }
  @media (min-width: 1440px) {
    padding: 7.6rem 16.5rem 6.2rem;
  }
`;

const StyledPageTitle = styled(PageTitle)`
  text-align: center;
  margin-bottom: 3.2rem;
  @media (min-width: 768px) {
    text-align: start;
    margin-bottom: 6rem;
  }
`;

const Content = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    padding: 0 5.9rem;
  }

  @media (min-width: 1440px) {
    padding: 0;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15.7rem;
  }
`;

const DestinationImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10rem;
  margin-bottom: 3.2rem;

  @media (min-width: 768px) {
    padding: 0 23.4rem;
    margin-bottom: 5.3rem;
  }
  @media (min-width: 1440px) {
    padding: 0;
  }
`;

const Menu = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 3.2rem;
  }
  @media (min-width: 1440px) {
    justify-content: flex-start;
  }
`;

const MenuItems = styled.div`
  list-style: none;
  display: flex;
  gap: 2.7rem;

  @media (min-width: 768px) {
    gap: 3.5rem;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.4rem;
  line-height: 1.7rem;
  font-weight: 400;
  letter-spacing: 2.36px;
  font-family: "Barlow Condensed", sans-serif;
  color: ${Colors.Text};
  position: relative;
  padding: 0rem 0 0.8rem 0;

  ::after {
    content: "";
    position: absolute;
    display: none;
    width: 100%;
    height: 0.3rem;
    background: ${Colors.Text};
    bottom: 0;
    left: 0;
  }

  :hover::after {
    display: block;
    opacity: 0.5;
  }

  &.active::after {
    display: block;
    opacity: 1;
  }

  @media (min-width: 768px) {
    padding: 0rem 0 1.2rem 0;
    font-size: 1.6rem;
    line-height: 1.9rem;
    font-weight: 400;
    letter-spacing: 2.7px;
  }
`;

const DestinationContent = styled.div`
  margin: 0 auto;
  flex: 1;
`;

const Destination = () => {
  return (
    <>
      <Route path="/destination">
        <Redirect to="/destination/moon" />
      </Route>
      <DestinationWrapper>
        <StyledPageTitle>
          <span>01</span>Pick your destination
        </StyledPageTitle>
        <Content>
          <DestinationImg>
            <Route path="/destination/:destinationName">
              <DestinationDetail type="image" />
            </Route>
          </DestinationImg>
          <DestinationContent>
            <Menu>
              <MenuItems>
                <StyledLink to="/destination/moon" exact activeClassName="active">
                  MOON
                </StyledLink>
                <StyledLink to="/destination/mars" activeClassName="active">
                  MARS
                </StyledLink>
                <StyledLink to="/destination/europa" activeClassName="active">
                  EUROPA
                </StyledLink>
                <StyledLink to="/destination/titan" activeClassName="active">
                  TITAN
                </StyledLink>
              </MenuItems>
            </Menu>
            <Route path="/destination/:destinationName">
              <DestinationDetail type="details" />
            </Route>
          </DestinationContent>
        </Content>
      </DestinationWrapper>
    </>
  );
};

export default Destination;
