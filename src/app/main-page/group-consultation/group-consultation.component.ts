import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-group-consultation',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './group-consultation.component.html',
  styleUrl: './group-consultation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupConsultationComponent {
  openLink(link: string): void {
    window.open(link, '_blank');
  }
}
