import { Injectable, signal } from '@angular/core';

@Injectable()
export class SignalService {

  private message = signal<string>('');

  constructor() { }

  setMessage(inputMessage: string) {
    console.log('signal service set');
    this.message.update(() => inputMessage);
  }

  getMessage() {
    console.log('signal service get');
    return this.message();
  }
}
