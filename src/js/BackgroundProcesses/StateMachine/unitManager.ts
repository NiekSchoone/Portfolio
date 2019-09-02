import { Unit } from './unit';
import { Vector2 } from '../../Utils/vector2';
import { Resource } from './resource';

export class UnitManager {

  private units: Array<Unit>;
  private startPosition: Vector2;

  constructor(startPos: Vector2, resources: Array<Resource>) {
    this.units = new Array<Unit>();
    this.createUnits(50);
  }

  private createUnits(amt: number) {
    for (let i = 0; i < amt; i++) {
      let newUnit = new Unit(this.startPosition.x, this.startPosition.y);
      this.boids.push(newBoid);
    }
  }

  private update() {
    for (let i = 0; i < this.boids.length; i++) {
      this.boids[i].update(this.boids);
    }
    this.draw();
  }

  private draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.boids.length; i++) {
      this.boids[i].draw(this.ctx);
    }
  }
}
