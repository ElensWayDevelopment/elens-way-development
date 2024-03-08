import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PortalsComponent } from './portals/portals.component';
import { PodcastComponent } from './podcast/podcast.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'portals',
    component: PortalsComponent
  },
  {
    path: 'podcast',
    component: PodcastComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
