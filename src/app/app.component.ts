import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { TablaComponent } from './tabla/tabla.component';
import { BusquedaComponent } from './busqueda/busqueda.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HijoComponent, FormsModule, FormularioComponent, TablaComponent, BusquedaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  valorInicial: number = 0;
  increment: number = 0;
  mostrarContador: number = 0;

  counter : number = 0;

  actualizacionContador(contador: number) {
    this.counter=contador;
    this.mostrarContador=contador;
    
  }

  usernameApp : string = "";
  passwordApp : string = "";

  credencial: any = { 
      username: this.usernameApp, 
      password: this.passwordApp 
    };

  funcionRecogerDatos(datos: any){

    this.credencial=datos;
    console.log(this.credencial);

  }

  

  
}
