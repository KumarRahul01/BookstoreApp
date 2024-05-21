import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-7eqsucn1z3ucikyf.us.auth0.com"
      clientId="hZDQb1xheh9Uw7AGWK5SyJfN5TTu3R6s"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
      <Toaster />
    </Auth0Provider>
  </BrowserRouter>
);
