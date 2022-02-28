import { ListaDinamicaComponent } from './Components/lista-dinamica/lista-dinamica.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingModule } from './Components/data-binding/data-binding.module';
import { BtnstrapComponent } from './pages/btnstrap/btnstrap/btnstrap.component';
import { HomeComponent } from './pages/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDinamicaComponent,
    BtnstrapComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataBindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
