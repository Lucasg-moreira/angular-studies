import { PagesRoutes } from './pages/pages.routing';
import { HomeComponent } from './pages/home/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientComponent } from './Components/http-client/http-client.component';
import { ErrorComponent } from './Components/error/error.component';
import { GridComponent } from './Components/grid-component/grid-component.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
},
  { path: 'home',
   component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'projetos',
   loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard]},
  {
    path: 'http',
    component: HttpClientComponent, canActivate: [AuthGuard]
  },
  {
    path: 'dt',
    component: GridComponent, canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
