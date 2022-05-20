import { default as createVanilla } from "zustand/vanilla";
import { devtools } from "zustand/middleware";
import { GameState } from "../core/enums";
import create from "zustand";

export interface GameStateState {
  gameState: GameState;
  changeState: (newState: GameState) => void;
}

export const gameStateStore = createVanilla<GameStateState>()(
  devtools((set) => ({
    gameState: GameState.MAIN_MENU,
    changeState: (newState: GameState) => set(() => ({ gameState: newState })),
  }))
);

export const useStore = create(gameStateStore);
