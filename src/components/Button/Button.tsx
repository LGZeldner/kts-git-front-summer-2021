import React, { PropsWithChildren } from "react";
import "./Button.css";

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
  return <button disabled={disabled} className="search-bar__button" onClick={handleOnClick}>
    {children}
  </button>
};

export default React.memo(Button);