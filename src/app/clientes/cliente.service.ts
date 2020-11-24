import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';

// Provided in root, permite que sin registrar en appmodule podamos usar el Service
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

constructor() { }

getClientes() {
  return CLIENTES;
}
}
