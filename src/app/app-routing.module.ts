import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MembersComponent } from './members/members.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
    { path: '', children: [], component: WelcomeComponent },
    { path: 'members', children: [], component: MembersComponent },
    { path: 'events', children: [], component: EventsComponent },
    { path: 'upgrade', children: [], component: UpgradeComponent },
    { path: 'gallery', children: [], component: GalleryComponent },
    { path: 'news', children: [], component: NewsComponent },
    { path: 'contact', children: [], component: ContactComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }