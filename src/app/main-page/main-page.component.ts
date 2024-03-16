import {
  BreakpointObserver,
  BreakpointState,
  LayoutModule
} from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NavigationItemWithLink } from '../main-page.types';
import { AboutTherapyComponent } from './about-therapy/about-therapy.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { GroupConsultationComponent } from './group-consultation/group-consultation.component';
import { IndividualConsultationsComponent } from './individual-consultations/individual-consultations.component';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcatListComponent } from './podcat-list/podcat-list.component';
import { PortalComponent } from './portal/portal.component';
import { PsychologistComponent } from './psychologist/psychologist.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
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
    FooterComponent,
    LayoutModule
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  isDesktop = true;

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

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 1280px)'])
      .subscribe((state: BreakpointState) => {
        this.isDesktop = state.matches;
      });
  }

  openLink(link: string): void {
    window.open(link, '_self');
  }
}
