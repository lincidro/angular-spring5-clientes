import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';

// Provided in root, permite que sin registrar en appmodule podamos usar el Service
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Observable<Cliente[]> {
    return of(CLIENTES);
  }

}
