import { Flock } from './BackgroundProcesses/Flocking/flocking';
import { Pathfinding } from './BackgroundProcesses/Pathfinding/pathfinding';
import { StateMachine } from './BackgroundProcesses/StateMachine/statemachine';

export class BGCanvas<T> {

  private canvas: HTMLCanvasElement;
  private parent: HTMLElement;
  private content: T;

  constructor(id: string, process: (new (cv: HTMLCanvasElement) => T)) {
    this.canvas = document.getElementById(id) as HTMLCanvasElement;
    this.parent = this.canvas.parentElement;
    this.resizeCanvas();

    this.content = new process(this.canvas);

    window.addEventListener('resize', this.resizeCanvas.bind(this));
  }

  public create<T>(type: (new (cv: HTMLCanvasElement) => T)) {
    return new type(this.canvas);
  }

  private resizeCanvas () {
    this.canvas.width = this.parent.offsetWidth;
    this.canvas.height = this.parent.offsetHeight;
  }
}

let flocking = new BGCanvas('flocking-stage', Flock);
let pathfinding = new BGCanvas('pathfinding-stage', Pathfinding);
let statemachine = new BGCanvas('statemachine-stage', StateMachine);
