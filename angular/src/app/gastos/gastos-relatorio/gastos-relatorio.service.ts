import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GastosModel } from '../model/gastos.model';
import { GastosRelatorioModel } from '../model/gastos-relatorio.model';

@Injectable({
  providedIn: 'root'
})
export class GastosRelatorioService {

  constructor(private http: HttpClient) { }

  public gerarRelatorio(){
    return this.http.get<GastosRelatorioModel>('http://localhost:8080/gastos/gerar-relatorio');
  }
  
}
