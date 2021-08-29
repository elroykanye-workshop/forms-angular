import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sku-form',
  templateUrl: './sku-form.component.html',
  styleUrls: ['./sku-form.component.css']
})
export class SkuFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    console.log("You submitted value: ", form)

  }
}
