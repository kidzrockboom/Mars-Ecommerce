import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //Creating a register form for a Dialog pop-up using angular reactive forms

  regForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  // Creating the pattern for the form and the required validations
  initializeForm(): void {
    this.regForm = this.fb.group({
      firstname: ['',
      Validators.required,
    ],
      lastname: ['',
      Validators.required,
    ],
      email: ['',
      Validators.required,
      Validators.email
    ],
      password: ['',
      Validators.required,
      Validators.minLength(8),
      Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")
    ]
    })

  }
  get email() {
    return this.regForm.get('email');
  }

  get password() {
    return this.regForm.get('password');
  }
  

}
