import { FC } from 'react';

import { useRouteError } from 'react-router-dom';

const Error: FC = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops! xaxaxax</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*@ts-expect-error*/}
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error;
