import React from "react";
import { createRoot } from "react-dom/client";
import MainLayout from "./Layout/MainLayout";
import "./css/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
createRoot(document.getElementById("root")).render(
  <>
    <MainLayout />
  </>
);
