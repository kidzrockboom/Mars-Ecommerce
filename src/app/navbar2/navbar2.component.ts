import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { CookieService } from 'ngx-cookie-service';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit{
  // Code for the Register and Login popup/Modal functionality

  constructor(public dialog: MatDialog, public cookieservice: CookieService,
    public http: BackendService) { }

  cookieExist: boolean = this.cookieservice.check('PHPSESSID');

  showLogout = true;

  userName: String = '';

  ngOnInit(): void {
    
    if(this.cookieExist){
      this.getUserName();
      this.showLogout = false;
    } else {
      this.getUserName();
    }
  }

  logout() {

    
  }

  getUserName(){
    this.http.getUser().subscribe({
      next: (res: String) => {
        this.userName = res;
      },
      error: (err) => {
        return err;
      }
    })  
  }

  openRegister() {
    this.dialog.open(RegisterComponent, {
      height: '600px',
      width: '400px'
    });
  }

  openLogin() {
    this.dialog.open(LoginComponent, {
      height: '400px',
      width: '350px'
    })
  }
}
