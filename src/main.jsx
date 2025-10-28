import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { default as FamilyMBTITest } from "./FamilyMBTITest";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FamilyMBTITest />
  </StrictMode>
);
