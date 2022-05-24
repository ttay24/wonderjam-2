import { Engine, Scene } from "excalibur";
import { Maps, Resources } from "../../resources";
import { HealthDisplaySystem } from "../../systems";

export class MainWorld extends Scene {
  public onInitialize(engine: Engine) {
    console.log("initialize");

    // add some systems
    this.world.add(new HealthDisplaySystem());

    // load in the map
    Maps.MainWorld.addTiledMapToScene(this);
  }
  public onActivate() {}
  public onDeactivate() {}
}
