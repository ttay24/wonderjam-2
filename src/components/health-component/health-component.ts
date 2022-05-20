import { Component } from "excalibur";
import { ActorType } from "../../core";

export class HealthComponent extends Component<"health-component"> {
  public readonly type = "health-component";

  public hp: number = 100.0;
  public actorType: ActorType;

  constructor(actorType: ActorType) {
    super();

    this.actorType = actorType;
  }
}
