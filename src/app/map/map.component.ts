import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coordinate } from '../models/coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() placeName;
  @Input() lat;
  @Input() lng;
  @Input() zoom;
  @Output() onMapClick: EventEmitter<Coordinate> = new EventEmitter();

  constructor() { 
    this.lat = 51.5285582;
    this.lng = -0.2416993;
    this.zoom = 8;
    this.placeName = "Default place";
  }

  ngOnInit() {

  }

  mapClicked($event) {
      let clickedAt: Coordinate = new Coordinate();
      clickedAt.lat = $event.coords.lat;
      clickedAt.lng = $event.coords.lng;
      clickedAt.zoom = this.zoom;

      this.onMapClick.emit(clickedAt);
  }
}
