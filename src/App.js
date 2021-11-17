import React from "react";

import {
  Header,
  Video,
  Kit,
  Integration,
  Plan,
  Control,
  Footer,
} from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Video />
      <Kit />
      <Integration />
      <Plan />
      <Control />
      <Footer />
    </div>
  );
};

export default App;
