import { FC } from 'react';

import { Link } from 'react-router-dom';

import { Button } from '@/modules/core/design-system/button';
import { CustomRoutesDefault } from '@/settings/routes';

const Home: FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button asChild>
        <Link to={CustomRoutesDefault.about()}>About</Link>
      </Button>
    </div>
  );
};

export default Home;
