import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className=" bg-[#1A1E1C]  text-white  ">
      <div className="bg-[url(bg.svg)] bg-no-repeat max-w-[1400px] mx-auto">
      <App />
      </div>
    </div>
  </StrictMode>
);
