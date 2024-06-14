import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GastosModel } from '../model/gastos.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gastos-lista',
  templateUrl: './gastos-lista.component.html',
  styleUrls: ['./gastos-lista.component.scss']
})
export class GastosListaComponent implements OnInit{

  @Input() gastos: GastosModel[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  displayedColumns = ['descricao', 'dataInicio', 'dataFim', 'valor', 'acoes'];

  constructor(
    private roteador: Router,
    private rota: ActivatedRoute
  ) { }

  ngOnInit(): void { }

  adicionar() {
    this.add.emit(true);
  }

  editar(gasto: GastosModel) {
    this.edit.emit(gasto);
  }

  deletar(gasto: GastosModel){
    this.delete.emit(gasto);
  }



}
