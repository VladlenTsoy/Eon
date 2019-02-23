import {Component, OnInit} from '@angular/core';
import {NzDrawerService} from 'ng-zorro-antd';
import {SidebarComponent} from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  constructor(private drawerService: NzDrawerService) {
  }

  ngOnInit() {
  }

  openComponent(): void {
    const drawerRef = this.drawerService.create<SidebarComponent, { value: string }, string>({
      nzTitle: 'Меню',
      nzPlacement: 'left',
      nzBodyStyle: {padding: 0},
      nzContent: SidebarComponent,
    });

    drawerRef.afterOpen.subscribe(() => {
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data);
    });
  }

}
