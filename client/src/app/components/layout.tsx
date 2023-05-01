import { Header } from 'widgets';

interface IProps {
  children?: React.ReactNode;
}

export const Layout = (props: IProps) => {
  const { children } = props;

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
