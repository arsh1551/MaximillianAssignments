import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  Username:string="";
  resetUser(event:any)
  {
    this.Username="";
    console.log(event);

  }

  constructor() { }

  ngOnInit() {
  }

}
