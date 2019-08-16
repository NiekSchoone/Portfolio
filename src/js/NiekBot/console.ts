import EventBus from '../events';

export default class BotConsole {

  private setter: HTMLInputElement;
  private cursor: HTMLElement;
  private writer: HTMLElement;

  constructor() {
    this.setter = this.get('setter') as HTMLInputElement;
    this.cursor = this.get('cursor');
    this.writer = this.get('writer');
    this.cursor.style.left = '0px';
    this.events();
  }

  private get(elid: string): HTMLElement {
    return document.getElementById(elid);
  }

  private events(): void {
    this.get('bot-commandline').addEventListener('click', function () {
      this.setter.focus();
    }.bind(this));
    this.setter.addEventListener('focus', function () {
      this.cursor.classList.add('blink');
    }.bind(this));
    this.setter.addEventListener('blur', function () {
      this.cursor.classList.remove('blink');
    }.bind(this));
    this.setter.addEventListener('keydown', function (e: KeyboardEvent) {
      this.writeit(this.setter, e);
      this.moveit(this.setter.value.length, e);
    }.bind(this));
    this.setter.addEventListener('keyup', function (e: KeyboardEvent) {
      this.writeit(this.setter, e);
    }.bind(this));
    this.setter.addEventListener('keypress', function (e: KeyboardEvent) {
      this.writeit(this.setter, e);
    }.bind(this));
  }

  private nl2br(str: string): string {
    return str.replace(/\n/g, '<br />');
  }

  private writeit(from: HTMLInputElement, e: KeyboardEvent): void {
    if (e.keyCode == 13 && from.value.length > 0) {
      this.emitCommand(this.setter.value);
      return;
    }
    e = e || window.event as KeyboardEvent;
    let tw = from.value;
    this.writer.innerHTML = this.nl2br(tw);
  }

  private moveit(amt: number, e: KeyboardEvent): void {
    e = e || window.event as KeyboardEvent;
    let keycode = e.keyCode || e.which;
    if (keycode === 37 && parseInt(this.cursor.style.left, 10) >= (0 - ((amt - 1) * 10))) {
      this.cursor.style.left = parseInt(this.cursor.style.left, 10) - 10 + 'px';
    } else if (keycode === 39 && (parseInt(this.cursor.style.left, 10) + 10) <= 0) {
      this.cursor.style.left = parseInt(this.cursor.style.left, 10) + 10 + 'px';
    }
  }

  private emitCommand(com: string): void {
    this.setter.value = '';
    this.writer.innerHTML = this.nl2br(this.setter.value);

    EventBus.emit('command', com);
  }
}
