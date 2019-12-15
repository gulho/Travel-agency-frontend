import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {Event} from 'ng-bootstrap/utils/facade/browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private isManagement = false;
  private navBarActive: string;

  constructor(private router: Router) {
    this.router.events.subscribe( val => {
      if (val instanceof NavigationStart) {
        //console.log(val);
        if (val.url.startsWith('/management/')) {
          this.isManagement = true;
          this.navBarActive = val.url.substring(12);
          //console.log(this.navBarActive);
        } else {
          this.navBarActive = val.url.substring(1);
          //console.log(this.navBarActive);
        }
        console.log(this.navBarActive);
      }} );
  }

  ngOnInit() {
  }

  private onRouteChange() {
  }

}
