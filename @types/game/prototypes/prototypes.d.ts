declare module "game/prototypes" {
  export interface _Constructor<T> {
    readonly prototype: T;
  }

  export interface RoomPosition {
    /**
     * X position in the room.
     */
    x: number | undefined;
    /**
     * Y position in the room.
     */
    y: number | undefined;
  }
}
