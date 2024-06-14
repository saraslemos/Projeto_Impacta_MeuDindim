import { Component, OnInit } from '@angular/core';
import { GastosRelatorioService } from './gastos-relatorio.service';
import { NonNullableFormBuilder } from '@angular/forms';
import { GastosRelatorioModel } from '../model/gastos-relatorio.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gastos-relatorio',
  templateUrl: './gastos-relatorio.component.html',
  styleUrls: ['./gastos-relatorio.component.scss']
})
export class GastosRelatorioComponent implements OnInit{

  relatorio: GastosRelatorioModel;

  constructor(
    private servico: GastosRelatorioService,
    private formBuilder: NonNullableFormBuilder, 
    private location: Location
 
  ) {}

  ngOnInit(): void {
    this.servico.gerarRelatorio().subscribe(result => {
      this.relatorio = result;
    });
  }

  form = this.formBuilder.group({
    quantidadeDeGastos: '',
    somatorioDeGastos: ''
  });
  

  voltar(){
    this.location.back();
  }


}


