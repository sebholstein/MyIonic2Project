import {Page} from 'ionic-framework/ionic';

import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES, ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';

console.log(ANGULAR2_GOOGLE_MAPS_DIRECTIVES);
@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  providers: [ANGULAR2_GOOGLE_MAPS_PROVIDERS],
  styles: ['.sebm-google-map-container { height: 200px }']
})
export class HelloIonicPage {
  locations: any[];
  location: Object;
  zoom: number = 8;
  constructor() {
    this.locations = [
      {
        latitude: 51,
        longitude: 5,
        name: 'abc'
      },
      {
        latitude: 51.5,
        longitude: 5,
        name: 'def'
      }
    ];
    this.location = this.locations[0];  
  }
}
