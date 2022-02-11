import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BackendService {

  // Url for the server 
  getAllUrl: String = 'http://localhost/connect.php'; 

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

}
