import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GastosModel } from '../model/gastos.model';

@Injectable({
  providedIn: 'root'
})
export class GastosNovoService {

  constructor(private http: HttpClient) { }


  public adicionar(gasto: Partial<GastosModel>) {
    this.http.post(`http://localhost:8080/gastos`, gasto).subscribe();
  }
}
