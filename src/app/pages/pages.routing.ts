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
    ],
  },
];

export const PagesRoutes = RouterModule.forChild(routes);
