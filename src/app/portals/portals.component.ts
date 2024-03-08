import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-portals',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './portals.component.html',
  styleUrl: './portals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortalsComponent {
  openLink(link: string): void {
    window.open(link, '_blank');
  }
}
