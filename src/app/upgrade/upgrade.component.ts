import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {

  public appService: AppService;

  constructor(private _appService: AppService) { 
    
    this.appService = _appService;

    this.appService.loggedOn = true;

  }

  ngOnInit() {
  }

}
