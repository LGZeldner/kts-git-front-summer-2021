import { PropsWithChildren } from "react";
import "./Button.css";

export type ButtonProps = PropsWithChildren<{
  onClick: (e: React.MouseEvent) => void;
  disabled?: boolean;
}>;

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
}) => <button onClick={onClick} disabled={disabled} className=".search-bar__button">
        {children}
      </button>;

export default Button;