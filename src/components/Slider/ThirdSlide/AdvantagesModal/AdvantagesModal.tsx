import './AdvantegesModal.scss';

import * as React from 'react';

import { ArrowIcon, CrossIcon } from '@/assets/icons';

const pageContent: Record<number, { content: string }[]> = {
  1: [
    { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { content: 'Faucibus pulvinar elementum integer enim' },
    { content: 'Faucibus pulvinar elementum integer enim' },
  ],
  2: [
    { content: 'Mi bibendum neque egestas congue quisque egestas diam' },
    { content: 'Venenatis lectus magna fringilla urna' },
    { content: 'Venenatis lectus magna fringilla urna' },
  ],
};

const renderContentList = (page: number) =>
  pageContent[page].map((items, i) => (
    <li key={i + page * page}>
      <span className='item-number'>{`0${i + page * page}`}</span>
      <p>{items.content}</p>
    </li>
  ));

interface FadeInProps {
  duration: number;
  children: React.ReactNode;
}

const FadeIn = ({ duration, children }: FadeInProps) => {
  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.style.opacity = '0';

    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const opacity = Math.min(progress / duration, 1);
      element.style.opacity = opacity.toString();

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      start = null;
    };
  }, [duration]);

  return <div ref={elementRef}>{children}</div>;
};

interface AdvantagesModalProps {
  onClose: () => void;
}

export const AdvantagesModal = (props: AdvantagesModalProps) => {
  const { onClose } = props;
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div className='overlay' onClick={onClose}>
      <div className='advantage' onClick={(e) => e.stopPropagation()}>
        <button className='btn btn-close' onClick={onClose}>
          <CrossIcon />
        </button>
        <h3 className='title'>преимущества</h3>
        <div key='modal-brand-name' className='brand-name-modal'>
          brand<strong>xy</strong>
        </div>
        <ul className='list'>{renderContentList(currentPage)}</ul>
        <div className='actions-btn'>
          <button className='btn arrow-left' onClick={() => setCurrentPage(1)}>
            <ArrowIcon />
          </button>
          <div className='page-indicators'>
            {Object.keys(pageContent).map((_, index) => (
              <div
                key={`indicators-${index}`}
                className={`indicator ${index === currentPage - 1 && 'active'}`}
              ></div>
            ))}
          </div>
          <button className='btn arrow-right' onClick={() => setCurrentPage(2)}>
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

AdvantagesModal.displayName = 'AdvantagesModal';
FadeIn.displayName = 'FadeIn';
