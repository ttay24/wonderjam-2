import { Game } from "./game";
import { DevTool } from "@excaliburjs/dev-tools";
//import "./ui/main";

// create the game
const game = new Game();

// start the game
game.start().then(() => {
  game.goToScene("main-world");

  // setup dev tools if debug
  const devtool = new DevTool(game);

  /*setTimeout(() => {
    game.screen.goFullScreen().catch((err) => console.error(err));
  }, 3000);*/
});
