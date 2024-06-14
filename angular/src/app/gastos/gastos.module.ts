import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { GastosNovoComponent } from './gastos-novo/gastos-novo.component';
import { GastosComponent } from './gastos.component';
import { GastosListaComponent } from './gastos-lista/gastos-lista.component';
import { GastosRelatorioComponent } from './gastos-relatorio/gastos-relatorio.component';



@NgModule({
  declarations: [GastosComponent, GastosNovoComponent, GastosListaComponent, GastosRelatorioComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule

  ]
})
export class GastosModule { }
