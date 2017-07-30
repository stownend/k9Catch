import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // See http://digitaldrummerj.me/angular-tutorial/
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerModule } from 'angular2-material-datepicker'
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MembersComponent } from './members/members.component';
import { MapComponent } from './map/map.component';
import { EventService } from './shared/event.service';
import { UtilService } from './shared/util.service';
import { LogService } from './shared/log.service';
import { AppService } from './shared/app.service';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { EventCardComponent } from './events/event-card/event-card.component';
import { TestComponent } from './events/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuBarComponent,
    GalleryComponent,
    MembersComponent,
    MapComponent,
    UpgradeComponent,
    EventsComponent,
    ContactComponent,
    NewsComponent,
    EventCardComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DatepickerModule,
    Ng2Bs3ModalModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDvO9TRr0j0NvPjYhX_ZCA8xTP3dD0aA40'
    })
  ],
  providers: [EventService, UtilService, LogService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { 

 
}
