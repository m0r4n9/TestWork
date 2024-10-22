import '../Slider.scss';
import './ThirdSlide.scss';

import * as React from 'react';

import { ArrowIcon } from '@/assets/icons/ArrowIcon.tsx';
import { iconCalendar } from '@/assets/images';
import {
  bottle,
  bubble1,
  bubble2,
  bubble3,
  bubble5,
  bubble6,
  bubble7,
  bubble8,
} from '@/assets/images/thirdSlide';
import { Button } from '@/components/ui/index.ts';

import { AdvantagesModal } from './AdvantagesModal/AdvantagesModal.tsx';

interface ThirdSlideProps {
  isModalOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThirdSlide = ({
  isModalOpen: modalIsOpen,
  setModalIsOpen,
}: ThirdSlideProps) => {
  const handleClose = () => setModalIsOpen(false);

  return (
    <div className='slide slide--third'>
      {modalIsOpen && <AdvantagesModal onClose={handleClose} />}
      <div className={`key-message-content ${modalIsOpen && 'hide'}`}>
        {!modalIsOpen && <h3 className='title'>ключевое сообщение</h3>}
        <div className='brand-name'>
          brand<strong>xy</strong>
        </div>
        <section className='grid'>
          <div className='card'>
            <img src={iconCalendar} alt='icon plate' />
            <p>
              Id exercitation magna labore et nulla fugiat.d exercitation magna
              labore et nulla fugiatd exercitation magna labore et nulla
            </p>
          </div>
          <div className='card'>
            <img src={iconCalendar} alt='icon calendar' />
            <p>Id exercitation magna labore et nulla fugiat.</p>
          </div>
          {!modalIsOpen && (
            <Button
              iconLeft={<ArrowIcon />}
              className='btn-about'
              onClick={() => setModalIsOpen(true)}
            >
              Подробнее
            </Button>
          )}
        </section>
      </div>
      <AnimationItems />
    </div>
  );
};

const AnimationItems = () => {
  return (
    <div>
      <img src={bottle} className='bottle' alt='spray bottle' />
      <img src={bubble1} className='bubble-1' alt='bubble' />
      <img src={bubble2} className='bubble-2' alt='bubble' />
      <img src={bubble3} className='bubble-3' alt='bubble' />
      <img src={bubble5} className='bubble-4' alt='bubble' />
      <img src={bubble5} className='bubble-5' alt='bubble' />
      <img src={bubble6} className='bubble-6' alt='bubble' />
      <img src={bubble7} className='bubble-7' alt='bubble' />
      <img src={bubble8} className='bubble-8' alt='bubble' />
    </div>
  );
};

ThirdSlide.displayName = 'ThirdSlide';
AnimationItems.displayName = 'AnimationItems';
