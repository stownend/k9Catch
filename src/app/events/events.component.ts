import { Component, OnInit } from '@angular/core';
import { K9Event } from '../models/k9event';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  events: K9Event[] = [];

  constructor(private eventService: EventService) { 
  }

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(events => {
        this.events = events;
      
        console.log(this.events);
      });
  }

}
