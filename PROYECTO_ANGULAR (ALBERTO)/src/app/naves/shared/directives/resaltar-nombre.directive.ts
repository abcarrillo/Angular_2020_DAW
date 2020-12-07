import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltarNombre]'
})
export class ResaltarNombreDirective {
  @Input('appResaltarNombre') nombre: string;

  constructor(private _elem: ElementRef) { }


  @HostListener('mouseenter') onMouseEnter() {
    this.resalta('bold');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.resalta('');
  }


  private resalta(mensaje: string): void {
    this._elem.nativeElement.style.fontWeight = mensaje;
  }
}
