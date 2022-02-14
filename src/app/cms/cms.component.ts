import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Shoes } from '../shoe';
import { Observable } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { AddFormComponent } from '../add-form/add-form.component';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css']
})
export class CmsComponent implements OnInit {

  id: number = 0;

  displayedColumns: String[] = ['position', 'name', 'size', 'price', 'gender',
                                'discount', 'stock', 'type', 'edit', 'delete'];

  shoes: Shoes[]= [];
  success = "";
  error = "";

  constructor(private backendService: BackendService, 
              public dialog: MatDialog) { }



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

  onAdd() {
    this.dialog.open(AddFormComponent, {  
      height: '600px',
      width: '400px'
    })
  }

  onEdit(){

  }

  onDelete(element: any) {
    let data = element.$oid;
    this.backendService.deleteOne(data).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
    // Refresh the form
  }

}
