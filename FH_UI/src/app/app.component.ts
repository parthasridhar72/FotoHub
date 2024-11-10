import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FH_UI';

  storageUsed = 10;
  storageAvl = 15

  placeHolderTitle : string = "Search \"My Image\""

  changePlaceHolderTitle() {
    this.placeHolderTitle = "Search your photos and memories"
  }

  userImages : any[] = [
    {imgUrl : './assets/IMG_20200107_121855.jpg', alt : "selfie at metro"},
    {imgUrl : './assets/IMG_20200107_124226.jpg', alt : "standing pose"},
    {imgUrl : './assets/IMG_20200107_125013.jpg', alt : "airport conveyor belt"},
    {imgUrl : './assets/IMG_20200107_151815.jpg', alt : "indigo plane"},
    {imgUrl : './assets/IMG_20210909_110034.jpg', alt : "selfie smile"}
  ]
}
