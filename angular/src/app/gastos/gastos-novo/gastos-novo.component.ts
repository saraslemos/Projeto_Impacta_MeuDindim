import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';


import { GastosNovoService } from './gastos-novo.service';

@Component({
  selector: 'app-gastos-novo',
  templateUrl: './gastos-novo.component.html',
  styleUrls: ['./gastos-novo.component.scss']
})
export class GastosNovoComponent implements OnInit{

  constructor(
    private servico: GastosNovoService,
    private formBuilder: NonNullableFormBuilder,
    ) { };

  form = this.formBuilder.group({
    descricao: [""],
    dataInicio: [],
    dataFim: [],
    valor: []
  });

  cadastrar() {
    this.servico.adicionar(this.form.value);
  }

  ngOnInit(): void { }


  salvar() {

  }

  cancelar() {

  }

}
