import { HighlightMouseDirective } from './highlightMouse/highlight-mouse.directive';
import { BackgroundDirective } from './Background/background.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighliteDirective } from './highlite/highlite.directive';



@NgModule({
  declarations: [
    BackgroundDirective,
    HighlightMouseDirective,
    HighliteDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackgroundDirective,
    HighlightMouseDirective,
    HighliteDirective
  ]
})
export class DirectivesModule { }
