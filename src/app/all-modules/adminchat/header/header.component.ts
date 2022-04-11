import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { FunctioninvokeService } from '../functioninvoke.service';

declare const $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  url: string;
  url1;
  activeRoute: string;
  active2Route;
  constructor(
    private router: Router,
    private functionInvoke: FunctioninvokeService
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        $('.main-wrapper').removeClass('slide-nav');
        $('.sidebar-overlay').removeClass('opened');
        const url = event.url.split('/');
        this.url = url[1];
        this.url1 = url[2];
        this.activeRoute = this.url;
        this.active2Route = this.url1;
      }
    });
  }
  ngOnInit(): void {}
  firstComponentFunction() {
    this.functionInvoke.onFirstComponentButtonClick();
  }
  toggle() {
    // this.functionInvoke.toggleClick();
  }
}
