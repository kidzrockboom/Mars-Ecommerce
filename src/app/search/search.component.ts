import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { Shoes } from '../shoe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private backendService: BackendService, private route: Router) {
    // Get the Data from the NavBar search
    this.sho = this.route.getCurrentNavigation()?.extras.state;
    this.shoes = this.sho;
   }

  sho: any; 
  shoes: Shoes[]= [];
  shoeType = [];

  receive($event: any){
    this.shoes = $event;
  }

  ngOnInit(): void {
    console.log(this.sho);
  }

  

  onFilter() {
    console.log();

  }
  
}
