import {Component, OnInit, ViewChild} from '@angular/core';
import {NzDrawerRef} from 'ng-zorro-antd';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  @ViewChild('drawerTemplate') drawerTemplate;

  constructor(private drawerRef: NzDrawerRef<string>) {
  }

  ngOnInit() {
  }

  close(): void {
    this.drawerRef.close();
  }
}
