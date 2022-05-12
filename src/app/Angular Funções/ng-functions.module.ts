import { RouterModule } from '@angular/router';
import { DataBindingComponent } from './../Components/data-binding/data-binding.component';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { NgContentComponent } from './ng-content/ng-module.component';
import { OperatorElvisComponent } from './operator-elvis/operator-elvis.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { DirectivesModule } from '../directives/directives.module';



@NgModule({
  declarations: [
    CustomDirectivesComponent,
    NgClassComponent,
    NgContentComponent,
    NgForComponent,
    NgIfComponent,
    NgStyleComponent,
    OperatorElvisComponent,
    TwoWayComponent,
    DataBindingComponent

  ],
  imports: [
    CommonModule,
    DirectivesModule,
    RouterModule
  ],exports: [
    CustomDirectivesComponent,
    NgClassComponent,
    NgContentComponent,
    NgForComponent,
    NgIfComponent,
    NgStyleComponent,
    OperatorElvisComponent,
    TwoWayComponent,
    DataBindingComponent
  ]
})
export class NgFunctionsModule { }
