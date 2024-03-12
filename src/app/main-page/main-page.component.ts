import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PsychologistComponent } from './psychologist/psychologist.component';
import { PodcastComponent } from './podcast/podcast.component';
import { PortalComponent } from './portal/portal.component';
import { AboutTherapyComponent } from './about-therapy/about-therapy.component';
import { IndividualConsultationsComponent } from './individual-consultations/individual-consultations.component';
import { GroupConsultationComponent } from './group-consultation/group-consultation.component';
import { EducationComponent } from './education/education.component';
import { PodcatListComponent } from './podcat-list/podcat-list.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationItemWithLink } from '../main-page.types';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterModule,
    PsychologistComponent,
    PodcastComponent,
    PortalComponent,
    AboutTherapyComponent,
    IndividualConsultationsComponent,
    GroupConsultationComponent,
    EducationComponent,
    PodcatListComponent,
    FooterComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {
  footerItems: NavigationItemWithLink[] = [
    {
      name: '@elens_way',
      link: 'https://www.instagram.com/elens_way/',
      iconName: 'instagram'
    },
    {
      name: '@elens_way',
      link: 'https://t.me/elens_way',
      iconName: 'telegram'
    }
  ];

  openLink(link: string): void {
    window.open(link, '_self');
  }
}
