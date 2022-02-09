import { Component } from '@angular/core';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.css']
})
export class HomeCardsComponent {

  cards = [
    {
      name: "MEN",
      image: "assets/nav-card2.jpg",
      link: "/men"
    },
    {
      name: "WOMEN",
      image: "assets/nav-card1.jpg",
      link: "/women"
    },
    {
      name: "SALES",
      image: "assets/nav-card3.jpg",
      link: "/sales"
    }
  ];

  constructor() { }

 

}
