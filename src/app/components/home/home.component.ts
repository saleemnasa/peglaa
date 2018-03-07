import { Component, OnInit } from '@angular/core';
import { Globals } from '../../constants/app.globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private  globals: Globals) { }

  ngOnInit() {
  }

}
