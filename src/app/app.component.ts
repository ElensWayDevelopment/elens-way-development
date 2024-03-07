import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [MatIconRegistry],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
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
  menuItems = [
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
      link: '/'
    },
    {
      name: `Портал психологов
      «Ты — это важно»`,
      link: '/'
    },
    {
      name: 'Командные тренинги',
      link: '/'
    }
  ];

  footerItems = [
    {
      name: '@elens_way',
      link: '/',
      iconName: 'instagram'
    },
    {
      name: '@elens_way',
      link: '/',
      iconName: 'telegram'
    }
  ];
}
