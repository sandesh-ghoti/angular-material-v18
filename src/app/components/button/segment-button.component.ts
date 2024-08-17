import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIcon } from '@angular/material/icon';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-segement-button',
  template: `
    <app-section title="segmented buttons">
      <div class="segmented-buttons-wrapper">
        <mat-button-toggle-group value="day">
          <mat-button-toggle value="day">Day</mat-button-toggle>
          <mat-button-toggle value="week">Week</mat-button-toggle>
          <mat-button-toggle value="month">Month</mat-button-toggle>
        </mat-button-toggle-group>
      </div>
      <div class="segmented-buttons-wrapper">
        <mat-button-toggle-group
          [value]="['day', 'week']"
          multiple
          hideMultipleSelectionIndicator
        >
          <mat-button-toggle value="day">Day</mat-button-toggle>
          <mat-button-toggle value="week">Week</mat-button-toggle>
          <mat-button-toggle value="month">Month</mat-button-toggle>
        </mat-button-toggle-group>
      </div>
    </app-section>
  `,
  standalone: true,
  imports: [SectionComponent, MatButtonToggleModule, MatIcon],
  styles: `
      .segmented-buttons-wrapper{
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin: 1rem 0;
        width: fit-content;
      }
    `,
})
export class SegementButtonComponent {}
