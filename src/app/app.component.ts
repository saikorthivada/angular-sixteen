import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

export const broadCastChannel = new BroadcastChannel('authentication');
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {
    broadCastChannel.onmessage = (event) => {
      console.log(event);
      if(event.data == 'Logout') {
        this.router.navigate(['login']);
      }
    }
  }
}
