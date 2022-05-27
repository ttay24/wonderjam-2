import { Engine, Scene, vec } from "excalibur";
import { CashBag } from "../../actors/cash-bag/cash-bag";
import { Maps, Resources } from "../../resources";
import { ReactDisplaySystem } from "../../systems";

export class MainWorld extends Scene {
  public onInitialize(engine: Engine) {
    console.log("initialize");

    // add some systems
    this.world.add(new ReactDisplaySystem());

    // load in the map
    Maps.MainWorld.addTiledMapToScene(this);

    /*let waypoints = Maps.MainWorld.data
      .getExcaliburObjects()?.[0]
      .objects.filter((o) => !!o.getProperty("Waypoint"));*/
    const cashBags = Maps.MainWorld.data
      .getExcaliburObjects()?.[0]
      .getObjectsByType("CashBag");
    for (const cashBag of cashBags) {
      this.add(new CashBag(vec(cashBag.x, cashBag.y), engine));
    }
  }
  public onActivate() {}
  public onDeactivate() {}
}
