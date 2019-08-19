import vector2, { Vector2 } from '../../Utils/vector2';

export default class Boid {

  private canvas: HTMLCanvasElement;

  private position: Vector2;
  private velocity: Vector2;
  private accelaration: Vector2;

  private maxForce: number;
  private maxSpeed: number;

  private alignmentDistance: number;
  private separationDistance: number;
  private cohesionDistance: number;

  private angle: number;

  constructor(canvas: HTMLCanvasElement, x: number, y: number) {
    this.canvas = canvas;
    this.position = vector2.make(x, y);
    this.velocity = vector2.make(0, 0);
    this.accelaration = vector2.make(0, 0);

    this.maxForce = 0.2;
    this.maxSpeed = 6;

    this.alignmentDistance = 80;
    this.separationDistance = 30;
    this.cohesionDistance = 110;

    this.velocity.x = Math.random() * (this.maxSpeed - -this.maxSpeed) + -this.maxSpeed;
    this.velocity.y = Math.random() * (this.maxSpeed - -this.maxSpeed) + -this.maxSpeed;
  }

  public update(boids: Array<Boid>) {
    this.flock(boids);
    this.run();
    this.checkBorder();
  }

  private run() {
    this.velocity = vector2.add(this.velocity, this.accelaration);
    this.velocity = vector2.clamp(this.velocity, -this.maxSpeed, this.maxSpeed);

    this.position = vector2.add(this.position, this.velocity);

    this.accelaration = vector2.make(0, 0);

    this.angle = this.getAngle(this.velocity);
  }

  private flock(boids: Array<Boid>) {
    let align = this.allignment(boids);
    let separate = this.separation(boids);
    let cohese = this.cohesion(boids);

    separate = vector2.scale(separate, 3);
    
    this.applyForce(align);
    this.applyForce(separate);
    this.applyForce(cohese);
  }

  private getAngle(v: Vector2): number {
    let heading = vector2.make(v.x, v.y);
    heading = vector2.normalize(heading);
    return Math.atan2(heading.y, heading.x);
  }

  private applyForce(force: Vector2) {
    this.accelaration = vector2.add(this.accelaration, force);
  }

  private seek(targetVector: Vector2) {
    let desired = vector2.sub(targetVector, this.position);

    desired = vector2.normalize(desired);
    desired = vector2.scale(desired, this.maxSpeed);

    let steer = vector2.sub(desired, this.velocity);
    steer = vector2.clamp(steer, -this.maxForce, this.maxForce);
    return steer;
  }

  private allignment(boids: Array<Boid>): Vector2 {
    let alignmentVector = vector2.make(0, 0);
    let count = 0;

    for (let i = 0; i < boids.length; i++) {
      const boid = boids[i];

      let d = vector2.distance(this.position, boid.position);
      if ((d > 0) && (d < this.alignmentDistance)) {
        alignmentVector = vector2.add(alignmentVector, boid.velocity);
        count++;
      }
    }
    if (count > 0) {
      alignmentVector = vector2.divide(alignmentVector, count);

      alignmentVector = vector2.normalize(alignmentVector);
      alignmentVector = vector2.scale(alignmentVector, this.maxSpeed);
      let steer = vector2.sub(alignmentVector, this.velocity);
      steer = vector2.clamp(alignmentVector, -this.maxForce, this.maxForce);
      return steer;
    } else {
      return vector2.make(0, 0);
    }
  }

  private separation(boids: Array<Boid>): Vector2 {
    let separationVector = vector2.make(0, 0);
    let count = 0;

    for (let i = 0; i < boids.length; i++) {
      const boid = boids[i];

      let d = vector2.distance(this.position, boid.position);
      if ((d > 0) && (d < this.separationDistance)) {
        let diff = vector2.sub(this.position, boid.position);
        diff = vector2.normalize(diff);
        diff = vector2.divide(diff, d);
        separationVector = vector2.add(separationVector, diff);
        count++;
      }
    }
    if (count > 0) {
      separationVector = vector2.divide(separationVector, count);
      separationVector = vector2.normalize(separationVector);
      separationVector = vector2.scale(separationVector, this.maxSpeed);
      separationVector = vector2.sub(separationVector, this.velocity);
      separationVector = vector2.clamp(separationVector, -this.maxForce, this.maxForce);
    }
    return separationVector;
  }

  private cohesion(boids: Array<Boid>): Vector2 {
    let coheseVector = vector2.make(0, 0);
    let count = 0;

    for (let i = 0; i < boids.length; i++) {
      const boid = boids[i];

      let d = vector2.distance(this.position, boid.position);
      if ((d > 0) && (d < this.cohesionDistance)) {
        coheseVector = vector2.add(coheseVector, boid.position);
        count++;
      }
    }
    if (count > 0) {
      coheseVector = vector2.divide(coheseVector, count);
      return this.seek(coheseVector);
    } else {
      return vector2.make(0, 0);
    }
  }

  private checkBorder() {
    let width = this.canvas.width;
    let height = this.canvas.height;
    if (this.position.x < -10) this.position.x = width + 2;
    if (this.position.y < -10) this.position.y = height + 2;
    if (this.position.x > width + 30) this.position.x = -10;
    if (this.position.y > height + 30) this.position.y = -10;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = '#20C20E';
    ctx.beginPath();
    ctx.moveTo(this.position.x, this.position.y);
    ctx.lineTo(this.position.x + 30 * Math.cos(this.angle + 10), this.position.y + 30 * Math.sin(this.angle + 10));
    ctx.lineTo(this.position.x + 30 * Math.cos(this.angle + -10), this.position.y + 30 * Math.sin(this.angle + -10));
    ctx.closePath();
    ctx.stroke();
  }

}
