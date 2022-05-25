import { TiledProperty } from "./tiled-types";
/**
 * Get tile entry property by property name
 * @param properties
 * @param prop
 * @returns
 */
export declare const getProperty: <T = unknown>(properties: TiledProperty[], prop: string) => TiledProperty<T> | undefined;
export declare class TiledEntity {
    id: number;
    name?: string;
    properties: TiledProperty[];
    getProperty<T = unknown>(prop: string): TiledProperty<T> | undefined;
}
