import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  dataService: string = "mockData";
  loggedOn: boolean = false;

  constructor() { }

}
