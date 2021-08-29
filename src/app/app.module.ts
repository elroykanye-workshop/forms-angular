import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkuFormComponent } from './components/sku-form/sku-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SkuFormFbComponent } from './components/sku-form-fb/sku-form-fb.component';

@NgModule({
  declarations: [
    AppComponent,
    SkuFormComponent,
    SkuFormFbComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
