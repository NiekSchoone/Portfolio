import vector2, { Vector2 } from '../../Utils/vector2';

export class Resource implements Vector2 {

  public x: number;
  public y: number;

  public position(): Vector2 {
    return vector2.make(this.x, this.y);
  }

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.font = '26px Inconsolata, monospace';
    ctx.fillText('$', this.x - 8, this.y + 8);
    ctx.beginPath();
    ctx.arc(this.x, this.y, 16, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
  }

}
