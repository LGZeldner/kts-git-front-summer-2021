import React, { PropsWithChildren } from "react";

import styles from './Button.module.scss';

export type ButtonProps = PropsWithChildren<{
  onClick: () => void;
  disabled?: boolean;
}>;

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled,
}) => {
  const handleOnClick = () => {
    if (!disabled) { onClick() }
  };
  return <button disabled={disabled} className={styles.searchBar__button} onClick={handleOnClick}>
    {children}
  </button>
};

export default React.memo(Button);