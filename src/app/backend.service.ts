import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Shoes } from './shoe';
import { HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BackendService {

  // Urls for the each serverSide script 
  getAllUrl: String = 'http://localhost/connect.php';
  getMenUrl: String = 'http://localhost/men.php';
  addOneUrl: String = 'http://localhost/addItem.php';
  deleteOneUrl: String = 'http://localhost/delete.php';
  editOneUrl: String = 'http://localhost/edit.php';
  registerUrl: String = 'http://localhost/register.php';
  searchUrl: String = 'http://localhost/search.php';
  loginUrl: String = 'http://localhost/login.php';


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

  getMen() {
    return this.http.get(`${this.getMenUrl}`).pipe(
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
    return this.http.post(`${this.deleteOneUrl}`, JSON.stringify(data), {responseType: 'text'}).pipe(
      map((res: any) => {
        return res;
      })
    )
  }

  editOne(data: Shoes) {
    return this.http.post(`${this.editOneUrl}`, JSON.stringify(data), {responseType: 'text'}).pipe(
      map((res) => {
        return res;
      })
    )
  }

  register(value: object) {
    return this.http.post(`${this.registerUrl}`, JSON.stringify(value), {responseType: 'text'}).pipe(
      map(res => {
        return res.trim();
      })
    )
  }

  search(value: string) {
    let param = new HttpParams().set("search", value);
    return this.http.get(`${this.searchUrl}`, {params: param, responseType: 'json'}).pipe(
      map(res => {
        return res;
      })
    )
  }

  login(value: any) {
    return this.http.post(`${this.loginUrl}`, JSON.stringify(value), {responseType: 'text'}).pipe(
      map(res => {
        return res;
      })
    )
  }

}
