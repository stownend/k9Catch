import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
    { path: '', children: [], component: WelcomeComponent },
    { path: 'members', children: [], component: MembersComponent },
    { path: 'gallery', children: [], component: GalleryComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }