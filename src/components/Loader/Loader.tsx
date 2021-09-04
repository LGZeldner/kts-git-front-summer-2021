import React from "react";
import "./Loader.css";

export type loaderProps = {
  name: string;
};

const Loader: React.FC<loaderProps> = ({ name }) =>
  <div className="loader">{name}</div>

export default Loader;