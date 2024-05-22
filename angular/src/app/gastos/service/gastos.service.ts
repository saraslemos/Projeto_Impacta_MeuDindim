import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GastosModel } from './../model/gastos.model';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  constructor(private httpClient: HttpClient) { }

  listaTodos() {
    return this.httpClient.get<GastosModel[]>('http://localhost:8080/gastos');
  }

  buscarPorId(id: string){
    return this.httpClient.get<GastosModel>(`${'http://localhost:8080/gastos'}/${id}`);
  }

  salvar(gasto: Partial<GastosModel>){
    //console.log(gasto);
    if (gasto._id){
      //console.log('atualizar');
      return this.atualizar(gasto);
    }
    //console.log('criar');
    return this.criar(gasto);
  }

  private criar(gasto: Partial<GastosModel>){
    this.httpClient.post<GastosModel>(`http://localhost:8080/gastos`, gasto).subscribe();
  }

  private atualizar(gasto: Partial<GastosModel>){
    this.httpClient.put<GastosModel>(`${'http://localhost:8080/gastos'}/${gasto._id}`, gasto).subscribe();
  }

}
