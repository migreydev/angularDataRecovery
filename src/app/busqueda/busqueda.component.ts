import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  // Variable que recibe la busqueda del componente padre Tabla
  @Input() buscarEmpleado : string = "";

  // Evento que emite la búsqueda al componente padre
  @Output() outputBusqueda: EventEmitter<string> = new EventEmitter<string>();


  // Metodo que emite la busqueda al componente padre
  funcionOutputBusqueda(){

    this.outputBusqueda.emit(this.buscarEmpleado);
  }



}
