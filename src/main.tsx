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
            colorScheme: "dark",
            colors: {
              // override dark colors to change them for all components
              dark: [
                "#d5d7e0",
                "#acaebf",
                "#8c8fa3",
                "#666980",
                "#4d4f66",
                "#34354a",
                "#2b2c3d",
                "#1d1e30",
                "#0c0d21",
                "#01010a",
              ],
            },
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
