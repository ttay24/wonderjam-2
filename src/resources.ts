import { ImageSource } from "excalibur";
import { TiledMapResource } from "@excaliburjs/plugin-tiled";
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

const Maps = {
  MainWorld: new TiledMapResource("/maps/main.json"),
};

export { Maps, Resources };
