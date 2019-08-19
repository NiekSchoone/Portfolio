import Settings from "./settings";
import vector2, { Vector2 } from "./vector2";

export default class GridUtils {

  public static inGridBounds(x: number, y: number): boolean {
    if (x < Settings.gridWidth && y < Settings.gridHeight && x >= 0 && y >= 0) {
      return true;
    } return false;
  }

  public static getAdjacentGridPoints(tile: Vector2): Vector2[] {
    let neighbours: Vector2[] = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (x == 0 && y == 0) { continue; }
        let cX = tile.x + x;
        let cY = tile.x + y;
        if (GridUtils.inGridBounds(cX, cY)) {
          let neighbour = vector2.make(cX, cY);
          neighbours.push(neighbour);
        }
      }
    } return neighbours;
  }

  public static inWorldBounds(x: number, y: number): boolean {
    if (x < Settings.gridWidth * 64 && y < Settings.gridHeight * 64 && x >= 0 && y >= 0) {
      return true;
    } return false;
  }

}