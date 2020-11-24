import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    { id: 1, nombre: 'Juan', apellido: 'Arias', email: 'correo1@test.com', createAt: '2017-11-18' },
    { id: 2, nombre: 'Maria', apellido: 'Perez', email: 'correo2@test.com', createAt: '2017-11-15' },
    { id: 3, nombre: 'Mateo', apellido: 'Contreras', email: 'correo3@test.com', createAt: '2017-11-18' },
    { id: 4, nombre: 'Lucia', apellido: 'Lujan', email: 'correo4@test.com', createAt: '2017-11-13' },
    { id: 5, nombre: 'Sheyla', apellido: 'Correa', email: 'correo5@test.com', createAt: '2017-11-18' },
    { id: 6, nombre: 'Tecia', apellido: 'Jara', email: 'correo6@test.com', createAt: '2017-11-13' },
    { id: 7, nombre: 'Gerardo', apellido: 'Torres', email: 'correo7@test.com', createAt: '2017-11-13' },
    { id: 8, nombre: 'Felix', apellido: 'Lopez', email: 'correo8@test.com', createAt: '2017-11-15' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
