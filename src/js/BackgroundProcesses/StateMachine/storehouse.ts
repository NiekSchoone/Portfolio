import vector2, { Vector2 } from '../../Utils/vector2';

export class Storehouse implements Vector2 {

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
    ctx.beginPath();
    ctx.rect(this.x - 25, this.y - 25, 50, 50);
    ctx.closePath();
    ctx.stroke();
  }

}
