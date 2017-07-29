import { Component, OnInit, Input } from '@angular/core';
import { K9Event } from '../../models/k9event';
import { EventsComponent } from '../events.component';
import { LogService } from '../../shared/log.service';
import { AppService } from '../../shared/app.service';
import { Coordinate } from '../../models/coordinate';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  // Gets passed in from a repeater on the events page
  @Input() event: K9Event;
  
  constructor(
    private appService: AppService,
    private eventsComponent: EventsComponent,
    private logService: LogService) { 
  }

  ngOnInit() {
  }

  onMapClick(coord: Coordinate) {
    
    if (this.editing()) {
      this.logService.debug("New lat : " + coord.lat);
      this.logService.debug("New lng : " + coord.lng);
      this.logService.debug("New zoom : " + coord.zoom);

      this.event.lat = coord.lat;
      this.event.lng = coord.lng;
      this.event.zoom = coord.zoom;
    } else {
      this.logService.debug("Not currently editing - map click ignored!");
    }
  }

  editing(): boolean {
    return this.eventsComponent.editing(this.event);
  }

  editingInProgress(): boolean {
    return this.eventsComponent.editingInProgress();
  }

  startEdit() {
    this.eventsComponent.startEdit(this.event);
  }

  abortEdit() {
    this.logService.debug("Aborting : " + this.event.id + " : " + this.event.eventName);
    this.event = Object.assign({}, this.eventsComponent.abortEdit());
  }

  saveEdit() {
    this.eventsComponent.saveEdit(this.event);
  }

  deleteEvent() {
    // Will show a confirm modal
    this.logService.debug("Deleting : " + this.event.id + " : " + this.event.eventName);
    this.eventsComponent.deleteEvent(this.event);
  }


}
