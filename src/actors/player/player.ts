import {
  Actor,
  CollisionType,
  Color,
  Engine,
  Input,
  vec,
  Vector,
} from "excalibur";
import { HealthComponent } from "../../components";
import { ActorType } from "../../core";
import { Resources } from "../../resources";

export class Player extends Actor {
  private speed: number = 0.08;

  constructor() {
    super({
      pos: vec(150, 150),
      width: 32,
      height: 32,
      color: new Color(255, 255, 255),
      scale: new Vector(0.5, 0.5),
      collisionType: CollisionType.Active,
    });
  }

  onInitialize() {
    this.graphics.use(Resources.Player.toSprite());

    // add some components
    this.addComponent(new HealthComponent(ActorType.PLAYER));
  }

  public update(engine: Engine, delta: number) {
    super.update(engine, delta);

    // handle player movement
    this.handleMovement(engine, delta);
  }

  private handleMovement(engine: Engine, delta: number) {
    const keyboard = engine.input.keyboard;

    let movement: Vector = new Vector(0, 0);

    // handle the input
    if (keyboard.isHeld(Input.Keys.W)) {
      movement.y = -1;
    }
    if (keyboard.isHeld(Input.Keys.S)) {
      movement.y = 1;
    }
    if (keyboard.isHeld(Input.Keys.A)) {
      movement.x = -1;
    }
    if (keyboard.isHeld(Input.Keys.D)) {
      movement.x = 1;
    }

    // normalize the input and do some movement
    if (movement.x !== 0 || movement.y !== 0) {
      movement = movement.normalize().scale(delta * this.speed);
      this.pos.addEqual(movement);
    }
  }
}
