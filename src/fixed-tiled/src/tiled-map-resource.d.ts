import { TileMap, SpriteSheet, Scene, Sprite, Loadable, ImageSource, Collider, IsometricMap, Animation } from 'excalibur';
import { ExcaliburData } from './tiled-types';
import { TiledMap } from './tiled-map-parser';
import { TiledTileset } from './tiled-tileset';
export declare enum TiledMapFormat {
    /**
     * TMX map layer format
     */
    TMX = "TMX",
    /**
     * JSON map layer format
     */
    JSON = "JSON"
}
export interface TiledMapOptions {
    /**
     * By default files ending in .tmx are treated as TMX format, otherwise treated as JSON format
     */
    mapFormatOverride?: TiledMapFormat;
    /**
     * Override the starting auto-incrementing z-index value (default: `-1`). Each layer will increment this number by 1 unless the layer specifies it's own custom `z-index` property.
     */
    startingLayerZIndex?: number;
}
export declare class TiledMapResource implements Loadable<TiledMap> {
    path: string;
    private _resource;
    data: TiledMap;
    readonly mapFormat: TiledMapFormat;
    ex: ExcaliburData;
    imageMap: Record<string, ImageSource>;
    sheetMap: Record<string, SpriteSheet>;
    layers?: TileMap[];
    isoLayers: IsometricMap[];
    private _layerZIndexStart;
    private _mapToRawLayer;
    /**
     * Given an origin file path, converts a file relative to that origin to a full path accessible from excalibur
     */
    convertPath: (originPath: string, relativePath: string) => string;
    /**
     *
     * @param path Specify a path to your Tiled map source files (usually path/to/my_map.tmx)
     * @param options Optionally configure other aspects of the tilemap like start layer z-index and map format
     */
    constructor(path: string, options?: TiledMapOptions);
    private _addTiledCamera;
    private _addTiledColliders;
    private _addTiledText;
    private _addTiledInsertedTiles;
    /**
     * Use any layers with the custom property "solid"= true, to mark the TileMap
     * cells solid.
     */
    useSolidLayers(): void;
    /**
     * Adds the TileMap and any parsed objects from Tiled into the Scene
     * @param scene
     */
    addTiledMapToScene(scene: Scene): void;
    private _parseExcaliburInfo;
    isLoaded(): boolean;
    load(): Promise<TiledMap>;
    private _importMapData;
    /**
     * Given a Tiled gid (global identifier) return the Tiled tileset data
     * @param gid
     */
    getTilesetForTile(gid: number): TiledTileset;
    /**
     * Given a Tiled TileSet gid, return the equivalent Excalibur Sprite
     * @param gid
     */
    getSpriteForGid(gid: number): Sprite;
    private _transformPoints;
    getCollidersForGid(gid: number): Collider[];
    getAnimationForGid(gid: number): Animation | null;
    private _calculateZIndex;
    private _getEntityName;
    /**
     * Creates the Excalibur tile map representation
     */
    private _createTileMap;
    /**
     * Return the TileMap layers for the parsed Tiled map
     */
    getTileMapLayers(): TileMap[];
    /**
     * Return the IsometricMap layers for the parsed Tiled map
     */
    getIsometricMapLayers(): IsometricMap[];
}
