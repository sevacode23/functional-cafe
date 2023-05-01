import { createTheme } from '@mui/material/styles';

import { COLORS } from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY,
    },
    secondary: { main: COLORS.SECONDARY },
  },
  typography: {
    h1: {
      fontWeight: 'normal',
      fontSize: 34,
    },
    h2: { fontWeight: 'normal', fontSize: 24 },
    h3: { fontWeight: 500, fontSize: 20 },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: { fontWeight: 500, fontSize: 16 },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontWeight: 500,
      fontSize: 14,
    },
    button: {
      fontStyle: 'italic',
      fontSize: 14,
    },
    caption: { fontSize: 12 },
  },
});
