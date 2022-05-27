import { ReactiveFormsModule } from '@angular/forms';


import { PagesRoutes } from './pages.routing';
import { HomeComponent } from './home/home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { BtnstrapComponent } from '../Projetos/btnstrap/btnstrap.component';
import { ComponentsModule } from '../Components/Components.module';
import { HttpClientComponent } from '../Components/http-client/http-client.component';
import { GridComponent } from '../Components/grid-component/grid-component.component';
import { ClientsFormComponent } from '../Components/clients-form/clients-form.component';

@NgModule({
  imports: [
  CommonModule,
  PagesRoutes,
  ComponentsModule,
  ReactiveFormsModule,
],
  declarations: [
    ProjetosComponent,
    HomeComponent,
    BtnstrapComponent,
    HttpClientComponent,
    GridComponent,
    ClientsFormComponent
  ]
})
export class PagesModule {}
