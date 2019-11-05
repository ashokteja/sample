import { Directive, ElementRef,HostListener,Renderer } from '@angular/core';

@Directive({
  selector: '[appChangetext]'
})
export class ChangetextDirective {

  constructor(private element:ElementRef,private renderer: Renderer) {
    element.nativeElement.style.color = '#000';
   }

   @HostListener('mouseover') onMouseOver() {
    //this.element.nativeElement.style.color = 'red';
    this.renderer.setElementStyle(this.element.nativeElement, 'color', 'red');
}

@HostListener('mouseleave') onMouseLeave() {
  //this.element.nativeElement.style.color = 'red';
  this.renderer.setElementStyle(this.element.nativeElement, 'color', 'blue');
}

@HostListener('click') onClick() {
 
  console.log(this.element)
}

}
