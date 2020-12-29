import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
 // @HostBinding('class.show') isOpen=false;
  @HostListener('click') toggleOpen(){
   // this.isOpen=!this.isOpen;
    this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show')
}
  constructor(private _el:ElementRef) { }

}
