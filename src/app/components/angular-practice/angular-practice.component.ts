import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-practice',
  templateUrl: './angular-practice.component.html',
  styleUrls: ['./angular-practice.component.css']
})
export class AngularPracticeComponent implements OnInit {

  ngOnInit() {
  }
  collection: any;
  constructor() {
    this.collection = [{ id: 1 }, { id: 2 }, { id: 3 }];
  }

  getItems() {
    this.collection = this.getItemsFromServer();
  }

  getItemsFromServer() {
    return [{ id: 5 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 1}];
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

}
