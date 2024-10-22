import '../Slider.scss';
import './FirstSlide.scss';

import * as React from 'react';

import { ArrowIcon } from '@/assets/icons';
import {
  bakt1,
  bakt2,
  bakt3,
  bakt4,
  bakt5,
  bakt6,
  baktbigbottom,
  pinksperm1,
  pinksperm2,
} from '@/assets/images/firstSlide';
import { Button } from '@/components/ui';

interface FirstSlideProps {
  nextSlide: () => void;
}
export const FirstSlide = React.memo((props: FirstSlideProps) => {
  const { nextSlide } = props;

  return (
    <div className='slide slide--first'>
      <div className='slide__content'>
        <h3 className='subtitle'>Привет,</h3>
        <h1 className='slide__title'>
          Это <strong>не</strong> коммерческое задание
        </h1>
      </div>
      <Button
        iconLeft={<ArrowIcon />}
        onClick={nextSlide}
        className='slide-btn-next'
      >
        Что дальше?
      </Button>
      <AnimationItems />
    </div>
  );
});

const AnimationItems = () => {
  return (
    <>
      <img
        src={pinksperm1}
        className='animation-item animation-item-pink-sperm-1'
        alt='spearm 1'
      />
      <img
        src={pinksperm2}
        className='animation-item animation-item-pink-sperm-2'
        alt='sperm 2'
      />
      <img
        src={bakt1}
        className='animation-item animation-item-bacteria-1'
        alt='bacteria'
      />
      <img
        src={bakt2}
        className='animation-item animation-item-bacteria-2'
        alt='bacteria'
      />
      <img
        src={bakt3}
        className='animation-item animation-item-bacteria-3'
        alt='bacteria'
      />
      <img
        src={bakt4}
        className='animation-item animation-item-bacteria-4'
        alt='bacteria'
      />
      <img
        src={bakt5}
        className='animation-item animation-item-bacteria-5'
        alt='bacteria'
      />
      <img
        src={bakt6}
        className='animation-item animation-item-bacteria-6'
        alt='bacteria'
      />
      <img
        src={baktbigbottom}
        className='animation-item animation-item-bacteria-large'
        alt='bacteria'
      />
    </>
  );
};

FirstSlide.displayName = 'FirstSlide';
AnimationItems.displayName = 'AnimationItems';
