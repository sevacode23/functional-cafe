import { createBrowserRouter } from 'react-router-dom';

import { UserAuth } from 'features';

import { ROUTES } from '../const';

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <div>Hello world!</div>,
  },
  {
    path: ROUTES.SIGN_UP,
    element: <UserAuth />,
  },
]);
