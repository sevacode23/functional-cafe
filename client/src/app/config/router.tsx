import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '../const';

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <div>Hello world!</div>,
  },
  {
    path: ROUTES.AUTH,
    element: <div>Auth page</div>,
  },
]);
