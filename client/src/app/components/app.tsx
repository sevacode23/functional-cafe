import { ThemeProvider } from '@mui/material/styles';

import { Splash } from 'pages';
import { theme } from 'shared/ui';

export const App = () => (
  <ThemeProvider theme={theme}>
    <Splash />
  </ThemeProvider>
);
