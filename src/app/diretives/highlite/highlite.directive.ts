import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Highlite]'
})
export class HighliteDirective {
  @HostListener('mouseenter') onMouseOver(){
    // this._render.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.background;
    this.color = this.fontColor;
    this.cursor = this.mouseCursor;
    this.padding = this.paddingSize
  }
  @HostListener('mouseleave') onMouseOut(){
    // this._render.setStyle(this._elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
    this.color = 'black';
    this.padding = 0;
  }
  @HostBinding('style.backgroundColor') backgroundColor:string = '';
  @HostBinding('style.color') color:string = '';
  @HostBinding('style.cursor') cursor:string = '';
  @HostBinding('style.padding.px') padding: number = 0

 @Input() mouseCursor:string = 'pointer';
 @Input() background: string = 'black';
 @Input() fontColor: string = 'white';
 @Input() paddingSize: number = 20;


  constructor() { }
  ngOnInit() {
    this.backgroundColor = this.background
  }
}
