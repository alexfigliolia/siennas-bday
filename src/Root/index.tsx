import React from "react";
import { createRoot } from "react-dom/client";
import { Loader } from "State/Loader";
import { App } from "./App";
import "Styles/reset.scss";

const node = document.getElementById("root");
if (!node) {
  throw new Error("what");
}

void Loader.preloadImages();
const root = createRoot(node);
root.render(<App />);
