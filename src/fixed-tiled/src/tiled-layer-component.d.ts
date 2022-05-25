import { Component } from "excalibur";
import { TiledLayer } from "./tiled-layer";
export declare class TiledLayerComponent extends Component<'ex.tiledlayer'> {
    layer: TiledLayer;
    readonly type = "ex.tiledlayer";
    constructor(layer: TiledLayer);
}
