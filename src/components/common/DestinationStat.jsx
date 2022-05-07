import React from "react";
import styled from "styled-components";
import { PageHeading, PageTitle } from "./styled";

const DestinationStatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  @media (min-width: 1440px) {
    align-items: flex-start;
  }
`;

const DestinationStat = ({ children, stat }) => {
  return (
    <DestinationStatWrapper>
      <PageTitle as="h4" size="sm">
        {children}
      </PageTitle>
      <PageHeading as="h3" size="x-sm">
        {stat}
      </PageHeading>
    </DestinationStatWrapper>
  );
};

export default DestinationStat;
