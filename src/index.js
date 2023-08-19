import React from "react";
import ReactDOM from "react-dom";
import RootContext from "./context";
import { Root } from "./root";
import "./index.css";
import "antd/dist/antd";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootContext>
      <Root />
    </RootContext>
  </React.StrictMode>
);
