import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { PageTitle } from "components/common/styled";
import { Slider } from "components/common";
import { Colors } from "themes";
import Data from "../../data.json";
import CrewDetails from "components/common/CrewDetails";

const CrewWrapper = styled.section`
  padding: 2.4rem 2.4rem 0;
  ${PageTitle} {
    text-align: center;
    margin-bottom: 3.2rem;
  }
  position: relative;

  @media (min-width: 768px) {
    padding: 4rem 3.9rem 0;
    ${PageTitle} {
      text-align: start;
      margin-bottom: 6rem;
    }
  }
  @media (min-width: 1440px) {
    padding: 7.6rem 16.5rem 0;
  }
`;

const SlideControls = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  position: absolute;
  top: 33.5rem;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    top: 34rem;
  }
  @media (min-width: 1440px) {
    bottom: 9.4rem;
    left: 16.5rem;
    align-items: flex-end;
    transform: translateX(0);
  }
`;

const SlideControl = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${Colors.Text};
  opacity: ${(p) => (p.active ? "1" : "0.2")};
`;

const Crew = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [crewData, setCrewData] = useState([]);
  let slideInterval = useRef();

  useEffect(() => {
    // Simulate an API call
    setCrewData(Data.crew);
  }, []);

  useEffect(() => {
    const maxSlide = crewData.length - 1;

    slideInterval.current = setInterval(() => {
      setSlideIndex((prevIndex) => {
        if (prevIndex === maxSlide) return 0;
        return prevIndex + 1;
      });
    }, 5000);

    return () => {
      clearInterval(slideInterval.current);
    };
  }, [slideIndex, crewData]);

  const slideHandler = (e) => {
    clearInterval(slideInterval.current);
    setSlideIndex(+e.target.dataset.slide);
  };

  return (
    <CrewWrapper>
      <PageTitle>
        <span>02</span>Meet your crew
      </PageTitle>
      <Slider slideIndex={slideIndex}>
        {crewData.map((slide) => (
          <CrewDetails key={slide.name} {...slide} />
        ))}
      </Slider>
      <SlideControls>
        {crewData.map((_, i) => (
          <SlideControl key={i} onClick={slideHandler} data-slide={i} active={slideIndex === i} />
        ))}
      </SlideControls>
    </CrewWrapper>
  );
};

export default Crew;
