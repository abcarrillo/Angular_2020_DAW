import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltarNotifs]'
})
export class ResaltarNotifsDirective {

  constructor(private _elem: ElementRef) { }


  @HostListener('mouseenter') onMouseEnter() {
    this.resalta('green', 'white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.resalta('', '');
  }


  private resalta(mensaje: string, color: string): void {
    this._elem.nativeElement.style.background = mensaje;
    this._elem.nativeElement.style.color = color
  }
}
