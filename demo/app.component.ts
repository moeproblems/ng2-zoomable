import { Component } from '@angular/core';

const img1 = require('./assets/thumbnail.jpg');
const img2 = require('./assets/thumbnail2.jpg');

@Component({
  selector: 'my-app',
  styles: [`
    img {
      display: block;
    }

    .img1 {
      width: 400px;
      height: 274px;
    }

    .img2 {
      margin-top: 20px;
      width: 388px;
      height: 580px;
    }
  `],
  template: `
    <img [zoomable]='zoomOptions' [zoomableSrc]='imageSource1' [src]='imageSource1' class='img1'>
    <img [zoomable]='zoomOptions' [src]='imageSource2' class='img2'>
  `
})
export class AppComponent {
  imageSource1 = img1;
  imageSource2 = img2;
}
