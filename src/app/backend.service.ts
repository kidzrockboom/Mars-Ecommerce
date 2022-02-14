import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BackendService {

  // Urls for the each serverSide script 
  getAllUrl: String = 'http://localhost/connect.php';
  addOneUrl: String = 'http://localhost/addItem.php';
  deleteOneUrl: String = 'http://localhost/delete.php';

  // Constructor creates a http dependency
  constructor(private http: HttpClient) { }


  // Function to get all data from the shoes and format it with rxjs map
  getAll() {
    return this.http.get(`${this.getAllUrl}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  addOne(data: any) {
    return this.http.post(`${this.addOneUrl}`, data, {responseType: 'text'}).pipe(
      map((res: any) => {
        return res;
      })
      
    )
  }

  deleteOne(data: any) {
    console.log(JSON.stringify(data));
    return this.http.post(`${this.deleteOneUrl}`, JSON.stringify(data), {responseType: 'text'}).pipe(
      map((res: any) => {
        return res;
      })
    )
  }

}
