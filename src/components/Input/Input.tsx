import { ChangeEventHandler } from "react";
import "./Input.css";

export type InputProps = {
    value: string;
    placeholder: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
};

const Input: React.FC<InputProps> = ({ onChange, placeholder, value }) => 
  <input type="text" placeholder={placeholder} onChange={onChange} value={value} className="search-bar__input"/>;

export default Input;