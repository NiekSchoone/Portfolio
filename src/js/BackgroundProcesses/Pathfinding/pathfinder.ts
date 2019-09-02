import PathRequestManager from './pathRequestManager';
import vector2, { Vector2 } from '../../Utils/vector2';
import Grid from './grid';

export default class Pathfinder {

  private gridPosition: Vector2;
  protected path: Vector2[];
  private target: Vector2;

  private currentPathIndex: number;

  private grid: Grid;

  constructor(position: Vector2, grid: Grid) {
    this.gridPosition = position;
    this.grid = grid;
    this.path = [];
    this.currentPathIndex = 0;
    this.getPath(this.getRandomInGrid());
  }

  public onPathFound(path: Vector2[], pathSuccess: boolean) {
    if (pathSuccess) {
      this.path = path;
    }
  }

  public followPath() {
    if (this.path.length > 0) {
      if (this.currentPathIndex < this.path.length) {
        this.target = this.path[this.currentPathIndex];
        this.gridPosition = this.target;
        this.currentPathIndex++;
      } else {
        this.path = [];
        this.currentPathIndex = 0;
        this.getPath(this.getRandomInGrid());
        return;
      }
    }
  }

  public getPath(targetPosition: Vector2) {
    PathRequestManager.Instance.requestPath(this.gridPosition, targetPosition, this.onPathFound.bind(this));
  }

  private getRandomInGrid() {
    let r = vector2.make(Math.floor(Math.random() * this.grid.width), Math.floor(Math.random() * (this.grid.height - 1)));
    if (this.gridPosition.x == r.x && this.gridPosition.y == r.y) {
      return this.getRandomInGrid();
    } else {
      return r;
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    if (this.path) {
      for (let i = 0; i < this.path.length; i++) {
        const p = this.path[i];
        ctx.fillStyle = 'rgba(32, 194, 14, 0.3)';
        ctx.fillRect(this.path[i].x * this.grid.tileDiameter, this.path[i].y * this.grid.tileDiameter, this.grid.tileDiameter, this.grid.tileDiameter);
      }
    }
    ctx.fillStyle = '#20C20E';
    ctx.arc(this.gridPosition.x * this.grid.tileDiameter + (this.grid.tileDiameter / 2), this.gridPosition.y * this.grid.tileDiameter + (this.grid.tileDiameter / 2), this.grid.tileDiameter / 2, 0, 2 * Math.PI);
    ctx.fill();
  }
}