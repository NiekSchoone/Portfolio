import Snake from '../Games/Snake';
import EventBus from '../Utils/events';
import BotConsole from './console';

export class Bot {

  private botConsole: BotConsole;

  constructor () {
    this.botConsole = new BotConsole();

    EventBus.on('command', this.executeCommand.bind(this));
  }

  private executeCommand(cmd) {
    console.log(cmd);
  }

}

let niekbot = new Bot();
