import {
  Actor,
  CollisionType,
  Color,
  Engine,
  Input,
  vec,
  Vector,
} from "excalibur";
import { Resources } from "../../resources";

export class CashBag extends Actor {
  constructor(startLoc: Vector, private engine: Engine) {
    super({
      pos: startLoc,
      width: 50,
      height: 50,
      color: new Color(255, 255, 255),
      scale: new Vector(0.25, 0.25),
      collisionType: CollisionType.Passive,
      z: 3,
    });
  }

  onInitialize() {
    this.graphics.use(Resources.Sword.toSprite());
  }
}
