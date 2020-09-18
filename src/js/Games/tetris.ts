class Coordinates {
  public x: number;
  public y: number;

  constructor(_x: number, _y: number) {
    this.x = _x;
    this.y = _y;
  }
}

enum Direction {
  IDLE,
  DOWN,
  LEFT,
  RIGHT
}

enum Tetronimo {
  T,
  I,
  SQUARE,
  J,
  L,
  S,
  Z
}

export default class Tetris {
  private container: HTMLElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private gridHeight: number;
  private gridWidth: number;
  private tileDiameter: number;

  private direction: Direction;

  private score: number;
  private level: number;

  private interval: number;

  private moveDownIterationsLength: number;
  private moveDownIterations: number;

  private currentTetronimo: Array<Coordinates>;
  private currentTetronimoType: Tetronimo;
  private currentRotationShape: Array<Coordinates>;

  private placedTetronimos: Array<Coordinates>;

  constructor () {
    this.container = document.getElementById('game-container');
    this.canvas = document.getElementById('game-stage') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');

    this.gridHeight = 20;
    this.gridWidth = 12;
    this.tileDiameter = 20;
    this.placedTetronimos = new Array<Coordinates>();

    this.canvas.height = this.gridHeight * this.tileDiameter;
    this.canvas.width = this.gridWidth * this.tileDiameter;

    this.canvas.addEventListener('keydown', this.handleUserInput.bind(this));
    this.start();
  }

  private start () {
    this.score = 0;
    this.moveDownIterationsLength = 8;
    this.moveDownIterations = 0;

    this.currentTetronimoType = Tetronimo.I;
    this.currentTetronimo = this.getTetronimo(this.currentTetronimoType);
    this.currentRotationShape = this.getTetronimo(this.currentTetronimoType);

    this.moveTetronimoX(5);

    this.canvas.focus();
    this.interval = setInterval(this.update.bind(this), 100);
  }

  private end () {
    clearInterval(this.interval);
  }

  private update (): void {
    this.moveTetronimo();
    this.placementCollision();
    this.horizontalCollision();
    this.draw();
  }

  private handleUserInput (e: KeyboardEvent): void {
    let key = e.keyCode;
    switch (key) {
      case 37: // LEFT KEY
        this.direction = Direction.LEFT;
        break;
      case 39: // RIGHT KEY
        this.direction = Direction.RIGHT;
        break;
      case 40: // DOWN KEY
        this.direction = Direction.DOWN;
        break;
      case 32: // SPACEBAR KEY
        this.rotateTetronimo();
        break;
      default:
        this.direction = Direction.IDLE;
        break;
    }
  }

  private moveTetronimo () {

    if (this.direction === Direction.RIGHT) {
      this.moveTetronimoX(1);
    } else if (this.direction === Direction.LEFT) {
      this.moveTetronimoX(-1);
    }

    this.moveDownIterations++;

    if (this.direction === Direction.DOWN) {
      this.moveDownIterations = this.moveDownIterationsLength;
    }

    if (this.shouldMoveDown()) {
      this.moveTetronimoY(1);
      this.moveDownIterations = 0;
    }

    this.direction = Direction.IDLE;
  }

  private shouldMoveDown (): boolean {
    return this.moveDownIterations >= this.moveDownIterationsLength;
  }
  private moveTetronimoX (amount: number): void {
    for (let i = 0; i < this.currentTetronimo.length; i++) {
      let tetronimoBlock = this.currentTetronimo[i];
      tetronimoBlock.x += amount;
    }
  }
  private moveTetronimoY (amount: number): void {
    for (let i = 0; i < this.currentTetronimo.length; i++) {
      let tetronimoBlock = this.currentTetronimo[i];
      tetronimoBlock.y += amount;
    }
  }

  private rotateTetronimo () {
    if (this.currentTetronimoType === Tetronimo.SQUARE) {
      return;
    }

    let rotatedCoords = new Array<Coordinates>();

    for (let i = 0; i < this.currentTetronimo.length; i++) {
      let current = this.currentRotationShape[i];
      current.y *= -1;

      rotatedCoords[i] = new Coordinates(0, 0);

      rotatedCoords[i].x = Math.round(current.x * Math.cos(Math.PI / 2) - current.y * Math.sin(Math.PI / 2));
      rotatedCoords[i].y = Math.round(current.x * Math.sin(Math.PI / 2) + current.y * Math.cos(Math.PI / 2));

      rotatedCoords[i].y *= -1;

      this.currentTetronimo[i].x = (rotatedCoords[i].x + this.currentTetronimo[0].x);
      this.currentTetronimo[i].y = (rotatedCoords[i].y + this.currentTetronimo[0].y);
    }

    this.currentRotationShape = rotatedCoords;
  }

  private getTetronimo (type: Tetronimo): Array<Coordinates> {
    switch (type) {
      case Tetronimo.T:
        return new Array(new Coordinates(0, 0), new Coordinates(-1, 0), new Coordinates(0, -1), new Coordinates(1, 0));
      case Tetronimo.I:
        return new Array(new Coordinates(0, 0), new Coordinates(-2, 0), new Coordinates(-1, 0), new Coordinates(1, 0));
      case Tetronimo.SQUARE:
        return new Array(new Coordinates(0, 0), new Coordinates(1, 0), new Coordinates(0, 1), new Coordinates(1, 1));
      case Tetronimo.J:
        return new Array(new Coordinates(0, 0), new Coordinates(-1, 0), new Coordinates(1, 0), new Coordinates(1, 1));
      case Tetronimo.L:
        return new Array(new Coordinates(0, 0), new Coordinates(-1, 0), new Coordinates(1, 0), new Coordinates(1, -1));
      case Tetronimo.S:
        return new Array(new Coordinates(0, 0), new Coordinates(1, 0), new Coordinates(0, 1), new Coordinates(-1, 1));
      case Tetronimo.Z:
        return new Array(new Coordinates(0, 0), new Coordinates(-1, 0), new Coordinates(0, 1), new Coordinates(1, 1));
      default:
        console.warn('tetronimo of type: ' + type + ' not found');
        break;
    }
  }

  private setNewCurrentTetronimo (type: Tetronimo) {
    this.currentTetronimoType = type;
    this.currentTetronimo = this.getTetronimo(this.currentTetronimoType);
    this.currentRotationShape = this.getTetronimo(this.currentTetronimoType);
    this.moveTetronimoX(5);
  }

  private horizontalCollision () {
    for (let i = 0; i < this.currentTetronimo.length; i++) {
      const currentBlock = this.currentTetronimo[i];
      if (currentBlock.x >= this.gridWidth) {
        this.moveTetronimoX(-1);
      }
      if (currentBlock.x < 0) {
        this.moveTetronimoX(1);
      }
    }
  }

  private placementCollision () {
    let placementHappened = false;
    for (let i = 0; i < this.currentTetronimo.length; i++) {
      const currentBlock = this.currentTetronimo[i];
      if (currentBlock.y === this.gridHeight) {
        placementHappened = true;
        if (currentBlock.y <= this.gridHeight) {
          this.moveTetronimoY(-1);
        }
      }
      if (!placementHappened) {
        for (let i = 0; i < this.placedTetronimos.length; i++) {
          const placed = this.placedTetronimos[i];
          if (currentBlock.y === placed.y && currentBlock.x === placed.x) {
            placementHappened = true;
            if (currentBlock.y <= placed.y) {
              this.moveTetronimoY(-1);
            }
          }
        }
      }
    }

    if (placementHappened) {
      this.placedTetronimos = this.placedTetronimos.concat(this.currentTetronimo);
      this.setNewCurrentTetronimo(Tetronimo.I);
    }
  }

  private draw () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = '#20C20E';

    for (let i = 0; i < this.currentTetronimo.length; i++) {
      let t = this.currentTetronimo[i];
      this.ctx.fillRect((t.x * this.tileDiameter) + 1, (t.y * this.tileDiameter) + 1, this.tileDiameter - 1, this.tileDiameter - 1);
    }
    for (let j = 0; j < this.placedTetronimos.length; j++) {
      let p = this.placedTetronimos[j];

      this.ctx.fillRect((p.x * this.tileDiameter) + 1, (p.y * this.tileDiameter) + 1, this.tileDiameter - 1, this.tileDiameter - 1);
    }
  }
}
