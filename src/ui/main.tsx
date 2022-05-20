import React from "react";
import ReactDOM from "react-dom";
import { useStore } from "../state";
import { MainMenu } from "./menus/main-menu";

function Main() {
  const state = useStore();

  return (
    <>
      <MainMenu></MainMenu>
      <div>{state.gameState.toString()}</div>
    </>
  );
}

ReactDOM.render(<Main />, document.getElementById("ui"));
