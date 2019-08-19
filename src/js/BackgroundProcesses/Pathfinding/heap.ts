export class Heap<T extends IHeapItem<T>> {

  private items: Array<T>;  
  private currentItemCount: number;

  public count: number;

  public contains(item: T): boolean {
    return this.items[item.heapIndex] == item;
  }


  public updateItem(item: T) {
    this.sortUp(item);
  }

  constructor(maxHeapSize: number) {
    this.items = new Array<T>(maxHeapSize);
  }

  public add(item: T) {
    item.heapIndex = this.currentItemCount;
    this.items[this.currentItemCount] = item;
    this.sortUp(item);
    this.currentItemCount++;
  }

  public removeFirst(): T {
    let firstItem = this.items[0];
    this.currentItemCount--;
    this.items[0] = this.items[this.currentItemCount];
    this.items[0].heapIndex = 0;
    this.sortDown(this.items[0]);
    return firstItem;
  }

  private sortDown(item: T) {
    while (true) {
      let childIndexLeft = item.heapIndex * 2 + 1;
      let childIndexRight = item.heapIndex * 2 + 2;
      let swapIndex = 0;

      if (childIndexLeft < this.currentItemCount) {
        swapIndex = childIndexLeft;
        if (childIndexRight < this.currentItemCount) {
          if (this.items[childIndexLeft].compareTo(this.items[childIndexRight]) < 0) {
            swapIndex = childIndexRight;
          }
        }
        if (item.compareTo(this.items[swapIndex]) < 0) {
          this.swap(item, this.items[swapIndex]);
        } else {
          return;
        }
      } else {
        return;
      }
    }
  }

  private sortUp(item: T) {
    let parentIndex = (item.heapIndex - 1) / 2;

    while (true) {
      let parentItem = this.items[parentIndex];
      if (item.compareTo(parentItem) > 0) {
        this.swap(item, parentItem);
      } else {
        break;
      }

      parentIndex = (item.heapIndex - 1) / 2;
    }
  }

  private swap(itemA: T, itemB: T) {
    this.items[itemA.heapIndex] = itemB;
    this.items[itemB.heapIndex] = itemA;
    let itemAIndex = itemA.heapIndex;
    itemA.heapIndex = itemB.heapIndex;
    itemB.heapIndex = itemAIndex;
  }
}

export interface IHeapItem<T> {
  heapIndex: number;
  compareTo (other: T): number;
}
