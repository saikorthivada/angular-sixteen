import { Component, computed, effect, EffectRef, Injector, signal, untracked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {toObservable} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nameSignal = signal('');
  effectReference!: EffectRef;

  counter = signal(0);
  age = signal(10);

  counterObservable = toObservable(this.counter);
  totalValue = 0;
  // totalValue = computed(() => {
  //   return (this.counter() + untracked(this.age));
  // })

  constructor(private injector: Injector) {
    // effect(() => {
    //   console.log('counter', this.counter());
    //   console.log('age', untracked(this.age));
    // })

    this.counterObservable.subscribe((counterValue) => {
      console.log(counterValue);
      this.totalValue = counterValue + this.age();
    })
  }

  updateCounter() {
    this.counter.update((previousvalue) => previousvalue + 1);
  }
  updateAge() {
    this.age.update((previousage) => previousage + 1);
  }

  initEffect() {
    console.log('Init Effect');
    this.effectReference = effect(() => {
      console.log('Here im inside effect', this.nameSignal());
    }, {injector: this.injector})
  }

  removeEffect() {
    console.log('Remove effect');
    this.effectReference.destroy();
  }

  updateName() {
    this.nameSignal.set(Math.random().toString());
  }
}
