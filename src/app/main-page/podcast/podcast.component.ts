import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PodcastComponent {
  openLink(link: string): void {
    window.open(link, '_self');
  }
}
