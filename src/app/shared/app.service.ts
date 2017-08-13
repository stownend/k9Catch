import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  //dataService: string = "mockData";
  //dataService: string = "http://localhost:55745/api";
  dataService: string = "https://smtk9service.azurewebsites.net/api";

  loggedOn: boolean = false;
  adminMode: boolean = true;

  constructor() { }

}
