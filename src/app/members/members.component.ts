import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  public appService: AppService;

  constructor(private _appService: AppService) {
    this.appService = _appService;
  }

  ngOnInit() {
  }

}
