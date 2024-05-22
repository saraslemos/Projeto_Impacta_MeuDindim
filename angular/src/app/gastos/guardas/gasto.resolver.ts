import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { GastosService } from '../service/gastos.service';
import { GastosModel } from '../model/gastos.model';

@Injectable({
  providedIn: 'root'
})
export class GastoResolver implements Resolve<GastosModel> {

  constructor(private servico: GastosService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GastosModel> {
    if (route.params && route.params['id']) {
      return this.servico.buscarPorId(route.params['id']);
    }
    return of({_id: '', descricao: '', dataInicio: '', dataFim: '', valor:''});
  }
}
