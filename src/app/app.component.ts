import { Component } from '@angular/core';
import { Globals } from './app.globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private  globals: Globals){

  }
  title = 'Peglaa';
}
