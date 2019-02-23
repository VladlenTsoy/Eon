import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  @Input() mode: string;
  @Input() trialLesson: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
