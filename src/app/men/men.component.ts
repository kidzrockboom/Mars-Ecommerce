import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Shoes } from '../shoe';


@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  constructor(private backendService: BackendService) { }

  shoes: Shoes[]= [];
  success = "";
  error = "";

  ngOnInit(): void {
    this.getShoes();
  }

  getShoes() {
    this.backendService.getAll().subscribe({
      next: (data: Shoes[]) => {
        this.shoes = data;
        this.success = "Got all the shoes";
      },
      error: (err) => {
        console.error(err);
        this.error = err;
      }
    })
  }

  }
