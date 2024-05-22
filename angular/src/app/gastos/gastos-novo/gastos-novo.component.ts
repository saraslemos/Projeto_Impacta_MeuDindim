import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

import { GastosNovoService } from './gastos-novo.service';
import { ActivatedRoute } from '@angular/router';
import { GastosModel } from '../model/gastos.model';

@Component({
  selector: 'app-gastos-novo',
  templateUrl: './gastos-novo.component.html',
  styleUrls: ['./gastos-novo.component.scss']
})
export class GastosNovoComponent implements OnInit{
  MatSnackBar: any;

  constructor(
    private servico: GastosNovoService,
    private formBuilder: NonNullableFormBuilder,
    private location: Location,
    private rota: ActivatedRoute,
    private snackBar: MatSnackBar
    ) { };

  form = this.formBuilder.group({
    _id: [''],
    descricao: [''],
    dataInicio: [''],
    dataFim: [''],
    valor: ['']
  });

  ngOnInit(): void {
    const gasto: GastosModel = this.rota.snapshot.data['gasto'];
    this.form.setValue({
      _id: gasto._id,
      descricao: gasto.descricao,
      dataInicio: gasto.dataInicio,
      dataFim: gasto.dataFim,
      valor: gasto.valor
    });
  }

  cadastrar() {
    this.servico.adicionar(this.form.value).subscribe(result => this.sucesso(), error => this.erro());
  }

  private sucesso() {
    this.snackBar.open('Gasto salvo com sucesso!', '', {duration: 5000});
    this.cancelar();
  }

  private erro() {
    this.snackBar.open('Erro ao salvar gasto.', '', {duration: 5000});
  }

  cancelar() {
    this.location.back();
  }

  }



