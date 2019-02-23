import {Component, HostListener} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  stateButtonToTop = false;
  loadingRouter = true;

  constructor(private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  @HostListener('window:scroll', ['$event'])
  scrollMe(event) {
    this.stateButtonToTop = window.scrollY > 500;
  }

  scrollToTop(event) {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 5);
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart)
      this.loadingRouter = true;
    if (event instanceof NavigationEnd)
      this.loadingRouter = false;

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel)
      this.loadingRouter = false;
    if (event instanceof NavigationError)
      this.loadingRouter = false;
  }
}
