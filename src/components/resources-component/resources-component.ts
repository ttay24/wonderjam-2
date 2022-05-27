import { Component } from "excalibur";

export class ResourcesComponent extends Component<"resources-component"> {
  public readonly type = "resources-component";

  public cash: number = 0.0;

  constructor() {
    super();
  }
}
