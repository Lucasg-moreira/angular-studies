import { ClientsFormComponent } from './Components/clients-form/clients-form.component';
import { PokedexComponent } from './Components/pokedex/pokedex.component';
import { ServicePageComponent } from './pages/service-page/service-page/service-page.component';
import { DiretivasComponent } from './pages/diretivas/diretivas.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { HomeComponent } from './pages/home/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BtnstrapComponent } from './pages/btnstrap/btnstrap/btnstrap.component';
import { ListaDinamicaComponent } from './pages/lista-dinamica/lista-dinamica.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { HttpClientComponent } from './Components/http-client/http-client.component';
import { RouterOutletComponent } from './Components/http-client/router-outlet/router-outlet.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'btn-strap', component: BtnstrapComponent },
  { path: 'Dinamic-List', component: ListaDinamicaComponent },
  { path: 'Interpolation', component: DataBindingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'counter', component: CounterPageComponent },
  { path: 'diretivas', component: DiretivasComponent },
  { path: 'service', component: ServicePageComponent },

  {
    path: 'http',
    component: HttpClientComponent,
    loadChildren: () =>
      import('./Components/http-client/http-client/http-client.module').then(
        (m) => m.HttpClientModule
      ),
  },
  {
    path: '',
    component: RouterOutletComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
