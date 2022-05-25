import { Matrix, Animation, AnimationStrategy } from 'excalibur';
import { TiledObjectGroup } from '.';
import { TiledFrame, TiledGrid, TiledMapTerrain, TiledProperty, TiledTileOffset, TiledWangSet } from "./tiled-types";
import { RawTiledTileset } from "./raw-tiled-tileset";
import { RawTilesetTile } from "./raw-tileset-tile";
import { TiledMapResource } from './tiled-map-resource';
export declare class TiledTileset {
    /**
     * The JSON format version
     */
    version: number;
    /**
     * GID corresponding to the first tile in the set
     */
    firstGid: number;
    /**
     * Path to the image used for tiles in this set
     */
    image: string;
    /**
     * Height of source image in pixels
     */
    imageHeight: number;
    /**
     * Width of source image in pixels
     */
    imageWidth: number;
    /**
     * (optional)
     */
    grid?: TiledGrid;
    /**
     * Buffer between image edge and first tile (pixels)
     */
    margin: number;
    /**
     * Alignment to use for tile objects (unspecified (default), topleft, top, topright, left, center, right, bottomleft, bottom or bottomright) (since 1.4)
     */
    objectAlignment: 'unspecified' | 'topleft' | 'top' | 'topright' | 'left' | 'center' | 'right' | 'bottomleft' | 'bottom' | 'bottomright';
    /**
     * Refers to external tileset file
     */
    source: string;
    /**
     * Spacing between adjacent tiles in image (pixels)
     */
    spacing: number;
    /**
     * Maximum columns of tiles in this set
     */
    columns: number;
    /**
     * Height of a tile in pixels
     */
    tileHeight: number;
    /**
     * Width of a tile in pixels
     */
    tileWidth: number;
    /**
     * Array of Tiles (optional)
     */
    tiles: TiledTilesetTile[];
    name: string;
    properties?: TiledProperty[];
    /**
     * The number of tiles in this tileset
     */
    tileCount: number;
    /**
     * Optional
     */
    tileOffset?: TiledTileOffset;
    /**
     * The Tiled version used to save the file
     */
    tiledVersion: string;
    /**
     * Hex-formatted color (#RRGGBB or #AARRGGBB) (optional)
     */
    backgroundColor?: string;
    /**
     * Hex-formatted color (#RRGGBB) (optional)
     */
    transparentColor?: string;
    /**
     * Array of Terrains (optional)
     */
    terrains?: TiledMapTerrain[];
    /**
     * Array of Wang sets (since 1.1.5)
     */
    wangSets?: TiledWangSet[];
    horizontalFlipTransform: Matrix;
    verticalFlipTransform: Matrix;
    diagonalFlipTransform: Matrix;
    static parse(rawTileSet: RawTiledTileset): TiledTileset;
}
export declare class TiledTilesetTile {
    id: number;
    tileset: TiledTileset;
    objectgroup?: TiledObjectGroup;
    terrain?: number[];
    animation?: TiledFrame[];
    animationStrategy?: AnimationStrategy;
    properties?: TiledProperty[];
    hasAnimation(): boolean;
    getAnimation(map: TiledMapResource): Animation | null;
    static parse(rawTilesetTile: RawTilesetTile, tileset: TiledTileset): TiledTilesetTile;
}
export declare const parseExternalTsx: (tsxData: string, firstGid: number, source: string) => TiledTileset;
export declare const parseExternalJson: (rawTileset: RawTiledTileset, firstGid: number, source: string) => TiledTileset;
