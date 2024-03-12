import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about-therapy',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './about-therapy.component.html',
  styleUrl: './about-therapy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutTherapyComponent {}
