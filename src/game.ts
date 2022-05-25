import { Engine, Loader, DisplayMode, Vector, vec, Scene } from "excalibur";
import { LevelOne } from "./scenes/level-one/level-one";
import { Player } from "./actors/player/player";
import { Maps, Resources } from "./resources";
import { MainWorld } from "./scenes/main-world/main-world";
import { Kitchen } from "./scenes/kitchen/kitchen";

/**
 * Managed game class
 */
export class Game extends Engine {
  private player: Player;
  private levelOne: LevelOne;
  private mainWorld: MainWorld;
  private kitchen: Kitchen;

  constructor() {
    super({
      width: 1280,
      height: 720,
      displayMode: DisplayMode.FitScreen,
      canvasElementId: "game",
      pointerScope: "Document" as any,
      suppressPlayButton: true,
      maxFps: 60,
    });
  }

  public async start(): Promise<void> {
    this.showDebug(false);

    // Create new scene with a player
    this.levelOne = new LevelOne();
    this.mainWorld = new MainWorld();
    this.kitchen = new Kitchen();

    // get player starting location
    await Maps.MainWorld.load();
    const objectsLayer = Maps.MainWorld.data.getExcaliburObjects()?.[0];
    const playerStart = objectsLayer.getObjectByType("PlayerStart");
    const startLoc = vec(playerStart.x, playerStart.y);

    // setup actors
    this.player = new Player(startLoc, this);
    this.levelOne.add(this.player);
    this.mainWorld.add(this.player);
    this.kitchen.add(this.player);

    // set camera strat
    this.setCamera([this.mainWorld, this.kitchen]);

    // add the scenes
    this.add("levelOne", this.levelOne);
    this.add("main-world", this.mainWorld);
    this.add("kitchen", this.kitchen);

    // Automatically load all default resources
    const loader = new Loader([
      ...Object.values(Maps),
      ...Object.values(Resources),
    ]);

    return super.start(loader);
  }

  setCamera(scenes: Scene[]) {
    for (const scene of scenes) {
      scene.camera.strategy.elasticToActor(this.player, 0.8, 0.9);
      scene.camera.zoom = 3.5;
    }
  }
}
