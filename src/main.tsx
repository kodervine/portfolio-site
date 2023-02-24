import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import App from "./App";
import "./App.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <ApolloProvider client={client}>
          <App opened={true} />
        </ApolloProvider>
      </AppProvider>
    </Router>
  </React.StrictMode>
);
