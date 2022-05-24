import { Engine, Loader, DisplayMode } from "excalibur";
import { LevelOne } from "./scenes/level-one/level-one";
import { Player } from "./actors/player/player";
import { Maps, Resources } from "./resources";
import { MainWorld } from "./scenes/main-world/main-world";

/**
 * Managed game class
 */
export class Game extends Engine {
  private player: Player;
  private levelOne: LevelOne;
  private mainWorld: MainWorld;

  constructor() {
    super({
      width: 1280,
      height: 720,
      displayMode: DisplayMode.FitScreen,
      canvasElementId: "game",
      pointerScope: "Document" as any,
      suppressPlayButton: false,
      maxFps: 60,
    });
  }

  public async start(): Promise<void> {
    // Create new scene with a player
    this.levelOne = new LevelOne();
    this.mainWorld = new MainWorld();

    // setup actors
    this.player = new Player();
    this.levelOne.add(this.player);
    this.mainWorld.add(this.player);

    // add the scenes
    this.add("levelOne", this.levelOne);
    this.add("main-world", this.mainWorld);

    // Automatically load all default resources
    const loader = new Loader([
      ...Object.values(Maps),
      ...Object.values(Resources),
    ]);

    return super.start(loader);
  }
}
