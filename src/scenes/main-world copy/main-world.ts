import { Engine, Scene } from "excalibur";
import { Maps, Resources } from "../../resources";
import { ReactDisplaySystem } from "../../systems";

export class MainWorld extends Scene {
  public onInitialize(engine: Engine) {
    console.log("initialize");

    // add some systems
    this.world.add(new ReactDisplaySystem());

    // load in the map
    Maps.MainWorld.addTiledMapToScene(this);
  }
  public onActivate() {}
  public onDeactivate() {}
}
