import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [SectionComponent, MatIcon, MatIconButton, MatTooltip],
  template: `
    <app-section title="icon buttons">
      <div class="flex-wrapper">
        <button mat-icon-button matTooltip="Surface">
          <mat-icon>light_mode</mat-icon>
        </button>
        <button mat-icon-button class="primary-icon" matTooltip="Primary icon">
          <mat-icon>light_mode</mat-icon>
        </button>
        <button
          mat-icon-button
          class="secondary-icon"
          matTooltip="Secondary icon"
        >
          <mat-icon>light_mode</mat-icon>
        </button>
        <button
          mat-icon-button
          class="tertiary-icon"
          matTooltip="Tertiary icon"
        >
          <mat-icon>light_mode</mat-icon>
        </button>
        <button mat-icon-button class="tonal" matTooltip="Tonal icon">
          <mat-icon>light_mode</mat-icon>
        </button>
        <button mat-icon-button class="warn-icon" matTooltip="Warn">
          <mat-icon>light_mode</mat-icon>
        </button>
      </div>
    </app-section>
  `,
  styles: `
    .icon-buttons-wrapper{
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin: 1rem 0;
        width: fit-content;
      }
  `,
})
export class IconButtonComponent {}
