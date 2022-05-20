import create from "zustand";
import { devtools } from "zustand/middleware";
import { GameState } from "./enums";

export interface GameStateState {
  gameState: GameState;
  changeState: (newState: GameState) => void;
}

export const useStore = create<GameStateState>()(
  devtools((set) => ({
    gameState: GameState.MAIN_MENU,
    changeState: (newState: GameState) => set(() => ({ gameState: newState })),
  }))
);
