import './Header.scss';

import * as React from 'react';

import { HomeIcon } from '@/assets/icons';

interface HeaderProps {
  goToHome: () => void;
}

export const Header = React.memo((props: HeaderProps) => {
  const { goToHome } = props;

  const navItems: { title: React.ReactNode; action: () => void }[] =
    React.useMemo(
      () => [
        {
          title: <HomeIcon />,
          action: goToHome,
        },
        {
          title: 'Projects',
          action: goToHome,
        },
      ],
      [goToHome],
    );

  return (
    <header className='header'>
      <nav className='header-nav'>
        {navItems.map((item, index) => (
          <button key={index} onClick={item.action} className='header-item'>
            {item.title}
          </button>
        ))}
      </nav>
    </header>
  );
});

Header.displayName = 'Header';
