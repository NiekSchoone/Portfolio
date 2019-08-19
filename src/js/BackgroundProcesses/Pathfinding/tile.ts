import vector2, { Vector2 } from '../../Utils/vector2';
import Settings from '../../Utils/settings';

export default class Tile {

  public gCost: number;
  public hCost: number;
  public parent: Tile;

  private walkable: boolean;
  private gridPosition: Vector2;

  constructor(x: number, y: number) {
    this.gCost = 0;
    this.hCost = 0;
    this.gridPosition = vector2.make(x, y);

    this.walkable = true;
  }

  public compareTo(tile: Tile) {
    let compare = this.fCost - tile.fCost;
    if (compare == 0) {
      compare = this.hCost - tile.hCost;
    } return -compare;
  }

  get GridPosition(): Vector2 { return this.gridPosition; }

  get Walkable(): boolean {
    return this.walkable;
  }
  set Walkable(value: boolean) {
    this.walkable = value;
  }

  get WorldPosition(): Vector2 {
    return vector2.make(this.gridPosition.x * Settings.tileDiameter, this.gridPosition.y * Settings.tileDiameter);
  }

  get fCost() {
    return this.gCost + this.hCost;
  }

}
