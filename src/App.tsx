import React from "react";

//import Scss
import "./assets/scss/themes.scss";

//imoprt Route
import Route from "./routes";

// Fake Backend
import fakeBackend from "./helpers/AuthType/fakeBackend";

fakeBackend();

function App() {
  return (
    <React.Fragment>
      <Route />
    </React.Fragment>
  );
}

export default App;
