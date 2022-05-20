import { ImageSource } from "excalibur";
import sword from "./images/sword.png";
import player from "./images/player.png";

/**
 * Default global resource dictionary. This gets loaded immediately
 * and holds available assets for the game.
 */
const Resources = {
  Player: new ImageSource(player),
  Sword: new ImageSource(sword),
};

export { Resources };
