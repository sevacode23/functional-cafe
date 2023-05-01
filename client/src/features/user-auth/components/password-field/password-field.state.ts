import { useState } from 'react';

export const usePasswordField = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  const onIconMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return { isShowPassword, toggleShowPassword, onIconMouseDown };
};
