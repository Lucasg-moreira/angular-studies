import { AuthGuard } from './../auth/auth.guard';
import { GridComponent } from './../Components/grid-component/grid-component.component';
import { HttpClientComponent } from './../Components/http-client/http-client.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: 'home',
   component: HomeComponent, canActivate: [AuthGuard]},
  {
    path: 'projetos',
    component: ProjetosComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'http',
        component: HttpClientComponent,
      },
      {
        path: 'dt',
        component: GridComponent,
      },
    ],
  },
];

export const PagesRoutes = RouterModule.forChild(routes);
