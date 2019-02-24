import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import "../styles/main.scss";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <h1>Hello world from Webpack and React!</h1>
        <Hello name="Alan" />
        <hr />
        <p>This is the App component</p>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
