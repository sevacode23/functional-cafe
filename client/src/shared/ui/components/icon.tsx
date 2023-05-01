import { ImgHTMLAttributes } from 'react';

import logoBlack from '../../assets/icons/logo-black.svg';
import logoWhite from '../../assets/icons/logo-white.svg';

export const ICONS = { logoBlack, logoWhite };

export type TIcon = keyof typeof ICONS;

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  type: TIcon;
}

export const Icon = (props: IProps) => {
  const { type, ...other } = props;

  return <img src={ICONS[type]} {...other} />;
};
