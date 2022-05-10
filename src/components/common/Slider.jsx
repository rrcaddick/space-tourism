import React from "react";
import styled from "styled-components";

const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow-x: hidden;
  > * {
    min-width: 100%;
    transform: translateX(calc(${(p) => p.slideIndex} * -100%));
    transition: transform ${(p) => (p.transition ? p.transition : 0.5)}s linear, opacity 0.75s;
  }
  > :not(:nth-child(${(p) => p.slideIndex + 1})) {
    opacity: 0;
  }
  > :nth-child(${(p) => p.slideIndex + 1}) {
    opacity: 1;
  }
`;

export const Slider = ({ children, slideIndex, transition }) => {
  return (
    <SliderWrapper slideIndex={slideIndex} transition={transition}>
      {children}
    </SliderWrapper>
  );
};
