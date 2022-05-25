import React from "react";
import ReactDOM from "react-dom";
import { GameState } from "../core";
import { useStore } from "../state";
import { InGame } from "./game/in-game";
import { MainMenu } from "./menus/main-menu";

interface MainProps {
  requestFullScreen: () => void;
}

function Main(props: MainProps) {
  const state = useStore();

  return (
    <>
      {state.gameState === GameState.MAIN_MENU && <MainMenu></MainMenu>}
      {state.gameState === GameState.IN_GAME && <InGame></InGame>}
      <div>{state.gameState.toString()}</div>
      <button onClick={props.requestFullScreen}>Fullscreen</button>
    </>
  );
}

export function render() {
  const rootDiv = document.getElementById("root");
  const requestFullScreen = () => {
    rootDiv.requestFullscreen();
  };

  ReactDOM.render(
    <Main requestFullScreen={requestFullScreen} />,
    document.getElementById("ui")
  );
}
