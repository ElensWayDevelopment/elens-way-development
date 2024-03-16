import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-psychologist',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './psychologist.component.html',
  styleUrl: './psychologist.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PsychologistComponent {
  @Input() isDesktop = true;
}
