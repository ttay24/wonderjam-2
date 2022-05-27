import { Entity, System, SystemType } from "excalibur";
import { HealthComponent, ResourcesComponent } from "../../components";
import { ActorType, GameState } from "../../core";
import { gameStateStore } from "../../state";

export class ReactDisplaySystem extends System<
  HealthComponent | ResourcesComponent
> {
  public readonly types = ["health-component", "resources-component"] as const;

  public systemType: SystemType = SystemType.Update;

  public update(entities: Entity[], delta: number): void {
    for (const entity of entities) {
      // get the health component
      const targetResource = entity.get(ResourcesComponent);

      const state = gameStateStore.getState();
      state.setCash(targetResource.cash);

      // if the type is player, then we want to notify the state store for UI display reasons
      /*if (target.actorType === ActorType.PLAYER) {
      }*/
    }
  }
}
