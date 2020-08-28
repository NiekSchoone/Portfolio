// import { Unit } from './unit';
// import { Vector2 } from '../../Utils/vector2';
// import { Resource } from './resource';

// export class UnitManager {

//   private units: Array<Unit>;
//   private startPosition: Vector2;

//   constructor(startPos: Vector2, resources: Array<Resource>) {
//     this.units = new Array<Unit>();
//     this.createUnits(50);
//   }

//   private createUnits(amt: number) {
//     for (let i = 0; i < amt; i++) {
//       let newUnit = new Unit(this.startPosition.x, this.startPosition.y, 0, 0);
//       this.units.push(newUnit);
//     }
//   }

//   private update() {
//     for (let i = 0; i < this.units.length; i++) {
//       this.units[i].update();
//     }
//     this.draw();
//   }

//   private draw() {
//     for (let i = 0; i < this.units.length; i++) {
//       this.units[i].draw(this.ctx);
//     }
//   }
// }
