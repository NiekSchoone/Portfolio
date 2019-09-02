import { Unit } from './unit';
import { Storehouse } from './storehouse';
import { Resource } from './resource';
import vector2, { Vector2 } from '../../Utils/vector2';
import { Random } from '../../Utils/random';
import { UnitManager } from './unitManager';

export class StateMachineInstance {

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private unitManager: UnitManager;

  private resources: Array<Resource>;
  private storehouse: Storehouse;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.storehouse = new Storehouse(this.canvas.width / 2, this.canvas.height / 2);

    this.resources = new Array<Resource>();

    this.unitManager = new UnitManager(this.storehouse.position(), this.resources);

    for (let i = 0; i < this.unitAmount; i++) {
      let newResource = new Resource(this.generateResourcePosition().x, this.generateResourcePosition().y);
      this.resources.push(newResource);
      let newUnit = new Unit(this.storehouse.position().x, this.storehouse.position().y, this.storehouse, newResource);
      this.units.push(newUnit);
    }

    window.setInterval(this.update.bind(this), 100);
  }

  private generateResourcePosition(): Vector2 {
    let pos = vector2.make(Random.randomRangeInt(20, this.canvas.width - 20), Random.randomRangeInt(20, this.canvas.height - 20));
    if (vector2.distance(pos, this.storehouse.position()) < 200) {
      return this.generateResourcePosition();
    } else {
      return pos;
    }
  }

  private update() {
    for (let i = 0; i < this.units.length; i++) {
      const unit = this.units[i];
      unit.update();
    }
    this.draw();
  }

  private draw() {
    this.ctx.strokeStyle = '#20C20E';
    this.ctx.fillStyle = '#20C20E';
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.storehouse.draw(this.ctx);
    for (let i = 0; i < this.resources.length; i++) {
      const r = this.resources[i];
      r.draw(this.ctx);
    }
    for (let j = 0; j < this.units.length; j++) {
      const u = this.units[j];
      u.draw(this.ctx);
    }
  }
}
