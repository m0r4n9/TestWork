import './Slider.scss';

import * as React from 'react';

import { Header } from '@/components/Header';

import { FirstSlide } from './FirstSlide/FirstSlide';
import { SecondSlide } from './SecondSlide/SecondSlide.tsx';
import { ThirdSlide } from './ThirdSlide/ThirdSlide.tsx';

const slideMaxIndex = 2;
const slideWidth = 1024;
const posThreshold = 100;

const getClientX = (
  event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
) => ('clientX' in event ? event.clientX : event.touches[0].clientX);

export const Slider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const [startX, setStartX] = React.useState(0);
  const [currentX, setCurrentX] = React.useState(0);
  const [mouseDown, setMouseDown] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleSwipeStart = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    if (isModalOpen) return;

    setStartX(getClientX(event));
    setMouseDown(true);
  };

  const handleSwipeMove = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    if (!mouseDown) return;

    const clientX = getClientX(event);
    const diff = Math.abs(gitstartX - clientX) < 30 ? 0 : startX - clientX;

    const x = Math.min(
      0,
      Math.max(currentX - diff, -slideWidth * slideMaxIndex),
    );

    if (
      (currentSlideIndex === 0 && x > 0) ||
      (currentSlideIndex === slideMaxIndex && x < -slideWidth * slideMaxIndex)
    ) {
      return;
    }

    setCurrentX(x);
  };
  const handleSwipeEnd = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    const finalX =
      'clientX' in event ? event.clientX : event.changedTouches[0].clientX;

    const deltaX = startX - finalX;

    let nextSlideIndex = currentSlideIndex;

    if (Math.abs(deltaX) > posThreshold) {
      nextSlideIndex =
        deltaX > 0
          ? Math.min(currentSlideIndex + 1, slideMaxIndex)
          : Math.max(currentSlideIndex - 1, 0);
    }

    setCurrentSlideIndex(nextSlideIndex);
    setCurrentX(nextSlideIndex * -slideWidth);
    setMouseDown(false);
  };

  const setSlide = React.useCallback(
    (slideIndex: number) => () => {
      setCurrentSlideIndex(slideIndex);
      setCurrentX(slideIndex * -slideWidth);
    },
    [],
  );
  return (
    <div className='slider-scroll'>
      <Header goToHome={setSlide(0)} />
      <div
        onTouchMove={handleSwipeMove}
        onTouchStart={handleSwipeStart}
        onTouchEnd={handleSwipeEnd}
        onMouseDown={handleSwipeStart}
        onMouseMove={handleSwipeMove}
        onMouseUp={handleSwipeEnd}
        style={{
          transform: `translate(${currentX}px, 0)`,
          cursor: mouseDown ? 'grabbing' : 'grab',
        }}
        className='slider'
      >
        <FirstSlide nextSlide={setSlide(1)} />
        <SecondSlide isActive={currentSlideIndex === 1} />
        <ThirdSlide isModalOpen={isModalOpen} setModalIsOpen={setIsModalOpen} />
      </div>
    </div>
  );
};

Slider.displayName = 'Slider';
