import { SettingsService } from './shared/settings.service';
import { LogService } from './shared/log.service';
import { CursosModule } from './Components/cursos/cursos/cursos.module';

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BtnstrapComponent } from './pages/btnstrap/btnstrap/btnstrap.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ListaDinamicaComponent } from './pages/lista-dinamica/lista-dinamica.component';
import { DataBindingModule } from './Components/data-binding/data-binding.module';
import { TwoWayComponent } from './Components/two-way/two-way.component';
import { InputDecoratorsComponent } from './Components/input-decorators/input-decorators.component';
import { CounterComponent } from './Components/counter/counter.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { NgIfComponent } from './Components/ng-if/ng-if.component';
import { DiretivasComponent } from './pages/diretivas/diretivas.component';
import { NgForComponent } from './Components/ng-for/ng-for.component';
import { NgClassComponent } from './Components/ng-class/ng-class.component';
import { NgStyleComponent } from './Components/ng-style/ng-style.component';
import { OperatorElvisComponent } from './Components/operator-elvis/operator-elvis.component';
import { NgContentComponent } from './Components/ng-content/ng-module.component';
import { BackgroundDirective } from './diretives/Background/background.directive';
import { CustomDirectivesComponent } from './Components/custom-directives/custom-directives.component';
import { HighlightMouseDirective } from './diretives/highlightMouse/highlight-mouse.directive';
import { HighliteDirective } from './diretives/highlite/highlite.directive';
import { ServicePageComponent } from './pages/service-page/service-page/service-page.component';
import { CriarCursoModule } from './Components/criar-curso/criar-curso/criar-curso.module';
import { PipesComponent } from './Components/pipes/pipes.component';
import { CamelCasePipe } from './Components/pipes/camel-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListaDinamicaComponent,
    BtnstrapComponent,
    HomeComponent,
    TwoWayComponent,
    InputDecoratorsComponent,
    CounterComponent,
    CounterPageComponent,
    NgIfComponent,
    DiretivasComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    OperatorElvisComponent,
    NgContentComponent,
    BackgroundDirective,
    CustomDirectivesComponent,
    HighlightMouseDirective,
    HighliteDirective,
    ServicePageComponent,
    PipesComponent,
    CamelCasePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataBindingModule,
    FormsModule,
    CriarCursoModule,
    CursosModule,
    ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
