import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Shoes } from '../shoe';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  localData: any;

  loading = false;
  success = false;
  
// Create the form controls for the add items CMS
  createFormGroup(){
    return new FormGroup({
      name: new FormControl(this.localData.name, [Validators.required]),
      size: new FormControl(this.localData.size, [Validators.required]),
      price: new FormControl(this.localData.price, [Validators.required]),
      gender: new FormControl(this.localData.gender, [Validators.required]),
      discount: new FormControl(this.localData.discount, [Validators.required]),
      image: new FormControl(this.localData.image, [Validators.required]),
      stock: new FormControl(this.localData.stock, [Validators.required]),
      type: new FormControl(this.localData.type, [Validators.required]),
      keywords: new FormControl(this.localData.keywords, [Validators.required]),
    });

  }
  editForm: FormGroup;
  
  constructor(public dialogRef: MatDialogRef<EditFormComponent>,
    private formBuilder: FormBuilder, private backEndService: BackendService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Shoes) {
      this.localData = data;
      console.log(this.localData);
      this.editForm = this.createFormGroup();
   }

  ngOnInit(): void {
  }

  // Send the form information to the server
  onEdit() {
    this.loading = true;

    let formValues = this.editForm.value;

    const formData = {id : this.localData._id.$oid, formValues};
    
    this.backEndService.editOne(formData).subscribe({
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
