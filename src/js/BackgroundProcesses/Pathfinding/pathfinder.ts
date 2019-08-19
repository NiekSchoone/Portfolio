import PathRequestManager from './pathRequestManager';
import vector2, { Vector2 } from '../../Utils/vector2';
import Settings from '../../Utils/settings';

export default class Pathfinder {

  private gridPosition: Vector2;
  protected path: Vector2[];
  private target: Vector2;

  private currentPathIndex: number;

  constructor(position: Vector2) {
    this.gridPosition = position;
    this.path = [];
    this.currentPathIndex = 0;

    this.getPath(vector2.make(5, 5));
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
        return;
      }
    }
  }

  public getPath(targetPosition: Vector2) {
    PathRequestManager.Instance.requestPath(this.gridPosition, targetPosition, this.onPathFound.bind(this));
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#20C20E';
    ctx.arc(this.gridPosition.x * Settings.tileDiameter + (Settings.tileDiameter / 2), this.gridPosition.y * Settings.tileDiameter + (Settings.tileDiameter / 2), Settings.tileDiameter / 2, 0, 2 * Math.PI);
    ctx.fill();
  }
}