import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  stateButtonToTop = false;

  @HostListener('window:scroll', ['$event'])
  scrollMe(event) {
    if (window.scrollY > 500)
      this.stateButtonToTop = true;
    else
      this.stateButtonToTop = false;
  }

  scrollToTop(event) {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 9);
  }
}
