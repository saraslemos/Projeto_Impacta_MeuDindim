import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GastosModel } from '../model/gastos.model';

@Injectable({
  providedIn: 'root'
})
export class GastosNovoService {

  constructor(private http: HttpClient) { }


  public adicionar(gasto: Partial<GastosModel>) {
    return this.http.post(`http://localhost:8080/gastos`, gasto);
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
    this.http.post<GastosModel>(`http://localhost:8080/gastos`, gasto);
  }

  private atualizar(gasto: Partial<GastosModel>){
    this.http.put<GastosModel>(`${'http://localhost:8080/gastos'}/${gasto._id}`, gasto);
  }
}
