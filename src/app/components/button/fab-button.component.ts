import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { MatIcon } from '@angular/material/icon';
import { MatFabButton, MatMiniFabButton } from '@angular/material/button';

@Component({
  selector: 'app-fab-button',
  template: `
    <app-section title="fab buttons">
      <div class="flex-wrapper">
        <button mat-fab matTooltip="Surface">
          <mat-icon>light_mode</mat-icon>
        </button>
        <button mat-fab extended>
          <mat-icon>navigation</mat-icon>
          Navigate
        </button>
        <button mat-mini-fab>
          <mat-icon>navigation</mat-icon>
        </button>
      </div>
    </app-section>
  `,
  styles: `.flex-wrapper {
    align-items: center;
  }`,
  imports: [SectionComponent, MatIcon, MatMiniFabButton, MatFabButton],
  standalone: true,
})
export class FabButtonComponent {}
