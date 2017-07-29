import { Component, OnInit } from '@angular/core';
import { Logger } from "angular2-logger/core";
import { LogService } from './shared/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to K9CATCH';

  constructor(private logger: Logger, private logService: LogService) {
  }

  ngOnInit() {
      this.logger.level = this.logger.Level.DEBUG;

      this.logService.debug("Debug is all set!");
      this.logService.warn("A warning message");
  }
}
