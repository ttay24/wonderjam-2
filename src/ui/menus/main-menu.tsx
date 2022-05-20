import React from "react";
import ReactDOM from "react-dom";

export function MainMenu() {
  return (
    <div>
      <h1>MAIN MENU</h1>
      <button onClick={test}>Test</button>
    </div>
  );

  function test() {
    console.log("clicked test");
  }
}
