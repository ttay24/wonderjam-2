import React from "react";
import ReactDOM from "react-dom";
import { useStore } from "../state";
import { MainMenu } from "./menus/main-menu";

interface MainProps {
  requestFullScreen: () => void;
}

function Main(props: MainProps) {
  const state = useStore();

  return (
    <>
      <MainMenu></MainMenu>
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
