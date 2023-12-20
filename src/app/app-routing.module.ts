import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { UsuarioFormComponent } from './component/usuario-form/usuario-form.component';
import { LoginComponent } from './component/login/login.component';
import { GastoComponent } from './component/gasto/gasto.component';
import { GastosPorGruposComponent } from './component/gastos-por-grupos/gastos-por-grupos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent}, 
  { path: 'gasto', component: GastoComponent }, 
  { path: 'home', component: HomeComponent },
  { path: 'registroUsuario', component: UsuarioFormComponent },
  { path: 'gastosPorGrupo', component: GastosPorGruposComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
