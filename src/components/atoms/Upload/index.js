import React from "react";
import { BlogImg } from "../../../assets";
import "./upload.scss";

const Upload = () => {
  return (
    <div className="upload">
      <img className="preview" src={BlogImg} alt="preview" />
      <input type="file" />
    </div>
  );
};

export default Upload;
