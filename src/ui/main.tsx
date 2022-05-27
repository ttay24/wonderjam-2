import React from "react";
import ReactDOM from "react-dom";
import { GameState } from "../core";
import { Game } from "../game";
import { useStore } from "../state";
import { InGame } from "./game/in-game";
import { MainMenu } from "./menus/main-menu";

interface MainProps {
  requestFullScreen: () => void;
  game: Game;
}

function Main(props: MainProps) {
  const state = useStore();

  return (
    <>
      <div>
        <button onClick={props.requestFullScreen}>Fullscreen</button>
        <button onClick={() => props.game.goToScene("main-world")}>
          Main World
        </button>
      </div>
      <div style={{ padding: "0.5rem", fontWeight: "bold", cursor: "default" }}>
        {state.gameState === GameState.MAIN_MENU && <MainMenu></MainMenu>}
        {state.gameState === GameState.IN_GAME && <InGame></InGame>}
      </div>
    </>
  );
}

export function render(game: Game) {
  const rootDiv = document.getElementById("root");
  const requestFullScreen = () => {
    rootDiv.requestFullscreen();
  };

  ReactDOM.render(
    <Main requestFullScreen={requestFullScreen} game={game} />,
    document.getElementById("ui")
  );
}
