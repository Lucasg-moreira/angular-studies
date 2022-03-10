import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[HighLightMouse]'
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') onMouseOver(){
    // this._render.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'black'
    this.color = 'white'
  }
  @HostListener('mouseleave') onMouseOut(){
    // this._render.setStyle(this._elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent'
    this.color = 'black'
  }
  @HostBinding('style.backgroundColor') backgroundColor:string = '';
  @HostBinding('style.color') color:string = '';

  constructor(private _elementRef: ElementRef, private _render: Renderer2) { }

}
