import { Component } from '@angular/core';
import { BusquedaComponent } from '../busqueda/busqueda.component';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [BusquedaComponent],
  templateUrl: './tabla.component.html'
})
export class TablaComponent {

  /// Variable padre que se pasa al hijo para realizar busquedas
  buscarEmpleado: string = "";

  //Array para almacenar los empleados cuando se busque
  empleadosFiltrados: any[] = [];


  empleados: any[] = [
    {
      "nombre": "John",
      "apellido": "Doe",
      "cargo": "Desarrollador",
      "departamento": "Tecnología"
    },
    {
      "nombre": "Jane",
      "apellido": "Smith",
      "cargo": "Diseñadora",
      "departamento": "Diseño"
    },
    {
      "nombre": "Robert",
      "apellido": "Johnson",
      "cargo": "Gerente de Proyecto",
      "departamento": "Administración"
    },
    {
      "nombre": "Emily",
      "apellido": "Davis",
      "cargo": "Analista de Datos",
      "departamento": "Tecnología"
    }
  ]

  //Metodo para buscar a un empleado por nombre o por apellido
  outputPadreEmpleado(datoNombre: string) {
    const empleadoEncontrado = this.empleados.find(empleado => empleado.nombre === datoNombre || empleado.apellido === datoNombre);
    this.empleadosFiltrados = [];

    if (datoNombre) {
      if (empleadoEncontrado) {
        this.empleadosFiltrados.push(empleadoEncontrado);
        this.buscarEmpleado = datoNombre;
      } else {
        this.empleadosFiltrados = [...this.empleados];
      }
    } else {
      this.empleadosFiltrados = [...this.empleados];
    }
  }
  

}