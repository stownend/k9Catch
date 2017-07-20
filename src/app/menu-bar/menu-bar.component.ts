import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  isCollapsed: boolean = false;
  isVisible: boolean = !this.isCollapsed;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isCollapsed = true;
    this.isVisible = true;
  }

  hideCollapsedMenu() {
    if (this.isCollapsed) {
      this.isVisible = false;
    }
  }

}
