import { Header } from 'widgets';

import classes from './layout.module.scss';

interface IProps {
  children?: React.ReactNode;
}

export const Layout = (props: IProps) => {
  const { children } = props;

  return (
    <div className={classes.root}>
      <Header />
      <div>{children}</div>
    </div>
  );
};
