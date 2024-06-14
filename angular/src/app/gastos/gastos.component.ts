import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GastosModel } from './model/gastos.model';
import { GastosService } from './service/gastos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private rota: ActivatedRoute,
    private snackBar: MatSnackBar
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

  deletar(gasto: GastosModel){
    this.servico.deletar(gasto._id).subscribe(result => this.sucesso(), error => this.erro());
  }

  private sucesso() {
    this.recarregar();
    this.snackBar.open('Gasto removido com sucesso!', 'X', {
      duration: 5000, 
      verticalPosition: 'top', 
      horizontalPosition: 'center'});
  }

  recarregar(){
    this.servico.listaTodos().subscribe(result => {
      this.gastos = result;
    });
  }

  private erro() {
    this.snackBar.open('Erro ao tentar remover gasto.', '', {duration: 5000});
  }

  gerarRelatorio(){
    this.roteador.navigate(['/gastos-relatorio'], {relativeTo: this.rota});
  }

}