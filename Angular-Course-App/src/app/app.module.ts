import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { SuccessComponent } from './Success/Success.component';
import { WarningMessageComponent } from './warning/warning-message.component';
import { DataBindingComponent } from './assignment2/data-binding.component';
import { DirectivesComponent } from './assignment3/directives.component';




@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    WarningMessageComponent,
    DataBindingComponent,
    DirectivesComponent,
    
   

  ],
  imports: [
    BrowserModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [DirectivesComponent]
})
export class AppModule { }
