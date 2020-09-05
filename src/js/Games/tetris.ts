export default class Tetris {
  private container: HTMLElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private button: HTMLInputElement;
  private message: HTMLSpanElement;
  private scoreCounter: HTMLSpanElement;

  private direction: Direction;

  private dx: number;
  private dy: number;
  private score: number;
  private interval: number;
  private tileDiameter: number;
  private directionChanged: boolean;

  constructor() {
    this.container = document.getElementById('game-container');
    this.container.style.display = 'flex';
    this.canvas = document.getElementById('stage') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');

    this.button = document.getElementById('game-btn') as HTMLInputElement;
    this.message = document.getElementById('game-msg') as HTMLSpanElement;
    this.scoreCounter = document.getElementById('score-counter') as HTMLSpanElement;

    this.dx = 0;
    this.dy = 0;
    this.tileDiameter = 16;
    this.score = 0;

    this.canvas.addEventListener('keydown', this.handleUserInput.bind(this));
    this.button.addEventListener('click', this.start.bind(this));
  }

  private start () {
    this.button.style.display = 'none';
    this.message.style.display = 'none';

    this.score = 0;
    this.scoreCounter.innerHTML = 'Score: ' + this.score;

    this.canvas.focus();
    this.interval = setInterval(this.update.bind(this), 100);
  }

  private end () {
    clearInterval(this.interval);
    this.dx = 0;
    this.dy = 0;
    this.button.value = 'RESTART';
    this.button.style.display = 'block';
    this.message.style.display = 'block';
    this.message.innerHTML = 'Game over </br> Final score: ' + this.score;
  }

  private update() {
    this.directionChanged = false;

    if (this.collision()) {
      this.end();
    }

    this.draw();
  }

  private handleUserInput () {

  }

  private collision () {
    let result = false;

    /*for (let i = 1; i < this.snake.length; i++) {
      if (this.snake[i].x === this.snake[0].x && this.snake[i].y === this.snake[0].y) {
        return true;
      }
    }
    if (this.snake[0].x >= 20 || this.snake[0].x < 0 || this.snake[0].y >= 20 || this.snake[0].y < 0) {
      result = true;
    }*/
    return result;
  }

  private draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

}

enum Direction {
  LEFT,
  RIGHT
}
