import { Component, OnInit } from '@angular/core';
import { Globals } from '../../constants/app.globals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private Globals: Globals) { }
  globals = this.Globals;

  ngOnInit() {
  }

}
