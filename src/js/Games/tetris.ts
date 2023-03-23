class Block {
  public x: number;
  public y: number;
  public occupied: boolean;

  constructor(_x: number, _y: number) {
    this.x = _x;
    this.y = _y;
  }
}

export default class Tetris {
  private container: HTMLElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private Tetrominos: Block[][][] = [
    [
      // I-Piece
      [new Block(0, 1), new Block(1, 1), new Block(2, 1), new Block(3, 1)],
      [new Block(1, 0), new Block(1, 1), new Block(1, 2), new Block(1, 3)],
      [new Block(0, 1), new Block(1, 1), new Block(2, 1), new Block(3, 1)],
      [new Block(1, 0), new Block(1, 1), new Block(1, 2), new Block(1, 3)],
    ],
    [
      // J-Piece
      [new Block(0, 1), new Block(1, 1), new Block(2, 1), new Block(2, 0)],
      [new Block(1, 0), new Block(1, 1), new Block(1, 2), new Block(2, 2)],
      [new Block(0, 1), new Block(1, 1), new Block(2, 1), new Block(0, 2)],
      [new Block(1, 0), new Block(1, 1), new Block(1, 2), new Block(0, 0)],
    ],
    [
      // L-Piece
      [new Block(0, 1), new Block(1, 1), new Block(2, 1), new Block(2, 2)],
      [new Block(1, 0), new Block(1, 1), new Block(1, 2), new Block(0, 2)],
      [new Block(0, 1), new Block(1, 1), new Block(2, 1), new Block(0, 0)],
      [new Block(1, 0), new Block(1, 1), new Block(1, 2), new Block(2, 0)],
    ],
    [
      // O-Piece
      [new Block(0, 0), new Block(0, 1), new Block(1, 0), new Block(1, 1)],
      [new Block(0, 0), new Block(0, 1), new Block(1, 0), new Block(1, 1)],
      [new Block(0, 0), new Block(0, 1), new Block(1, 0), new Block(1, 1)],
      [new Block(0, 0), new Block(0, 1), new Block(1, 0), new Block(1, 1)],
    ],
    [
      // S-Piece
      [new Block(1, 0), new Block(2, 0), new Block(0, 1), new Block(1, 1)],
      [new Block(0, 0), new Block(0, 1), new Block(1, 1), new Block(1, 2)],
      [new Block(1, 0), new Block(2, 0), new Block(0, 1), new Block(1, 1)],
      [new Block(0, 0), new Block(0, 1), new Block(1, 1), new Block(1, 2)],
    ],
    [
      // T-Piece
      [new Block(1, 0), new Block(0, 1), new Block(1, 1), new Block(2, 1)],
      [new Block(1, 0), new Block(0, 1), new Block(1, 1), new Block(1, 2)],
      [new Block(0, 1), new Block(1, 1), new Block(2, 1), new Block(1, 2)],
      [new Block(1, 0), new Block(1, 1), new Block(2, 1), new Block(1, 2)],
    ],
    [
      // Z-Piece
      [new Block(0, 0), new Block(1, 0), new Block(1, 1), new Block(2, 1)],
      [new Block(1, 0), new Block(0, 1), new Block(1, 1), new Block(0, 2)],
      [new Block(0, 0), new Block(1, 0), new Block(1, 1), new Block(2, 1)],
      [new Block(1, 0), new Block(0, 1), new Block(1, 1), new Block(0, 2)],
    ],
  ];

  private pieceOrigin: Block;
  private currentPiece: number;
  private rotation: number;
  private nextPieces: Array<number>;

  private score: number;

  private tileDiameter: number;
  private gridWidth: number;
  private gridHeight: number;
  private grid: Block[][];

  private drawInterval: NodeJS.Timer;
  private dropdownInterval: NodeJS.Timer;

  constructor() {
    this.container = document.getElementById("game-container");
    this.canvas = document.getElementById("game-stage") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d");

    this.gridHeight = 20;
    this.gridWidth = 12;
    this.tileDiameter = 20;

    this.canvas.height = this.gridHeight * this.tileDiameter;
    this.canvas.width = this.gridWidth * this.tileDiameter;

    this.canvas.addEventListener("keydown", this.handleUserInput.bind(this));

    this.start();
  }

  private generateGrid(): void {
    this.grid = [];
    for (let x = 0; x < this.gridWidth; x++) {
      this.grid[x] = new Array<Block>();
      for (let y = 0; y < this.gridHeight; y++) {
        this.grid[x][y] = new Block(x, y);
      }
    }
  }

  private start(): void {
    this.generateGrid();
    this.newPiece();

    this.dropdownInterval = setInterval(this.dropDown.bind(this), 500);
    this.drawInterval = setInterval(this.draw.bind(this), 100);
  }

  public newPiece(): void {
    this.pieceOrigin = new Block(5, 0);
    this.rotation = 0;
    this.currentPiece = Math.floor(Math.random() * this.Tetrominos.length);
  }

  private collidesAt(x: number, y: number, rotation: number): boolean {
    for (
      let i = 0;
      i < this.Tetrominos[this.currentPiece][rotation].length;
      i++
    ) {
      let currentBlock = this.Tetrominos[this.currentPiece][rotation][i];
      if (this.grid[currentBlock.x + x][currentBlock.y + y]) {
        if (this.grid[currentBlock.x + x][currentBlock.y + y].occupied) {
          return true;
        }
      } else {
        return true;
      }
    }
    return false;
  }

  public rotate(i: number): void {
    let newRotation = (this.rotation + i) % 4;
    if (newRotation < 0) {
      newRotation = 3;
    }
    if (!this.collidesAt(this.pieceOrigin.x, this.pieceOrigin.y, newRotation)) {
      this.rotation = newRotation;
    }
  }

  public moveTetrominoX(i: number): void {
    if (
      !this.collidesAt(
        this.pieceOrigin.x + i,
        this.pieceOrigin.y,
        this.rotation
      )
    ) {
      this.pieceOrigin.x += i;
    }
  }

  public dropDown(): void {
    if (
      !this.collidesAt(
        this.pieceOrigin.x,
        this.pieceOrigin.y + 1,
        this.rotation
      )
    ) {
      this.pieceOrigin.y += 1;
    } else {
      this.fixToGrid();
    }
  }

  public fixToGrid(): void {
    for (
      let i = 0;
      i < this.Tetrominos[this.currentPiece][this.rotation].length;
      i++
    ) {
      let currentBlock = this.Tetrominos[this.currentPiece][this.rotation][i];
      this.grid[this.pieceOrigin.x + currentBlock.x][
        this.pieceOrigin.y + currentBlock.y
      ].occupied = true;
    }
    this.clearRows();
    this.newPiece();
  }

  public deleteRow(row: number): void {
    for (let y = row - 1; y > 0; y--) {
      for (let x = 0; x < this.gridWidth; x++) {
        this.grid[x][y + 1].occupied = this.grid[x][y].occupied;
      }
    }
  }

  // Clear completed rows from the field and award score according to
  // the number of simultaneously cleared rows.
  public clearRows(): void {
    let fullRow: boolean;
    let numClears: number = 0;

    for (let i = this.gridHeight - 1; i > 0; i--) {
      fullRow = true;
      for (let j = 0; j < this.gridWidth; j++) {
        if (!this.grid[j][i].occupied) {
          fullRow = false;
          break;
        }
      }
      if (fullRow) {
        this.deleteRow(i);
        i += 1;
        numClears += 1;
      }
    }

    switch (numClears) {
      case 1:
        this.score += 100;
        break;
      case 2:
        this.score += 300;
        break;
      case 3:
        this.score += 500;
        break;
      case 4:
        this.score += 800;
        break;
    }
  }

  private draw(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "#20C20E";

    for (
      let i = 0;
      i < this.Tetrominos[this.currentPiece][this.rotation].length;
      i++
    ) {
      let currentBlock = this.Tetrominos[this.currentPiece][this.rotation][i];
      this.ctx.fillRect(
        (currentBlock.x + this.pieceOrigin.x) * this.tileDiameter + 1,
        (currentBlock.y + this.pieceOrigin.y) * this.tileDiameter + 1,
        this.tileDiameter - 1,
        this.tileDiameter - 1
      );
    }

    for (let x = 0; x < this.gridWidth; x++) {
      for (let y = 0; y < this.gridHeight; y++) {
        const currentBlock = this.grid[x][y];
        if (currentBlock.occupied) {
          this.ctx.fillRect(
            currentBlock.x * this.tileDiameter + 1,
            currentBlock.y * this.tileDiameter + 1,
            this.tileDiameter - 1,
            this.tileDiameter - 1
          );
        }
      }
    }
  }

  private handleUserInput(e: KeyboardEvent): void {
    let key = e.keyCode;
    switch (key) {
      case 37: // LEFT KEY
        this.moveTetrominoX(-1);
        break;
      case 39: // RIGHT KEY
        this.moveTetrominoX(+1);
        break;
      case 40: // DOWN KEY
        this.dropDown();
        break;
      case 32: // SPACEBAR KEY
        this.rotate(+1);
        break;
      default:
        break;
    }
  }
}
