import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import App from "./App";
import "./App.css";
import { Badge, Button, MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <MantineProvider
          theme={{
            fontFamily: "Spectral, serif",
            primaryColor: "indigo",
            breakpoints: {
              xs: 500,
              sm: 800,
              md: 1000,
              lg: 1200,
              xl: 1400,
            },
          }}
          withGlobalStyles
        >
          <App opened={true} />
        </MantineProvider>
      </AppProvider>
    </Router>
  </React.StrictMode>
);
