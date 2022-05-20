import { Engine, Scene } from "excalibur";
import { HealthDisplaySystem } from "../../systems";

export class MainWorld extends Scene {
  public onInitialize(engine: Engine) {
    console.log("initialize");

    this.world.add(new HealthDisplaySystem());
  }
  public onActivate() {}
  public onDeactivate() {}
}
