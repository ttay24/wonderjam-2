import { default as createVanilla } from "zustand/vanilla";
import { devtools } from "zustand/middleware";
import { GameState } from "../core/enums";
import create from "zustand";

export interface GameStateState {
  gameState: GameState;
  changeState: (newState: GameState) => void;

  // display state stuff
  cash: number;
  setCash: (cash: number) => void;
}

export const gameStateStore = createVanilla<GameStateState>()(
  devtools((set) => ({
    gameState: GameState.IN_GAME,
    changeState: (newState: GameState) => set(() => ({ gameState: newState })),

    cash: 0.0,
    setCash: (cash: number) => set(() => ({ cash })),
  }))
);

export const useStore = create(gameStateStore);
