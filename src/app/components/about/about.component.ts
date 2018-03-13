import { Component, OnInit } from '@angular/core';
import { Globals } from '../../constants/app.globals';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private Globals: Globals) { }
  globals = this.Globals;

  ngOnInit() {
  }

}
