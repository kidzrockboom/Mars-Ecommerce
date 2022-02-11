import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component {
  // Code for the Register and Login popup/Modal functionality

  constructor(public dialog: MatDialog) { }

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
