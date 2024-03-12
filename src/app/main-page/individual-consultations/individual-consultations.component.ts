import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-individual-consultations',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './individual-consultations.component.html',
  styleUrl: './individual-consultations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndividualConsultationsComponent {
  openLink(link: string): void {
    window.open(link, '_blank');
  }
}
