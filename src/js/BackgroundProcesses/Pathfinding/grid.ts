import Tile from './tile';

export default class Grid {

  private map: Tile[][];
  public width: number;
  public height: number;
  public tileDiameter: number;
  public tileAmount: number;

  constructor(w: number, h: number, td: number) {
    this.width = w;
    this.height = h;
    this.tileDiameter = td;
    this.tileAmount = 0;

    this.generateGrid();
  }

  private generateGrid (): void {
    this.map = [];
    for (let x = 0; x < this.width; x++) {
      this.map[x] = [];
      for (let y = 0; y < this.height; y++) {
        this.map[x][y] = new Tile(x, y, this.tileDiameter);
        this.tileAmount++;
      }
    }
  }

  public getTile(x: number, y: number): Tile {
    return this.map[x][y];
  }

  public getNeighbours(tile: Tile): Tile[] {
    let neighbours: Array<Tile> = new Array<Tile>();

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (x == 0 && y == 0) {
          continue;
        }

        let checkX = tile.GridPosition.x + x;
        let checkY = tile.GridPosition.y + y;

        if (checkX >= 0 && checkX < this.width && checkY >= 0 && checkY < this.height) {
          neighbours.push(this.map[checkX][checkY]);
        }
      }
    }
    return neighbours;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        let ct = this.getTile(x, y);
        ctx.strokeStyle = '#20C20E';
        ctx.strokeRect(ct.WorldPosition.x, ct.WorldPosition.y, this.tileDiameter, this.tileDiameter);
      }
    }
  }

}