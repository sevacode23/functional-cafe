import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';

import { theme } from 'shared/ui';

import { router } from '../config';

import { Layout } from './layout';

export const App = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </ThemeProvider>
);
