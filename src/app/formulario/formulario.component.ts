import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {

  @Input() username : string ="";
  @Input() password : string = "";

  @Output() pasarDatos: EventEmitter<string> = new EventEmitter<string>();

  funcionPasarDatos() {
    const credencialFormulario: any = {
      username: this.username,
      password: this.password
    };
    this.pasarDatos.emit(credencialFormulario);
  }

}
