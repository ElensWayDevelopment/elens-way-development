import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavigationItemWithLink } from './main-page.types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    MatSidenavModule
  ],
  providers: [MatIconRegistry],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router
  ) {
    this.matIconRegistry.addSvgIcon(
      'hamburger-4',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        './assets/hamburger-4.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'arrow-bottom-right',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        './assets/arrow-bottom-right.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/instagram.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'telegram',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/telegram.svg')
    );
  }
  menuItems: NavigationItemWithLink[] = [
    {
      name: 'Консультации',
      link: '/'
    },
    {
      name: `Подкаст
      «Ты — это важно»`,
      link: '/'
    },
    {
      name: `YouTube-канал`,
      link: 'https://www.youtube.com/@elens_way'
    },
    {
      name: `Портал психологов
      «Ты — это важно»`,
      link: '/portals',
      isRouterNavigation: true
    },
    {
      name: 'Командные тренинги',
      link: '/'
    }
  ];

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

  navigateToLink(linkItem: NavigationItemWithLink, sidenav: MatSidenav): void {
    if (!linkItem.isRouterNavigation) {
      window.open(linkItem.link, '_blank');
    } else {
      this.router.navigate([linkItem.link]);
    }

    sidenav.close();
  }
}
