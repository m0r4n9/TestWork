import './Main.scss';

import { Slider } from '@/components/Slider';

export const Main = () => {
  return (
    <main className='main'>
      <Slider />
    </main>
  );
};

Main.displayName = 'Main';
