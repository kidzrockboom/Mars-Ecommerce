import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  loading = false;
  success = false;
  
// Create the form controls for the add items CMS
  createFormGroup(){
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      size: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      discount: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      stock: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      keywords: new FormControl('', [Validators.required]),
    });

  }
  addForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private backEndService: BackendService) {
    this.addForm = this.createFormGroup();
   }

  ngOnInit(): void {
  }

  // Send the form information to the server
  onAdd() {
    this.loading = true;

    const formData = this.addForm.value;

    
    this.backEndService.addOne(formData).subscribe({
      next: (res) => {
        console.log(res);
        this.success = true;
      },
      error: (err) => {
        console.log(err);
      }
    })
    
    this.loading = false;

  }

}
