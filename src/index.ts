import { Game } from "./game";
import { DevTool } from "@excaliburjs/dev-tools";
import "./ui/main";

// create the game
const game = new Game();

// setup dev tools if debug
const devtool = new DevTool(game);

// start the game
game.start().then(() => {
  game.goToScene("main-world");
});
