import vector2, { Vector2 } from '../../Utils/vector2';

export default class Tile {

  public gCost: number;
  public hCost: number;
  public parent: Tile;

  private walkable: boolean;
  private gridPosition: Vector2;
  private diameter: number;

  constructor(x: number, y: number, td: number) {
    this.gCost = 0;
    this.hCost = 0;
    this.gridPosition = vector2.make(x, y);
    this.diameter = td;

    this.walkable = true;
  }

  get GridPosition(): Vector2 { return this.gridPosition; }

  get Walkable(): boolean {
    return this.walkable;
  }
  set Walkable(value: boolean) {
    this.walkable = value;
  }

  get WorldPosition(): Vector2 {
    return vector2.make(this.gridPosition.x * this.diameter, this.gridPosition.y * this.diameter);
  }

  get fCost() {
    return this.gCost + this.hCost;
  }

}
