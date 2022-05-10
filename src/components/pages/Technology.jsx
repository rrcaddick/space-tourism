import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { PageTitle } from "components/common/styled";
import { Slider } from "components/common";
import { Colors } from "themes";
import Data from "../../data.json";
import TechnologyDetails from "components/common/TechnologyDetails";

const TechnologyWrapper = styled.section`
  padding: 2.4rem 0 8rem;
  ${PageTitle} {
    text-align: center;
    margin-bottom: 3.2rem;
  }
  position: relative;

  @media (min-width: 768px) {
    padding: 4rem 0 0;
    ${PageTitle} {
      text-align: start;
      margin: 0 0 6rem 3.9rem;
    }
  }
  @media (min-width: 1440px) {
    padding: 7.6rem 0 10rem 16.5rem;
    ${PageTitle} {
      margin: 0 0 6rem;
    }
  }
`;

const SlideControls = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  position: absolute;
  top: 28rem;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    top: 50rem;
  }
  @media (min-width: 1440px) {
    flex-direction: column;
    top: 7rem;
    bottom: 0;
    left: 22.5rem;
    transform: translateX(0);
  }
`;

const SlideControl = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(p) => (p.active ? Colors.Text : "transparent")};
  color: ${(p) => (p.active ? Colors.Primary : Colors.Text)};
  box-shadow: inset 0 0 0 1px #ffffff3f;
  font-size: 1.6rem;

  @media (min-width: 768px) {
    width: 5.8rem;
    height: 5.8rem;
    font-size: 2.4rem;
  }

  @media (min-width: 1440px) {
    width: 8rem;
    height: 8rem;
    font-size: 3.2rem;
  }
`;

const Technology = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [technologyData, setTechnologyData] = useState([]);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const slideInterval = useRef();

  useEffect(() => {
    // Simulate an API call
    setTechnologyData(Data.technology);
  }, []);

  useEffect(() => {
    const maxSlide = technologyData.length - 1;

    slideInterval.current = setInterval(() => {
      setSlideIndex((prevIndex) => {
        if (prevIndex === maxSlide) return 0;
        return prevIndex + 1;
      });
    }, 5000);

    return () => {
      clearInterval(slideInterval.current);
    };
  }, [slideIndex, technologyData]);

  const slideHandler = (e) => {
    clearInterval(slideInterval.current);
    setSlideIndex(+e.target.dataset.slide);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    clearInterval(slideInterval.current);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    const maxSlide = technologyData.length - 1;
    if (isLeftSwipe) {
      setSlideIndex((prevIndex) => {
        if (prevIndex === maxSlide) return 0;
        return prevIndex + 1;
      });
    }

    if (isRightSwipe) {
      setSlideIndex((prevIndex) => {
        if (prevIndex === 0) return maxSlide;
        return prevIndex - 1;
      });
    }
  };

  return (
    <TechnologyWrapper onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <PageTitle>
        <span>03</span>Space launch 101
      </PageTitle>
      <Slider slideIndex={slideIndex}>
        {technologyData.map((slide) => (
          <TechnologyDetails key={slide.name} {...slide} />
        ))}
      </Slider>
      <SlideControls>
        {technologyData.map((_, i) => (
          <SlideControl key={i} onClick={slideHandler} data-slide={i} active={slideIndex === i}>
            {i + 1}
          </SlideControl>
        ))}
      </SlideControls>
    </TechnologyWrapper>
  );
};

export default Technology;
