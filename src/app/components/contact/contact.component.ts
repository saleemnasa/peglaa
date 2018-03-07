import { Component, OnInit } from '@angular/core';
import { Globals } from '../../constants/app.globals';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private globals: Globals) { }

  ngOnInit() {
  }

}
