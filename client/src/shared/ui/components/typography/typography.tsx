import { HTMLAttributes } from 'react';

import { TTypographyVariant, TTypographyElement } from '../../../types';

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  element?: TTypographyElement;
  variant?: TTypographyVariant;
}

export const Typography = (props: IProps) => {
  const {
    element = 'span',
    variant: typography = 'regular16',
    ...other
  } = props;

  const Element = element;

  return (
    <Element className={typography} {...other}>
      Hehe
    </Element>
  );
};
