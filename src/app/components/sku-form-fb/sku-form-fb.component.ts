import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sku-form-fb',
  templateUrl: './sku-form-fb.component.html',
  styleUrls: ['./sku-form-fb.component.css']
})
export class SkuFormFbComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit(): void {
  }

  onSubmit(value: string) : void {
    console.log("You submitted value: ", value)
  }

}
