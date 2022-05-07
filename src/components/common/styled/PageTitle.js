import styled from "styled-components";
import { css } from "styled-components";
import { Colors } from "themes";

export const PageTitle = styled.h2`
  font-family: "Barlow Condensed", sans-serif;
  text-transform: uppercase;
  font-weight: 400;

  ${(p) => {
    switch (p.size) {
      case "sm":
        return css`
          color: ${Colors.Secondary};
          font-size: 1.4rem;
          line-height: 1.7rem;
          letter-spacing: 0.236rem;
        `;
      default:
        return css`
          // Mobile
          color: ${Colors.Text};
          font-size: 1.6rem;
          line-height: 1.9rem;
          letter-spacing: 0.27rem;
          > span {
            font-weight: 700;
            opacity: 0.25;
            margin-right: 1.8rem;
          }

          // Tablet
          @media (min-width: 768px) {
            font-size: 2rem;
            line-height: 2.4rem;
            letter-spacing: 0.3375rem;
            > span {
              margin-right: 1.9rem;
            }
          }

          // Desktop
          @media (min-width: 1440px) {
            font-size: 2.8rem;
            line-height: 3.4rem;
            letter-spacing: 0.4725rem;
            > span {
              margin-right: 2.4rem;
            }
          }
        `;
    }
  }}
`;
