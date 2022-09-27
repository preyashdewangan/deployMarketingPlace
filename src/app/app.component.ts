import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title!: string;
  myFirstName='preyash';
  constructor() { 
    //this.title=1234;
  }
  changeFirstName(param1: string)
  {
    this.title=param1;
  }
}
