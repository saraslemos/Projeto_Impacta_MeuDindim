import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GastosModel } from './model/gastos.model';
import { GastosService } from './service/gastos.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent implements OnInit{

  gastos: GastosModel[] = [];

  constructor(
    private servico: GastosService,
    private roteador: Router,
    private rota: ActivatedRoute
    ) { }


  ngOnInit(): void {
    this.servico.listaTodos().subscribe(result => {
      this.gastos = result;
    });

  }

  adicionar() {
    this.roteador.navigate(['/gastos-novo'], {relativeTo: this.rota});
  }

  editar(gasto: GastosModel){
    this.roteador.navigate(['/edit', gasto._id], {relativeTo: this.rota});
  }

}
