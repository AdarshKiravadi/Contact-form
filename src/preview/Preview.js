import React from "react";
import "./preview.css";

const Preview = ({ previewdata }) => {
  
  return (
    <div className="preview">
      <h1>PREVIEW</h1>
      <h4>
        Name: {previewdata.firstname} {previewdata.lastname}
      </h4>
      <h4> Company: {previewdata.company}</h4>
      <h4> Email: {previewdata.email}</h4>
      <h4>Address: {previewdata.address} </h4>
      <h4> City: {previewdata.city}</h4>
      <h4> State: {previewdata.state}</h4>
    </div>
  );
};

export default Preview;
