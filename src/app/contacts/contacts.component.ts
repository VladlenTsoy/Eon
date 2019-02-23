import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit {
  title = 'My first AGM project';
  lat = 41.29242;
  lng = 69.27517;

  constructor() {
  }

  ngOnInit() {
  }

}
