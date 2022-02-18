import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Creating a register form for a Dialog pop-up using angular reactive forms

  // Creating the pattern for the form and the required validations
  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  
  loading = false;
  success = false;
  failure = false;
  feedback: String = "";

  regForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public backEndApi: BackendService) { 
    this.regForm = this.createFormGroup();

  }

  ngOnInit(): void {}

  // Getters for the form values to display custom error messages
  
  get email() {
    return this.regForm.get('email');
  }

  get password() {
    return this.regForm.get('password');
  }
 
  // validate login information with the database
  onSubmit() {
    let details = this.regForm.value;

    this.backEndApi.login(details).subscribe({
      next: (res) => {
        this.feedback = res;
        if(this.feedback.trim() === "Log in Successful."){
          this.success = true;
        } else if(this.feedback.trim() == "Email Incorrect") {
          this.failure = true;
        } else {
          this.failure = true;
        }
          
      },
      error: (err) => {
        console.log(err);
      }
    })
     
  }

}
