import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { GastoComponent } from './component/gasto/gasto.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent}, { path: 'gasto', component: GastoComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
