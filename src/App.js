import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt me</h1>
        <Pet name="daisy" animal="dog" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
