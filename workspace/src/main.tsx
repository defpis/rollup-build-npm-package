import "./styles/main.scss";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const rootElement = document.querySelector("#root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    // <StrictMode>
    <App />
    // </StrictMode>
  );
} else {
  throw new Error("没有找到root节点");
}

// @ts-ignore
console.log(window.__React__ === React);
