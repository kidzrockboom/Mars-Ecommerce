import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Shoes } from '../shoe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css']
})
export class CmsComponent implements OnInit {

  id: number = 0;

  displayedColumns: String[] = ['position', 'name', 'size', 'price', 'gender',
                                'discount', 'stock', 'type'];

  shoes: Shoes[]= [];
  success = "";
  error = "";

  constructor(private backendService: BackendService) { }



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
