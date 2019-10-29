import React from "react";
import "./App.css";
import ImageList from "./componenets/ImageList";

function App() {
  return (
    <div className="App">
      <p className = "instructions">
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role = "img" aria-label = "rocket">🚀</span>!
      </p>
      <ImageList />
    </div>
  );
}

export default App;
