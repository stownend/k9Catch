import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {

  constructor(private appService: AppService) { 
    appService.loggedOn = true;
  }

  ngOnInit() {
  }

}
