import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-podcat-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './podcat-list.component.html',
  styleUrl: './podcat-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PodcatListComponent {
  @Input() isDesktop = true;

  podcastList = [
    {
      name: 'Почему женщины одиноки? Причины расставания и как его пережить? — Юлия Черных',
      url: 'https://www.youtube.com/watch?v=sRmVGyASrLs',
      image: './assets/podcast-1.jpeg'
    },
    {
      name: 're-feel podcast: как принять свой возраст и можно ли сохранить молодость?',
      url: 'https://www.youtube.com/watch?v=Ap4DDtJ9SbM',
      image: './assets/podcast-2.jpeg'
    },
    {
      name: 're-feel podcast: Любовь к себе. \nС чего она начинается и как ее развить?',
      url: 'https://re-feel.mave.digital/ep-15',
      image: './assets/podcast-3.jpeg'
    },
    {
      name: 'Богема и маркетинг: \nО переживаниях предпринимателя',
      url: 'https://bogema.mave.digital/ep-55',
      image: './assets/podcast-4.jpeg'
    },
    {
      name: 'Artcoin: Как найти новые смыслы \nв творчестве',
      url: 'https://artcoin.mave.digital/ep-44',
      image: './assets/podcast-5.jpeg'
    },
    {
      name: 'Т-Ж: Как выглядит стратегия выживанияв кризис?',
      url: 'https://soundstream.media/clip/kak-vyglyadit-strategiya-vyzhivaniya-v-krizis-s-tochki-zreniya-finansov-kar-yery-i-psikhologii',
      image: './assets/podcast-6.jpeg'
    },
    {
      name: 'Чай с психологом: Есть ли у вас эмоциональный интеллект?',
      url: 'https://soundstream.media/clip/yest-li-u-vas-emotsional-nyy-intellekt-s-psikhologom-yelenoy-mitskevich',
      image: './assets/podcast-7.jpeg'
    }
  ];

  openLink(link: string): void {
    window.open(link, '_self');
  }
}
