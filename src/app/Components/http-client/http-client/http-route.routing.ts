import { Routes, RouterModule } from '@angular/router';

import { HttpClientComponent } from './../http-client.component';
import { ClientsFormComponent } from './../../clients-form/clients-form.component';
import { EditarComponent } from '../../clients-form/editar/editar.component';

const routes: Routes = [
  {
    path: 'new',
    component: ClientsFormComponent,
  },
];

export const HttpRoutes = RouterModule.forChild(routes);
