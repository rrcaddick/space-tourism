import React from "react";
import styled from "styled-components";
import { PageHeading, BodyText } from "./styled";

const CrewDetailsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 7.7rem;

  @media (min-width: 768px) {
    flex-direction: column-reverse;
    gap: 9rem;
  }
  @media (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 3.7rem;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  > img {
    display: block;
    max-height: 22.2rem;

    @media (min-width: 768px) {
      max-height: 53.2rem;
    }
  }

  > hr {
    border: none;
    border-top: 1px solid #383b4b;
    width: 100%;
    max-width: 40rem;

    @media (min-width: 768px) {
      display: none;
    }
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  ${PageHeading} {
    margin-bottom: 1.6rem;
    > span {
      display: block;
      mix-blend-mode: normal;
      font-size: 1.6rem;
      line-height: 1.8rem;
      opacity: 0.5;
      margin-bottom: 0.5rem;
    }
  }
  ${BodyText} {
    max-width: 52rem;
  }

  @media (min-width: 1440px) {
    align-items: flex-start;
    ${PageHeading} {
      > span {
        font-size: 2.4rem;
        line-height: 2.8rem;
        margin-bottom: 0.8rem;
      }
    }
  }
`;

const CrewDetails = ({ name, role, bio }) => {
  return (
    <CrewDetailsWrapper>
      <ImgContainer>
        <img src={require(`assets/crew/image-${name.toLowerCase().replaceAll(" ", "-")}.png`)} alt={name} />
        <hr />
      </ImgContainer>
      <Content>
        <PageHeading size="sm">
          <span>{role}</span>
          {name}
        </PageHeading>
        <BodyText>{bio}</BodyText>
      </Content>
    </CrewDetailsWrapper>
  );
};

export default CrewDetails;
