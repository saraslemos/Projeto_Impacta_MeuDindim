import { GastosNovoComponent } from './gastos/gastos-novo/gastos-novo.component';
import { GastosComponent } from './gastos/gastos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'gastos-novo',
    component: GastosNovoComponent
  },
  {
    path: 'gastos',
    component: GastosComponent
  },
  {
    path: '',
    component: GastosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
