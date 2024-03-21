import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GastosModel } from './../model/gastos.model';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  constructor(private httpClient: HttpClient) { }

  listaTodos()  {
    return this.httpClient.get<GastosModel[]>('http://localhost:8080/gastos');
  }

}
