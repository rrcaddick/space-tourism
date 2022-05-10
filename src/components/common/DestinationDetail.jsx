import React from "react";
import styled, { keyframes } from "styled-components";
import { useParams } from "react-router-dom";
import { Colors } from "themes";
import { PageHeading, BodyText } from "./styled";
import DestinationData from "../../data.json";
import DestinationStat from "./DestinationStat";

const rotation = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(3600deg)
  }
`;

const ImgContainer = styled.div`
  animation: ${rotation} 500s linear infinite;
  flex: 1 0 17rem;
  max-width: 30rem;

  > img {
    width: 100%;
  }

  @media (min-width: 768px) {
    flex: 1 0 30rem;
    max-width: 44.5rem;
  }

  @media (min-width: 1440px) {
    flex: 1 0 44.5rem;
    max-width: 100%;
  }
`;

const StyledPageHeading = styled(PageHeading)`
  margin-bottom: 0.1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.8rem;
  }
`;

const Divider = styled.hr`
  margin-top: 3.2rem;
  border: none;
  border-top: 1px solid ${Colors.Secondary};

  @media (min-width: 768px) {
    margin-top: 4.9rem;
  }
`;

const DestinationStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3.2rem;
  gap: 3.2rem;

  @media (min-width: 768px) {
    padding-top: 2.9rem;
    flex-direction: row;
    justify-content: space-evenly;
  }
  @media (min-width: 1440px) {
    justify-content: flex-start;
  }
`;

const DestinationDetail = ({ type }) => {
  const { destinationName } = useParams();

  // When getting data from API, useEffect and useState would be used
  const { description, distance, name, travel } = DestinationData.destinations.find(
    (x) => x.name.toLowerCase() === destinationName
  );

  return (
    <>
      {type === "image" && (
        <ImgContainer>
          <img src={require(`assets/destination/image-${destinationName}.webp`)} alt={`${name}`} />
        </ImgContainer>
      )}
      {type === "details" && (
        <>
          <StyledPageHeading size="md">{name}</StyledPageHeading>
          <BodyText>{description}</BodyText>
          <Divider />
          <DestinationStats>
            <DestinationStat stat={distance}>AVG. DISTANCE</DestinationStat>
            <DestinationStat stat={travel}>Est. travel time</DestinationStat>
          </DestinationStats>
        </>
      )}
    </>
  );
};

export default DestinationDetail;
