import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { K9Event } from '../models/k9event';
import { AppService } from '../shared/app.service';

@Injectable()
export class EventService {

  events: K9Event[];

  constructor(private http: Http, private appService: AppService) { 
    appService.loggedOn = true;
  }

  getEvents() {
    return this.http.get(this.appService.dataService + '/events')
      .map(response => <K9Event[]>response.json().data);
  }
}
