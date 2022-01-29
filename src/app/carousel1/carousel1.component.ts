import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel1',
  templateUrl: './carousel1.component.html',
  styleUrls: ['./carousel1.component.css']
})
export class Carousel1Component {

  // Change the carousel values to false to hid the navigation controls 
   showNavigationArrows = false;
   showNavigationIndicators = false;
  
  // Create an array of image links to loop over in HTML with directives
  images: string[] = [
    "assets/image1.jpg",
     "assets/image2.jpg",
     "assets/image3.jpg",
  ]

  constructor(config: NgbCarouselConfig) {
    // customize default values  of carousels used by this component tree
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  
  }

  }
