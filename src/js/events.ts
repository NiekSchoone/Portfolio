export type Handler = (param?: any) => void;

export interface EventList {
  [key: string]: Array<Handler>;
}

export class EventBus {
  eventList: EventList = {};

  on (_key: string, _handler: Handler) {
    if (!this.eventList[_key]) {
      this.eventList[_key] = [];
    }
    this.eventList[_key].push(_handler);
  }

  off (_key: string, _handler?: Handler): boolean | void {
    const handlers = this.eventList[_key];
    if (!handlers || handlers.length === 0) {
      return false;
    } else if (!_handler) {
      this.eventList[_key].length = 0;
    } else {
      for (let i = handlers.length - 1; i >= 0; i--) {
        if (handlers[i] === _handler) {
          handlers.splice(i, 1);
        }
      }
    }
  }

  emit (_key: string, ..._params: any[]): void | boolean {
    const handlers = this.eventList[_key];
    if (!handlers || handlers.length === 0) {
      return false;
    } else {
      const len = handlers.length;
      for (let i = 0; i < len; i++) {
        handlers[i].call(this, ...(_params as any));
      }
    }
  }
}

export default new EventBus();
