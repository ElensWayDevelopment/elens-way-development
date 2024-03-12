import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-psychologist',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './psychologist.component.html',
  styleUrl: './psychologist.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PsychologistComponent {}