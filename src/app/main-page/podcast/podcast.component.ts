import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
  @Input() isDesktop = true;

  openLink(link: string, targetBlank = false): void {
    window.open(link, targetBlank ? '_blank' : '_self');
  }
}
