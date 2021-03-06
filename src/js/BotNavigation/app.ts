import Snake from '../Games/Snake';
import EventBus from '../Utils/events';
import BotConsole from './console';
import Tetris from '../Games/tetris';

export class Bot {

  private botConsole: BotConsole;

  constructor () {
    this.botConsole = new BotConsole();

    EventBus.on('command', this.executeCommand.bind(this));

    this.typeWriter();
  }

  private typeWriter () {
    let elements = [].slice.call(document.getElementsByClassName('typewriter'));
    let txt = 'Welcome!';
    let i = 0;
    let next = function () {
      if(elements.length <= 0) { return; }
      if (i < txt.length) {
        elements[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(next, 50);
      } else {
        elements.shift();
        i = 0;
        txt = 'What are you interested in seeing?';
        setTimeout(next, 500);
      }
    };
    next();
  }

  private executeCommand (cmd) {
    console.log(cmd);
    switch(cmd) {
      case 'snake':
        let sn = new Snake();
        break;
      case 'tetris':
        let tt = new Tetris();
        break;
      default:
        break;
    }
  }
}

let niekbot = new Bot();
