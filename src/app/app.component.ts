import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = signal<string>('Angular 16');

  arr = signal([1, 2, 3, 4, 5]);

  obj = signal({
    firstName: 'sai',
    lastName: 'kumar'
  });

  fullName = computed(() => `${this.obj().firstName} ${this.obj().lastName} ${this.name()}`)

  changeName() {
    // this.name = `${this.name} - ${Math.random()}`;
    // this.name.set(`${this.name()} - ${Math.random()}`);
    this.name.update((value) => `${value} - ${Math.random()}`)
  }

  updateArr() {
    this.arr.mutate((value) => value.push(value.length + 1));
  }

  updateObj() {
    this.obj.mutate((obj) => obj.firstName = 'updated');
  }
}
