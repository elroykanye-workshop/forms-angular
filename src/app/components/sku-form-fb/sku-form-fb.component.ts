import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sku-form-fb',
  templateUrl: './sku-form-fb.component.html',
  styleUrls: ['./sku-form-fb.component.css']
})
export class SkuFormFbComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['ABC123']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(value: string) : void {
    console.log("You submitted value: ", value)
  }

}
