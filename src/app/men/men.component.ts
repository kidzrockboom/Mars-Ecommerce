import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Shoes } from '../shoe';


@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {



  constructor(private backendService: BackendService) {
    
   }

  shoes: Shoes[]= [];
  shoeType = new Set();
  success = "";
  error = "";

  ngOnInit(): void {
    this.getShoes();
  }

  getShoes() {
    this.backendService.getMen().subscribe({
      next: (data: Shoes[]) => {
        this.shoes = data;
        data.forEach(shoe => {
          this.shoeType.add(shoe.type || '');
        });
        this.success = "Got all the shoes";
      },
      error: (err) => {
        console.error(err);
        this.error = err;
      }
    })
  }
  

  }
