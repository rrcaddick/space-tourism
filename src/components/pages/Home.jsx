import React from "react";
import styled from "styled-components";
import { Colors } from "themes";

const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  padding: 4.8rem 2.4rem;

  @media (min-width: 768px) {
    gap: 15.6rem;
    padding: 10.6rem 16.5rem 13.1rem;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 38.6rem;
    padding: 25.1rem 15.9rem 9rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  text-align: center;

  @media (min-width: 768px) {
    gap: 2.4rem;
  }

  @media (min-width: 1440px) {
    text-align: start;
  }
`;

const SubTitle = styled.h2`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 400;
  color: ${Colors.Secondary};

  // Mobile
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0.27rem;

  // Tablet
  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 2.4rem;
    letter-spacing: 0.3375rem;
  }

  // Desktop
  @media (min-width: 1440px) {
    font-size: 2.8rem;
    line-height: 3.4rem;
    letter-spacing: 0.4725rem;
  }
`;

const Title = styled.h1`
  font-family: "Bellefair", serif;
  font-weight: 400;
  color: ${Colors.Text};

  // Mobile
  font-size: 8rem;
  line-height: 10rem;

  // Tablet
  @media (min-width: 768px) {
    font-size: 15rem;
    line-height: 15rem;
  }

  // Desktop
  @media (min-width: 1440px) {
    line-height: 17.2rem;
  }
`;

const Description = styled.p`
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  color: ${Colors.Secondary};
  max-width: 40rem;

  // Mobile
  font-size: 1.5rem;
  line-height: 2.5rem;

  // Tablet
  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 2.8rem;
    max-width: 70rem;
  }

  // Desktop
  @media (min-width: 1440px) {
    font-size: 1.8rem;
    line-height: 3.2rem;
  }
`;

const CTA = styled.button`
  border-radius: 50%;
  background: ${Colors.Text};
  border: none;
  outline: none;
  position: relative;
  cursor: pointer;

  // Font styled
  font-family: "Bellefair", serif;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.3rem;
  letter-spacing: 0.125rem;
  margin: auto auto 0 auto;

  // Size
  width: 15rem;
  height: 15rem;

  @media (min-width: 768px) {
    width: 24.2rem;
    height: 24.2rem;
    font-size: 3.2rem;
    line-height: 3.7rem;
    letter-spacing: 0.2rem;
  }

  @media (min-width: 1440px) {
    min-width: 27.4rem;
    min-height: 27.4rem;
    font-size: 3.2rem;
    line-height: 3.7rem;
    letter-spacing: 0.2rem;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${Colors.Text};
    opacity: 0.1;
    transition: transform 0.35s linear;
  }

  :hover::before {
    transform: scale(1.5);
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Content>
        <SubTitle>SO, YOU WANT TO TRAVEL TO</SubTitle>
        <Title>SPACE</Title>
        <Description>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of
          on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </Description>
      </Content>
      <CTA>EXPLORE</CTA>
    </HomeWrapper>
  );
};

export default Home;
