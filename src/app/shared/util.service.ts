import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  indexOf<T>(list: T[], predicate: (listItem: T) => boolean): number {

    for(var i = 0; i < list.length; i++) {
      if (predicate(list[i]))
        {
          return i;
        }
    }

    return -1;
  }

  timestamp(): string {
    let now = new Date();

    return this.pad(String(now.getHours()), 2) + ":" + this.pad(String(now.getMinutes()), 2) + ":" + this.pad(String(now.getSeconds()), 2) + "." + this.pad(String(now.getMilliseconds()), 3);
  }

  datePart(date: Date): string {
    let dateOnly = date.getFullYear() + "-" + this.pad(String(date.getMonth() + 1), 2) + "-" + this.pad(String(date.getDate()), 2);

    return dateOnly;
  }

  pad(num: string, size: number): string {
    var s = "000000000" + num;
    return s.substr(s.length-size);
  }
}
