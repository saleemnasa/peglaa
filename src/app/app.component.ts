import { Component } from '@angular/core';
import { Globals } from './constants/app.globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private  Globals: Globals){

  }
  globals = this.Globals;
  title = 'Peglaa';
}
