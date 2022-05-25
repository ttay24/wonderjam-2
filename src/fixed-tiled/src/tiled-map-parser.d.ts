import { RawTiledMap } from "./raw-tiled-map";
import { TiledLayer } from "./tiled-layer";
import { TiledObjectGroup } from "./tiled-object";
import { TiledTileset } from './tiled-tileset';
/**
 * Responsible for representing the Tiled TileMap in total and parsing from the source Tiled files (tmx)
 */
export declare class TiledMap {
    /**
     * Raw tilemap data
     */
    rawMap: RawTiledMap;
    orientation: "isometric" | "orthogonal" | "staggered" | "hexagonal";
    /**
     * Width of the Tiled Map in tiles
     */
    width: number;
    /**
     * Height of the Tiled Map in tiles
     */
    height: number;
    /**
     * Width of an individual tile in pixels
     */
    tileWidth: number;
    /**
     * Height of an individual tile in pixels
     */
    tileHeight: number;
    /**
     * Tile layers in paint order, first layer in the list is drawn first and so forth
     */
    layers: TiledLayer[];
    /**
     * Tile set definition for this Tiled map
     */
    tileSets: TiledTileset[];
    /**
     * Tiled Objects in this tiled map, used for storing
     */
    objectGroups: TiledObjectGroup[];
    getExcaliburObjects(): TiledObjectGroup[];
    getObjectLayerByName(name: string): TiledObjectGroup;
    getObjectLayerByProperty(name: string, value: any): TiledObjectGroup[];
    getTileLayerByName(name: string): TiledLayer;
    getTileLayersByProperty(name: string, value: any): TiledLayer[];
    static fromTmx(tmxData: string): Promise<TiledMap>;
    static fromJson(rawJson: RawTiledMap): Promise<TiledMap>;
    private static _fromRawTiledMap;
    private static _decompresslayers;
}
