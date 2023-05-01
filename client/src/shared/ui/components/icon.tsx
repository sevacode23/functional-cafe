import { ImgHTMLAttributes } from 'react';

import logo from '../../assets/icons/logo.svg';

export const ICONS = { logo };

export type TIcon = keyof typeof ICONS;

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  type: TIcon;
}

export const Icon = (props: IProps) => {
  const { type, ...other } = props;

  return <img src={ICONS[type]} {...other} />;
};
