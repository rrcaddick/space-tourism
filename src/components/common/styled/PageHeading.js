import styled, { css } from "styled-components";
import { Colors } from "themes";

export const PageHeading = styled.h1`
  font-family: "Bellefair", serif;
  font-weight: 400;
  color: ${Colors.Text};
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 1440px) {
    text-align: start;
  }

  ${(p) => {
    switch (p.size) {
      case "lg":
        return css`
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
      case "sm":
        return css`
          // Mobile
          font-size: 5.6rem;
          line-height: 6.4rem;

          // Tablet
          @media (min-width: 768px) {
            font-size: 8rem;
            line-height: 9.2rem;
          }

          // Desktop
          @media (min-width: 1440px) {
            font-size: 10rem;
            line-height: 11.5rem;
          }
        `;
      case "x-sm":
        return css`
          font-size: 2.8rem;
          line-height: 3.2rem;
        `;
      default:
        return "";
    }
  }}
`;
