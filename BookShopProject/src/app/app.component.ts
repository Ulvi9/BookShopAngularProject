import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BookShopProjectWithAngular';
  loadedFeature='recipe';
  ngOnInit(): void {

  }

  OnNavigate(feature: string) {
    this.loadedFeature=feature;
  }
}
