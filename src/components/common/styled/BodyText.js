import styled from "styled-components";
import { Colors } from "themes";

export const BodyText = styled.p`
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  color: ${Colors.Secondary};
  text-align: center;
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
    text-align: start;
  }
`;
