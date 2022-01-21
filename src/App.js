import { useState } from "react";
import "./App.css";
import Form from "./form/Form";
import Grid from "./grid/Grid";

import Preview from "./preview/Preview";

function App() {
  const [preview, setPreview] = useState([]);
  const [previewdata, setPreviewdata] = useState({});


  const valueHandler = (val) => {
    setPreview([...preview, val]);
   
  };

  const previewHandler = (pre) => {
    setPreviewdata(pre);
  };

  return (
    <div className="app">
      <div className="main">
        <Form valuehandler={valueHandler} previewHandler={previewHandler} />
        <Preview previewdata={previewdata} />
      </div>

      <Grid pre={preview} />
    </div>
  );
}

export default App;
