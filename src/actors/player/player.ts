import {
  Actor,
  CollisionType,
  Color,
  Engine,
  Input,
  vec,
  Vector,
} from "excalibur";
import { TiledObject } from "@excaliburjs/plugin-tiled";
import { HealthComponent, ResourcesComponent } from "../../components";
import { ActorType } from "../../core";
import { Resources } from "../../resources";
import { CashBag } from "../cash-bag/cash-bag";

export class Player extends Actor {
  private speed: number = 0.08;

  // components
  healthComponent: HealthComponent;
  resourcesComponent: ResourcesComponent;

  constructor(startLoc: Vector, private engine: Engine) {
    super({
      pos: startLoc,
      width: 128,
      height: 128,
      color: new Color(255, 255, 255),
      scale: new Vector(0.125, 0.125),
      collisionType: CollisionType.Active,
      z: 3,
    });
  }

  onInitialize() {
    this.graphics.use(Resources.Player.toSprite());

    // add some components
    this.healthComponent = new HealthComponent(ActorType.PLAYER);
    this.resourcesComponent = new ResourcesComponent();
    this.addComponent(this.healthComponent);
    this.addComponent(this.resourcesComponent);

    this.on("collisionstart", (event) => {
      if (!event.other) return;

      // do waypoint things
      const tiledComponent: TiledObject = (
        event.other
          .getComponents()
          .find((c) => c.type === "ex.tiledobject") as any
      )?.object as TiledObject;
      if (tiledComponent?.getProperty("Waypoint")) {
        const waypoint: string = tiledComponent.getProperty("Waypoint")
          .value as string;
        this.engine.goToScene(waypoint);
        const x = +tiledComponent.getProperty("to_pos_x").value;
        const y = +tiledComponent.getProperty("to_pos_y").value;
        this.pos = vec(x, y);
        this.engine.currentScene.camera.pos = this.pos;
      }

      // pickup the moneys
      if (event.other instanceof CashBag) {
        this.addCash(10);
        event.other.kill();
      }
    });
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

  private addCash(cash: number) {
    this.resourcesComponent.cash += cash;
  }
}
