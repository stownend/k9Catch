import { Component, OnInit } from '@angular/core';
import { LogService } from './shared/log.service';
import { LogLevel } from './shared/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to K9CATCH';

  constructor(private logService: LogService) {
  }

  ngOnInit() {
      this.logService.level = LogLevel.Debug;

      this.logService.debug("Debug is all set!");
      this.logService.warn("A warning message");
  }
}
