import { AuthModule } from './auth/auth.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SettingsService } from './shared/settings/settings.service';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ErrorService } from './shared/error/error.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';

import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DirectivesModule } from './directives/directives.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ComponentsModule } from './Components/Components.module';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TooltipModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ComponentsModule,
    BsDropdownModule.forRoot(),
    DirectivesModule,
    ComponentsModule,
    DataTablesModule,
    AuthModule,
    PagesModule,
    RouterModule,
    AccordionModule.forRoot(),
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
      ErrorService,
      AuthService,
      AuthGuard

    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
