import { PagesRoutes } from './pages.routing';
import { HomeComponent } from './home/home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnstrapComponent } from '../Projetos/btnstrap/btnstrap.component';

@NgModule({
  imports: [
  CommonModule,
  PagesRoutes
],
  declarations: [
    ProjetosComponent,
    HomeComponent,
    BtnstrapComponent],
})
export class PagesModule {}
