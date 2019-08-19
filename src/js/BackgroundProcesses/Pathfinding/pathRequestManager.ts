import Pathfinding from './pathfinding';
import { Vector2 } from '../../Utils/vector2';

type PathRequestCallback = (path: Vector2[], success: boolean) => void;

export default class PathRequestManager {

  private static _instance: PathRequestManager;

  private pathfinder: Pathfinding;

  private pathRequestQueue: Array<PathRequest>;

  private isProcessingPath: boolean;
  private currentRequest: PathRequest;

  private constructor() {
    this.pathRequestQueue = [];
  }

  public set Pathfinder(p: Pathfinding) {
    this.pathfinder = p
  }

  public requestPath(start: Vector2, end: Vector2, callback: PathRequestCallback): void {
    let newRequest = new PathRequest(start, end, callback);
    console.log(newRequest);
    this.pathRequestQueue.push(newRequest);
    this.TryProcessNext();
  }

  public FinishedProcessingPath(path: Vector2[], succes: boolean) {
    this.currentRequest.callback(path, succes);
    this.isProcessingPath = false;
    this.TryProcessNext();
  }

  private TryProcessNext() {
    if(!this.isProcessingPath && this.pathRequestQueue.length > 0) {
      this.currentRequest = this.pathRequestQueue.shift();
      console.log(this.currentRequest);
      this.isProcessingPath = true;
      this.pathfinder.findPath(this.currentRequest.pathStart, this.currentRequest.pathEnd);
    }
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

}

class PathRequest {
  public pathStart: Vector2;
  public pathEnd: Vector2;
  public callback: (path: Vector2[], success: boolean) => void;
  
  public constructor(start: Vector2, end: Vector2, callback: PathRequestCallback) {
    this.pathStart = start;
    this.pathEnd = end;
    this.callback = callback;
  }
}

