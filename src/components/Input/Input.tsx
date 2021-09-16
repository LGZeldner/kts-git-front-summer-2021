import React from "react";

import styles from './Input.module.scss';

export type InputProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

const Input: React.FC<InputProps> = ({ onChange, placeholder, value }) =>
  <input type="text" placeholder={placeholder} onChange={(event) => onChange(event.target.value)} value={value} className={styles.searchBar__input} />;

export default React.memo(Input);