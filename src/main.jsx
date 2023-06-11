import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TaskItem from "./components/TaskItem";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./index.scss";

const options = {
  timeout: 2000,
  offset: "30px",

  transition: transitions.SCALE,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </React.StrictMode>
);
