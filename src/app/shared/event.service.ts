import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { K9Event } from '../models/k9event';
import { AppService } from '../shared/app.service';
import { UtilService } from '../shared/util.service';

@Injectable()
export class EventService {

  events: K9Event[];

  constructor(private http: Http, private appService: AppService, private utilService: UtilService) { 
    appService.loggedOn = true;
  }

  getEvents() {
    return this.http.get(this.appService.dataService + '/events')
      .map(response => {

        var events: K9Event[] = response.json();
        
        events.forEach(event => {
          event.when = new Date(event.when);
          event.time = this.utilService.pad(String(event.when.getHours()), 2) + ":" + this.utilService.pad(String(event.when.getMinutes()), 2);
        });
        
        return events; 
      });
  }
}
