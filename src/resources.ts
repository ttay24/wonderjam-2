import { ImageSource } from "excalibur";
import { TiledMapResource } from "@excaliburjs/plugin-tiled";
import cashBag from "./images/cash-bag.png";
import sword from "./images/sword.png";
import player from "./images/player.png";

/**
 * Default global resource dictionary. This gets loaded immediately
 * and holds available assets for the game.
 */
const Resources = {
  Player: new ImageSource(player),
  Sword: new ImageSource(sword),
  CashBag: new ImageSource(cashBag),
};

const Maps = {
  MainWorld: new TiledMapResource("/maps/main.json"),
  Kitchen: new TiledMapResource("/maps/kitchen.json"),
};

export { Maps, Resources };
