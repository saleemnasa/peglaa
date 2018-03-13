import { Component, OnInit } from '@angular/core';
import { Globals } from '../../constants/app.globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private Globals: Globals) { }
  globals = this.Globals;

  ngOnInit() {
  }

}
