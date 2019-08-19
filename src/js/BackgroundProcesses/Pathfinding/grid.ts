import Tile from './tile';
import Settings from '../../Utils/settings';
import GridUtils from '../../Utils/gridUtils';

export default class Grid {

  private map: Tile[][];
  private width: number;
  private height: number;

  constructor() {
    this.width = Settings.gridWidth;
    this.height = Settings.gridHeight;

    this.generateGrid();
  }

  private generateGrid (): void {
    this.map = [];
    for (let x = 0; x < this.width; x++) {
      this.map[x] = [];
      for (let y = 0; y < this.height; y++) {
        this.map[x][y] = new Tile(x, y);
      }
    }
  }

  public draw (ctx: CanvasRenderingContext2D): void {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        let ct = this.getTile(x, y);
        ctx.strokeStyle = '#20C20E';
        ctx.strokeRect(ct.WorldPosition.x, ct.WorldPosition.y, Settings.tileDiameter, Settings.tileDiameter);
      }
    }
  }

  public getTile(x: number, y: number): Tile {
    return this.map[x][y];
  }

  public getNeighbours(tile: Tile): Tile[] {
    return GridUtils.getAdjacentGridPoints(tile.GridPosition).map(gp => this.getTile(gp.x, gp.y));
  }

}