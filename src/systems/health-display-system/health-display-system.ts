import { Entity, System, SystemType } from "excalibur";
import { HealthComponent } from "../../components";
import { ActorType, GameState } from "../../core";
import { gameStateStore } from "../../state";

export class HealthDisplaySystem extends System<HealthComponent> {
  public readonly types = ["health-component"] as const;

  public systemType: SystemType = SystemType.Update;

  public update(entities: Entity[], delta: number): void {
    for (let entity of entities) {
      // get the health component
      const target = entity.get(HealthComponent);

      // if the type is player, then we want to notify the state store for UI display reasons
      if (target.actorType === ActorType.PLAYER) {
        console.log(`health for ${entity.name}`);
        const test = gameStateStore.getState();
        test.changeState(GameState.IN_GAME);
      }
    }
  }
}
