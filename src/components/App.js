import React from "react";
import ReactDOM from "react-dom";
import "../styles/main.scss";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <p>Put your content here</p>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
