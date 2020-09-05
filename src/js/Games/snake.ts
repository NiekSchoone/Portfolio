export default class Snake {
  private container: HTMLElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private button: HTMLInputElement;
  private message: HTMLSpanElement;
  private scoreCounter: HTMLSpanElement;

  private snake: { x: number, y: number }[];
  private food: { x: number, y: number };
  private direction: Direction;

  private dx: number;
  private dy: number;
  private score: number;
  private interval: number;
  private tileDiameter: number;
  private directionChanged: boolean;

  constructor () {
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

    this.canvas.addEventListener('keydown', this.changeDirection.bind(this));
    this.button.addEventListener('click', this.start.bind(this));
  }

  private start () {
    this.button.style.display = 'none';
    this.message.style.display = 'none';

    this.score = 0;
    this.scoreCounter.innerHTML = 'Score: ' + this.score;

    this.snake = [
      { x: 10, y: 5 },
      { x: 10, y: 4 },
      { x: 10, y: 3 },
      { x: 10, y: 2 }
    ];

    this.food = {
      x: Math.floor(Math.random() * 19),
      y: Math.floor(Math.random() * 19)
    }
    this.direction = Direction.DOWN;

    this.canvas.focus();
    this.interval = setInterval(this.update.bind(this), 100);
  }

  private end() {
    clearInterval(this.interval);
    this.dx = 0;
    this.dy = 0;
    this.snake = [];
    this.food = { x: -1, y: -1 };
    this.button.value = 'RESTART';
    this.button.style.display = 'block';
    this.message.style.display = 'block';
    this.message.innerHTML = 'Game over </br> Final score: ' + this.score;
  }

  private update () {
    this.directionChanged = false;

    switch(this.direction) {
      case Direction.LEFT:
        this.dx = -1;
        this.dy = 0;
        break;
      case Direction.UP:
        this.dx = 0;
        this.dy = -1;
        break;
      case Direction.RIGHT:
        this.dx = 1;
        this.dy = 0;
        break;
      case Direction.DOWN:
        this.dx = 0;
        this.dy = 1;
        break;
    }

    if (this.collision()) {
      this.end();
    }

    if (this.dx !== 0 || this.dy !== 0) {
      this.move();
    }

    this.draw();
  }

  private changeDirection (e: KeyboardEvent) {
    console.log('direction change?')
    if (!this.directionChanged) {
      this.directionChanged = true;
      let key = e.keyCode;
      if (key == 37 && this.direction != Direction.RIGHT) {
        this.direction = Direction.LEFT;
      } else if (key == 38 && this.direction != Direction.DOWN) {
        this.direction = Direction.UP;
      } else if (key == 39 && this.direction != Direction.LEFT) {
        this.direction = Direction.RIGHT;
      } else if (key == 40 && this.direction != Direction.UP) {
        this.direction = Direction.DOWN;
      }
    }
  }

  private move () {
    let head = { x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy };
    this.snake.unshift(head);
    if (head.x === this.food.x && head.y == this.food.y) {
      this.eat();
    } else {
      this.snake.pop();
    }
  }

  private collision () {
    let result = false;

    for (let i = 1; i < this.snake.length; i++) {
      if(this.snake[i].x === this.snake[0].x && this.snake[i].y === this.snake[0].y) {
        return true;
      }
    }
    if (this.snake[0].x >= 20 || this.snake[0].x < 0 || this.snake[0].y >= 20 || this.snake[0].y < 0) {
      result = true;
    }
    return result;
  }

  private eat () {
    this.food.x = Math.floor(Math.random() * 19);
    this.food.y = Math.floor(Math.random() * 19);
    this.score += 10;
    this.scoreCounter.innerHTML = 'Score: ' + this.score;
  }

  private draw () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.snake.length; i++) {
      this.ctx.fillStyle = "#20C20E";
      this.ctx.fillRect(this.snake[i].x * this.tileDiameter, this.snake[i].y * this.tileDiameter, this.tileDiameter, this.tileDiameter);


      this.ctx.strokeStyle = "black";
      this.ctx.strokeRect(this.snake[i].x * this.tileDiameter, this.snake[i].y * this.tileDiameter, this.tileDiameter, this.tileDiameter);
    }

    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.food.x * this.tileDiameter, this.food.y * this.tileDiameter, this.tileDiameter, this.tileDiameter);
  }

}

enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT
}
