import { ExcaliburCamera, TiledPoint } from "./tiled-types";
import { TiledEntity } from "./tiled-entity";
import { RawTiledLayer } from "./raw-tiled-layer";
import { RawTiledObject } from "./raw-tiled-object";
export interface Polygon {
    x: number;
    y: number;
    polygon: {
        points: string;
    };
}
export interface Box {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface Ellipse {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare class TiledObjectGroup extends TiledEntity {
    objects: TiledObject[];
    rawObjectGroup: RawTiledLayer;
    order: number;
    getCamera(): ExcaliburCamera | undefined;
    getObjectByType(type: string): TiledObject | undefined;
    getObjectsByType(type: string): TiledObject[];
    getObjectByName(name: string): TiledObject | undefined;
    getObjectsByName(name: string): TiledObject[];
    getPoints(): TiledObject[];
    getEllipses(): (TiledObject & Ellipse)[];
    getText(): TiledObject[];
    getPolyLines(): TiledObject[];
    getPolygons(): (TiledObject & Polygon)[];
    getBoxes(): (TiledObject & Box)[];
    getInsertedTiles(): TiledObject[];
    static parse(objectGroup: RawTiledLayer): TiledObjectGroup;
}
export declare class TiledObject extends TiledEntity {
    type?: string;
    x: number;
    y: number;
    visible: boolean;
    rotation: number;
    width?: number;
    height?: number;
    /**
     * Present on point objects
     */
    point?: boolean;
    /**
     * Present on ellipse objects
     */
    ellipse?: boolean;
    /**
     * Present on text objects
     */
    text?: TiledText;
    /**
     * Present on polyline objects
     */
    polyline?: TiledPoint[];
    /**
     * Present on polygon objects
     */
    polygon?: TiledPoint[];
    /**
     * Present on inserted tile objects
     */
    gid?: number;
    rawObject: RawTiledObject;
    static parse(object: RawTiledObject): TiledObject;
}
export interface TiledText {
    text: string;
    color?: string;
    fontFamily: string;
    pixelSize: number;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    strikeout: boolean;
    kerning: boolean;
}
export interface TiledInsertedTile extends TiledObject {
    gid: number;
}
