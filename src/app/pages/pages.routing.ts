import { ErrorComponent } from './../Components/error/error.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'projetos',
        component: ProjetosComponent,
      },
      {
        path: '*',
        component: ErrorComponent
      }
    ],
  },
];

export const PagesRoutes = RouterModule.forChild(routes);
