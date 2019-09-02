import Stack from '../../Utils/stack';

export class StackFSM {

  public stack: Stack<Function>;

  constructor() {
    this.stack = new Stack<Function>();
  }

  public popState() {
    this.stack.pop();
  }

  public pushState(state: Function) {
    if (this.getCurrentState() != state) {
      this.stack.push(state);
    }
  }

  public update() {
    let currentStateAction = this.getCurrentState();

    if (currentStateAction != null) {
      currentStateAction();
    }
  }

  public getCurrentState() {
    return this.stack.count > 0 ? this.stack.peek() : null;
  }
}
