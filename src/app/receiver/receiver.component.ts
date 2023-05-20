import { Component, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalService } from '../signal.service';

@Component({
  selector: 'app-receiver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent {

  randomNumberVariable = computed(() => {
    if(this.signalService.getMessage()) {
      return this.signalService.getMessage();
    }
    return 'Signal has no value';
  });



  constructor(private signalService: SignalService){
    // effect(() => {
    //   console.log('effect');
    //   this.randomNumberVariable = this.signalService.getMessage();
    // })
  }

}
