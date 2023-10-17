import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "./assets/avenir-lt-pro-cufonfonts/AvenirLTProBlack.otf";
import "./assets/avenir-lt-pro-cufonfonts/Montserrat-Black.ttf"
import { ParallaxProvider } from "react-scroll-parallax";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ParallaxProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ParallaxProvider>
);
