import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector:'app-header',
  templateUrl:"./header.component.html",
   styleUrls: ['./header.component.css'],
   encapsulation:ViewEncapsulation.Emulated
})
export class HeaderComponent{
  @Output() featuredSelected=new EventEmitter<string>();
  OnSelect(feature: string) {
    this.featuredSelected.emit(feature);
  }
}
