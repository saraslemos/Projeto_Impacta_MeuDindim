import { GastosNovoComponent } from './gastos/gastos-novo/gastos-novo.component';
import { GastosComponent } from './gastos/gastos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastoResolver } from './gastos/guardas/gasto.resolver';

const routes: Routes = [
  {
    path: 'gastos-novo',
    component: GastosNovoComponent, resolve: { gasto: GastoResolver }
  },
  {
    path: 'gastos',
    component: GastosComponent
  },
  {
    path: '',
    component: GastosComponent
  },
  {
    path: 'edit/:id',
    component: GastosNovoComponent, resolve: { gasto: GastoResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
