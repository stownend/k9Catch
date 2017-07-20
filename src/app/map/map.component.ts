import { Component, OnInit, Input } from '@angular/core';

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


  constructor() { 
    this.lat = 51.5285582;
    this.lng = -0.2416993;
    this.zoom = 8;
    this.placeName = "Default place";
  }

  ngOnInit() {

  }

}
