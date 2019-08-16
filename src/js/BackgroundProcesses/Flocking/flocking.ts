import Boid from './boid';

export class Flock {
  private boids: Array<Boid>;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.boids = new Array<Boid>();
    this.createBoids(50);
    setInterval(this.update.bind(this), 60);
  }

  private createBoids(amt: number) {
    for (let i = 0; i < amt; i++) {
      let newBoid = new Boid(this.canvas, 300, 300);
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
