import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  regForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
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
    
  }

}
