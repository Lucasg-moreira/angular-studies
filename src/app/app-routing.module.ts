import { HomeComponent } from './pages/home/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BtnstrapComponent } from './pages/btnstrap/btnstrap/btnstrap.component';
import { ListaDinamicaComponent } from './Components/lista-dinamica/lista-dinamica.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';



const routes: Routes = [
 { path: 'btn-strap', component: BtnstrapComponent},
 { path: 'Dinamic-List', component: ListaDinamicaComponent},
 { path: 'Interpolation', component: DataBindingComponent},
 { path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
