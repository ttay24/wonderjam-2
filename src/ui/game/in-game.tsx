import React from "react";
import ReactDOM from "react-dom";

export function InGame() {
  return (
    <div>
      <button onClick={test}>PAUSE</button>
    </div>
  );

  function test() {
    console.log("clicked test");
  }
}
