import { Engine, Scene } from "excalibur";

export class MainWorld extends Scene {
  public onInitialize(engine: Engine) {
    console.log("initialize");
  }
  public onActivate() {}
  public onDeactivate() {}
}
