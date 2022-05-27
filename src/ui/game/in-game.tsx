import React from "react";
import ReactDOM from "react-dom";
import { useStore } from "../../state";

export function InGame() {
  const state = useStore();

  return (
    <div>
      <div>CASH: {state.cash}</div>
    </div>
  );

  function test() {
    console.log("clicked test");
  }
}
