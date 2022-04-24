import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Background]'
})
export class BackgroundDirective {

  constructor(private _elementRef: ElementRef,
    private _renderer: Renderer2) {
    // this._elementRef.nativeElement.style.backgroundColor = "black"
    // this._elementRef.nativeElement.style.color = "white"
      this._renderer.setStyle(this._elementRef.nativeElement,
      "background-color",
      "black",
      )
      this._renderer.setStyle(this._elementRef.nativeElement,
        "color",
        "white",
        )
   }



}
