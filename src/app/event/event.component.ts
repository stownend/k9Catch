import { Component, OnInit, Input } from '@angular/core';
import { K9Event } from '../models/k9event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() event: K9Event;
  // event: K9Event = {
  //   eventName: "Our second meet up",
  //   organiser: "Jean Luc Picard",
  //   placeName: "The Picard's gaff",
  //   when: new Date(),
  //   addressLine1: "The bridge",
  //   addressLine2: "Deck 1",
  //   addressLine3: "USS Enterprise",

  //   lat: 53.70488,
  //   lng: -0.867208,
  //   zoom: 16
  // };


  constructor() { 
  }

  ngOnInit() {
  }

}
