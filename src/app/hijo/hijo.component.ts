import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html'
})
export class HijoComponent {

  @Input() increment: number= 0;
  @Input() valorInicial: number = 0;

  counter : number = 0;

  @Output() contadorOutput: EventEmitter<number> = new EventEmitter<number>();

  funcionIncremento() {
    this.counter += this.increment;
    this.contadorOutput.emit(this.counter);
  }
  
  funcionDecremento() {
    this.counter -= this.increment;
    this.contadorOutput.emit(this.counter);
  }
  

}
