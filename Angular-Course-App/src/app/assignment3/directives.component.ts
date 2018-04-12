import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  displayPara=false;
  buttonClicks=[];
  //count=0;
  togglePara()
  {
    this.displayPara=!this.displayPara
   // this.count=this.count+1
   // this.buttonClicks.push("Button Click number: "+this.count)
    this.buttonClicks.push(this.buttonClicks.length+1);
    //this.showButtonClicks()
  }
 /* getColor()
{
  if (this.buttonClicks.length>=5)
  {
    return 'blue';
  }
  else
  {
    return 'transparent';
  }

}*/
  constructor() { }

  ngOnInit() {
  }

}
