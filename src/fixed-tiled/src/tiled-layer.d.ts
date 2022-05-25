import { TiledCompression, TiledEncoding } from "./tiled-types";
import { TiledEntity } from "./tiled-entity";
import { RawTiledLayer } from "./raw-tiled-layer";
import { Vector } from "excalibur";
export declare const FLIPPED_HORIZONTALLY_FLAG = 2147483648;
export declare const FLIPPED_VERTICALLY_FLAG = 1073741824;
export declare const FLIPPED_DIAGONALLY_FLAG = 536870912;
/**
 * Inspects gid for horizontal flag
 * @param gid
 */
export declare const isFlippedHorizontally: (gid: number) => boolean;
/**
 * Inspects gid for vertical flag
 * @param gid
 */
export declare const isFlippedVertically: (gid: number) => boolean;
/**
 * Inspects gid for diagonal flag (anti-diagonal flip enables tile rotation)
 * @param gid
 */
export declare const isFlippedDiagonally: (gid: number) => boolean;
/**
 * Removes bit flags from gid
 * @param gid
 */
export declare const getCanonicalGid: (gid: number) => number;
export declare class TiledLayer extends TiledEntity {
    /**
     * Array of gid's (global Tiled identifiers) that point to a unique tile
     *
     * Note: the most significant byte may have flipped data encoded making the gid appear like a negative
     * integer.
     *
     * * Use `getCanonicalGid(gid)` to strip the bit flags from the high order byte
     * * Check flipped flags with:
     *   * `isFlippedDiagonally(gid)`
     *   * `isFlippedVertically(gid)`
     *   * `isFlippedHorizontally(gid)`
     */
    data: number[];
    /**
     * Offset of the tile map
     */
    offset: Vector;
    /**
     * Parallax Factor
     */
    parallaxFactor: Vector | null;
    /**
     * Width of layer in tiles
     */
    width: number;
    /**
     * Height of layer in tiles
     */
    height: number;
    /**
     * Original encoding of the Tiled layer
     */
    encoding: TiledEncoding;
    /**
     * Original compression of the Tiled layer if any
     */
    compression?: TiledCompression;
    /**
     * Original order of the Tiled layer
     */
    order: number;
    /**
     * Reference to the raw tiled layer data
     */
    rawLayer: RawTiledLayer;
    static parse(layer: RawTiledLayer): TiledLayer;
}
