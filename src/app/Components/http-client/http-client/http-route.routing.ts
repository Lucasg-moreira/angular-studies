import { RouterOutletComponent } from './../router-outlet/router-outlet.component';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientComponent } from './../http-client.component';
import { ClientsFormComponent } from './../../clients-form/clients-form.component';
import { EditarComponent } from '../../clients-form/editar/editar.component';
import { ModalAddComponent } from '../../modal-add/modal-add.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'new',

      },
      {
        path: 'edit/:id',
        component: EditarComponent,
      },
    ],
  },
];

export const HttpRoutes = RouterModule.forChild(routes);
