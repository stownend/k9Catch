import { Injectable } from '@angular/core';
import { UtilService } from '../shared/util.service';

@Injectable()
export class LogService {

  public level: LogLevel = LogLevel.None;

  constructor(private utilService: UtilService) { }

  debug(message: string) {
    if (this.level == LogLevel.Debug) {
      this.log(message, "DEBUG");
    }
  }

  debugObj(obj: any) {

    if (this.level == LogLevel.Debug) {
      console.log(this.utilService.timestamp() + " [DEBUG OBJECT] ");
      console.log(obj);
    }
  }

  info(message: string) {
    if (this.level == LogLevel.Info) {
      this.log(message, "INFO");
    }
  }

  warn(message: string) {
    if (this.level == LogLevel.Warn) {
      this.log(message, "WARN");
    }
  }

  error(message: string) {
    if (this.level == LogLevel.Error) {
      this.log(message, "ERROR");
    }
  }


  private log(message: string, level: string) {
    console.log(this.utilService.timestamp() + " [" + level.toUpperCase() + "] " + message)
  }
 
}

export enum LogLevel {
  None,
  Debug,
  Info,
  Warn,
  Error
}
