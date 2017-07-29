import { Component, OnInit } from '@angular/core';
import { K9Event } from '../models/k9event';
import { EventService } from '../shared/event.service';
import { UtilService } from '../shared/util.service';
import { LogService } from '../shared/log.service';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  events: K9Event[] = [];

  public appService: AppService;

  constructor(
    private _appService: AppService,
    private eventService: EventService, 
    private utilService: UtilService,
    private logService: LogService) { 

      this.appService = _appService;
  }

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(events => {
        this.events = events;
      
        this.logService.debugObj(this.events);
      });
  }

  backupEvent: K9Event = null;

  addEvent() {
    let newEvent: K9Event = new K9Event;

    newEvent.id = this.getLowestNegativeId();
    newEvent.lat = 53.565926;
    newEvent.lng = -1.7330246;
    newEvent.zoom = 8;

    this.events.splice(0, 0, newEvent);

    this.startEdit(newEvent);

  }

  editing(event: K9Event): boolean {
    return this.backupEvent != null && this.backupEvent.id == event.id;
  }

  editingInProgress(): boolean {
    return this.backupEvent != null;
  }

  startEdit(event: K9Event) {
    this.backupEvent = Object.assign({}, event);
  }

  abortEdit(): K9Event {
    var originalEvent = this.backupEvent;
    this.backupEvent = null;

    return originalEvent;
  }

  saveEdit(event: K9Event) {
    // Nothing to do yet. Will send to service but just clear out the backup for now
    this.backupEvent = null;
  }

  deleteEvent(event: K9Event) {
    // Just remove from array for now. 
    // Will delete using service

    this.logService.debug("Parent deleting : " + event.id + " : " + event.eventName);

    var position = this.utilService.indexOf(this.events, (eventToCompare) => { return eventToCompare.id == event.id;});

    this.logService.debug("at position : " + position);

    this.events.splice(position, 1);

    this.backupEvent = null;
  }

  private getLowestNegativeId(): number {

    let lowestId: number = this.events[0].id;
    let newId = lowestId >= 0 ? -1 : lowestId - 1;

    this.logService.debug("New Id : " + newId);

    return newId;
  }
}
