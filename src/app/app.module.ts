import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgFunctionsModule } from './Angular Funções/ng-functions.module';
import { DirectivesModule } from './directives/directives.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { DataBindingModule } from './Components/data-binding/data-binding.module';
import { SettingsService } from './shared/settings.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ErrorService } from './shared/error.service';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ComponentsModule } from './Components/Components.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataBindingModule,
    FormsModule,
    TooltipModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ComponentsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    DirectivesModule,
    ComponentsModule,
    NgFunctionsModule
    ],
    providers: [
      SettingsService,
      // {
      //   provide: LOCALE_ID,
      //   useValue: 'pt'

      // }
      SettingsService, {
        provide: LOCALE_ID,
        deps: [SettingsService],
        useFactory: (settingsService: any) => settingsService.getLocale()
      },
      ErrorService

    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
