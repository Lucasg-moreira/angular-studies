import { PagesRoutes } from './pages/pages.routing';
import { HomeComponent } from './pages/home/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientComponent } from './Components/http-client/http-client.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { ErrorComponent } from './Components/error/error.component';
import { GridComponent } from './Components/grid-component/grid-component.component';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},
  { path: 'home',
   component: HomeComponent },
  { path: 'projetos',
   loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule )},
  {
    path: 'http',
    component: HttpClientComponent,
  },
  {
    path: 'dt',
    component: GridComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
