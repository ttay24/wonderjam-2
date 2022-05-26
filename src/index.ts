import { Game } from "./game";
import { DevTool } from "@excaliburjs/dev-tools";
import { render } from "./ui/main";
import { Flags } from "excalibur";

// create the game
Flags.enable("use-webgl");
const game = new Game();

// start the game
game.start().then(() => {
  game.goToScene("main-world");

  // setup dev tools if debug
  const devtool = new DevTool(game);

  /*setTimeout(() => {
    game.screen.goFullScreen().catch((err) => console.error(err));
  }, 3000);*/

  //render();
});
