import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // This input decorators comes from route
  @Input() id!: string;

  @Input() queryParam!: string;

  @Input() role!: string;

  @Input() message!: string;
}
