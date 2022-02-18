import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {  

  @Input() name = '';
  @Output() items = new EventEmitter<any>();
  
  param: string = "";
  // Code to search database and retrieve items that match search function 
  constructor(public http: BackendService, private router: Router) {}
  onSubmit(): void {
    
    // Checks if the search string is empty if Yes do nothing
    if (this.param.length < 1) {
      return;
    }
    
    // If not send a request with the param then pass that info to search page 
    this.http.search(this.param).subscribe({
      next: (res) => {
        if(this.router.url !== '/search') {
          this.router.navigate(['search'], {state: res});
        } else {
          //emit event to send data to my search component
          console.log("in search");
          this.items.emit(res);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })


    // Changed search parameter back to empty string
    this.param = "";

  }
}
