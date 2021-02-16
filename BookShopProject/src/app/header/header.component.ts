import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector:'app-header',
  templateUrl:"./header.component.html",
   styleUrls: ['./header.component.css'],
   encapsulation:ViewEncapsulation.Emulated
})
export class HeaderComponent{
  constructor(private dataStorageService:DataStorageService) {
  }
  @Output() featuredSelected=new EventEmitter<string>();
  OnSelect(feature: string) {
    this.featuredSelected.emit(feature);
  }

  onSaveData() {
    this.dataStorageService.storeRecipe()
  }

  onFetchData() {
    this.dataStorageService.fetchData();
  }
}
