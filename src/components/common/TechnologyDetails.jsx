import React from "react";
import styled from "styled-components";
import { PageHeading, BodyText } from "./styled";
import { Colors } from "themes";

const TechnologyDetailsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10rem;

  @media (min-width: 768px) {
    gap: 16rem;
  }
  @media (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 9rem;
  }
`;

const ImgContainer = styled.div`
  > img {
    &#portrait {
      display: none;
    }
    display: block;
    height: 17rem;
    width: 100%;
    object-fit: cover;

    @media (min-width: 768px) {
      height: 31rem;
    }

    @media (min-width: 1440px) {
      &#landscape {
        display: none;
      }
      &#portrait {
        display: block;
      }
      height: initial;
      width: initial;
    }
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.4rem;
  ${PageHeading} {
    margin-bottom: 1.6rem;
    > span {
      display: block;
      font-family: "Barlow Condensed";
      color: ${Colors.Secondary};
      margin-bottom: 0.9rem;
      font-size: 1.4rem;
      line-height: 1.7rem;
      letter-spacing: 0.023625rem;
    }
  }
  ${BodyText} {
    max-width: 52rem;
  }

  @media (min-width: 768px) {
    ${PageHeading} {
      > span {
        font-size: 1.6rem;
        line-height: 2.7rem;
        margin-bottom: 1.6rem;
      }
    }
  }

  @media (min-width: 1440px) {
    margin-left: 16rem;
    align-items: flex-start;
    ${PageHeading} {
      > span {
        font-size: 1.6rem;
        line-height: 2.7rem;
        margin-bottom: 1.6rem;
      }
    }
  }
`;

const TechnologyDetails = ({ name, description }) => {
  return (
    <TechnologyDetailsWrapper>
      <ImgContainer>
        <img
          id="landscape"
          src={require(`assets/technology/image-${name.toLowerCase().replaceAll(" ", "-")}-landscape.jpg`)}
          alt={name}
        />
        <img
          id="portrait"
          src={require(`assets/technology/image-${name.toLowerCase().replaceAll(" ", "-")}-portrait.jpg`)}
          alt={name}
        />
      </ImgContainer>
      <Content>
        <PageHeading size="sm">
          <span>The terminology...</span>
          {name}
        </PageHeading>
        <BodyText>{description}</BodyText>
      </Content>
    </TechnologyDetailsWrapper>
  );
};

export default TechnologyDetails;
