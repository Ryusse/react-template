import { FC } from 'react';

import { Link } from 'react-router-dom';

import { CustomRoutesDefault } from '@/settings/routes.ts';

const Header: FC = () => {
  return (
    <header className="container flex items-center gap-4 ">
      <Link to={CustomRoutesDefault.home()}>Home</Link>
      <Link to={CustomRoutesDefault.about()}>About</Link>
    </header>
  );
};

export default Header;
