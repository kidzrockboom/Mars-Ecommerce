import { Component, } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  placeholder: string = "";
  // Code to search database and retrieve items that match search function 
  constructor() {}
  onSubmit(): void {
    console.log(this.placeholder);
  }

}
