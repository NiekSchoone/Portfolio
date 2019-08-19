import Grid from './grid';
import Pathfinder from './pathfinder';
import vector2 from '../../Utils/vector2';
import Pathfinding from './pathfinding';

export class PathfindingInstance {

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private grid: Grid;
  private pathfinder: Pathfinder;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.grid = new Grid();
    this.grid.draw(this.ctx);

    let pathfinding = new Pathfinding(this.grid);

    this.pathfinder = new Pathfinder(vector2.make(1, 1));
    this.pathfinder.draw(this.ctx);

    setInterval(this.update.bind(this), 500);
  }

  private update() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();
    this.pathfinder.followPath();
    this.grid.draw(this.ctx);
    this.pathfinder.draw(this.ctx);
  }
}
