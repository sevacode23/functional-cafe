import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { Icon } from 'shared/ui';

import classes from './user-auth.module.scss';
import { PasswordField } from '../password-field';

export const UserAuth = () => {
  return (
    <div className={classes.root}>
      <Icon type="logoBlack" />

      <div className={classes.form}>
        <Stack spacing={3}>
          <TextField type="email" label="Email" fullWidth />
          <PasswordField />
        </Stack>

        <Button
          variant="text"
          fullWidth={false}
          className={classes.loginButton}
        >
          Log in
        </Button>

        <Button variant="contained" className={classes.createButton} fullWidth>
          Create
        </Button>
      </div>
    </div>
  );
};
