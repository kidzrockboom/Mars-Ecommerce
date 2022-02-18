import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //Creating a register form for a Dialog pop-up using angular reactive forms

  // Creating the pattern for the form and the required validations
  createFormGroup() {
    return new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, 
        Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")])
    });
  }

  loading = false;
  success = false;
  failure = false;
  feedback: String = "";

  regForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public backEndService: BackendService) { 
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
  
  // Store the customers registration details in the database
  onSubmit() {
    this.loading = true;

    this.regForm.value.orders = [];
    
    let value = this.regForm.value;


    this.backEndService.register(value).subscribe({
      next: (res) => {
        this.feedback = res;
        if(this.feedback.trim() === "Account Successfully Created."){
          this.success = true;
        } else if(this.feedback.trim() !== "Account Successfully Created.") {
          this.failure = true;
        }
          
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.loading = false;
  }

}
