import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalService } from '../signal.service';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent {

  constructor(private signalService: SignalService) {

  }

  sendSignalData() {
    this.signalService.setMessage(Math.random().toString());
  }
}
