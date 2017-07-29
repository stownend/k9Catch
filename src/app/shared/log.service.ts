import { Injectable } from '@angular/core';
import { Logger } from "angular2-logger/core";
import { UtilService } from '../shared/util.service';

@Injectable()
export class LogService {

  constructor(private logger: Logger, private utilService: UtilService) { }

  debug(message: string) {
    this.logger.debug(this.utilService.timestamp() + " [DEBUG] " + message);
  }

  debugObj(obj: any) {

    if (this.logger.isDebugEnabled) {
      console.log(this.utilService.timestamp() + " [DEBUG OBJECT] ");
      console.log(obj);
    }
  }

  info(message: string) {
    this.logger.info(this.utilService.timestamp() + "  [INFO] " + message);
  }

  warn(message: string) {
    this.logger.warn(this.utilService.timestamp() + "  [WARN] " + message);
  }

  error(message: string) {
    this.logger.error(this.utilService.timestamp() + " [ERROR] " + message);
  }


 
}
