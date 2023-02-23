import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import App from "./App";
import "./App.css";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <App opened={true} />
        {/* </MantineProvider> */}
      </AppProvider>
    </Router>
  </React.StrictMode>
);
