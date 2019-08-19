import Grid from './grid';
import Tile from './tile';
import PathRequestManager from './pathRequestManager';
import { Vector2 } from '../../Utils/vector2';

export default class Pathfinding {
  
  private grid: Grid;

  constructor(grid: Grid) {
    this.grid = grid;
    PathRequestManager.Instance.Pathfinder = this;
  }

  public findPath(startPosition: Vector2, targetPosition: Vector2): void {
    let start = this.grid.getTile(startPosition.x, startPosition.y);
    let end = this.grid.getTile(targetPosition.x, targetPosition.y);

    let path: Vector2[] = [];
    let pathFound = false;

    let openSet: Tile[] = [];
    let closedSet: Tile[] = [];

    openSet.push(start);

    while(openSet.length > 0) {
      let currentTile = openSet[0];

      for (let i = 1; i < openSet.length; i++) {
        if(openSet[i].fCost < currentTile.fCost || openSet[i].fCost == currentTile.fCost && openSet[i].hCost < currentTile.hCost) {
          currentTile = openSet[i];
        }
      }

      openSet.splice(openSet.indexOf(currentTile), 1);
      closedSet.push(currentTile);

      if (currentTile == end) {
        pathFound = true;
        break;
      }

      let neighbours = this.grid.getNeighbours(currentTile);

      for (let i = 0; i < neighbours.length; i++) {
        let neighbour = neighbours[i];

        if (!neighbour.Walkable || closedSet.indexOf(neighbour) > 0) {
          continue;
        }

        let newMovementCost = currentTile.gCost + this.getDistance(currentTile, neighbour);
        if (newMovementCost < neighbour.gCost || !(openSet.indexOf(neighbour) > 0)) {
          neighbour.gCost = newMovementCost;
          neighbour.hCost = this.getDistance(neighbour, end);
          neighbour.parent = currentTile;

          if (!(openSet.indexOf(neighbour) > 0)) {
            openSet.push(neighbour);
          }
        }
      }
    }
    if (pathFound) {
      path = this.retracePath(start, end);
    }
    PathRequestManager.Instance.FinishedProcessingPath(path, pathFound);
  }

  private retracePath(startTile: Tile, targetTile: Tile): Vector2[] {
    let path: Tile[] = [];
    let waypoints: Vector2[] = [];
    let currentTile = targetTile;

    while (currentTile != startTile) {
      path.push(currentTile);
      waypoints.push(currentTile.GridPosition);
      currentTile = currentTile.parent;
    }
    waypoints.reverse();

    return waypoints;
  }

  private getDistance(tileA: Tile, tileB: Tile): number {
    let distX = Math.abs(tileA.GridPosition.x - tileB.GridPosition.x);
    let distY = Math.abs(tileA.GridPosition.y - tileB.GridPosition.y);
    if (distX > distY) {
      return 14 * distY + 10 * (distX - distY);
    } else {
      return 14 * distX + 10 * (distY - distX);
    }
  }
}
