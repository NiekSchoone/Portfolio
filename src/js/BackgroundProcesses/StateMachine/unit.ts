import { StackFSM } from './fsm';
import vector2, { Vector2 } from '../../Utils/vector2';

export class Unit {

  private brain: StackFSM;

  private position: Vector2;
  private velocity: Vector2;
  private angle: number;

  private target: Vector2;

  private resourceDepot: Vector2;
  private gatheringTarget: Vector2;
  private gatheredResources: number;

  constructor(x, y, store, gather) {
    this.brain = new StackFSM();

    this.position = vector2.make(x, y);

    this.resourceDepot = store.position();
    this.gatheringTarget = gather.position();
    this.gatheredResources = 0;

    this.brain.pushState(this.gatheringState.bind(this));

  }

  private getAngle(v: Vector2): number {
    let heading = vector2.make(v.x, v.y);
    heading = vector2.normalize(heading);
    return Math.atan2(heading.y, heading.x);
  }

  private inPosition(): boolean {
    if (vector2.distance(this.position, this.target) < 10) {
      return true;
    } else {
      return false;
    }
  }

  public update() {
    this.brain.update();

  }

  private idleState() {
    
  }

  private walkingState() {
    this.velocity = vector2.ray(this.position, this.target);
    this.velocity = vector2.scale(this.velocity, 5);
    this.position = vector2.add(this.position, this.velocity);
    this.angle = this.getAngle(this.velocity);
    if (this.inPosition()) {
      this.brain.popState();
    }
  }

  private depositState() {
    this.target = this.resourceDepot;
    if (!this.inPosition()) {
      this.brain.pushState(this.walkingState.bind(this));
      return;
    }
    this.gatheredResources = 0;
    this.brain.popState();
  }

  private gatheringState() {
    this.target = this.gatheringTarget;

    if (!this.inPosition()) {
      this.brain.pushState(this.walkingState.bind(this));
      return;
    }

    if (this.gatheredResources < 100) {
      this.gatheredResources++;
    } else {
      this.brain.pushState(this.depositState.bind(this));
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(this.position.x, this.position.y);
    ctx.lineTo(this.position.x + 30 * Math.cos(this.angle + 10), this.position.y + 30 * Math.sin(this.angle + 10));
    ctx.lineTo(this.position.x + 30 * Math.cos(this.angle + -10), this.position.y + 30 * Math.sin(this.angle + -10));
    ctx.closePath();
    ctx.stroke();
  }

}
