import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { SectionComponent } from '../section/section.component';
import { MatInput } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-expansion-panel',
  standalone: true,
  imports: [
    MatAccordion,
    MatExpansionModule,
    MatIcon,
    MatFormFieldModule,
    MatDatepickerModule,
    SectionComponent,
    MatInput,
    MatButton,
  ],
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
})
export class ExpansionPanelComponent {
  readonly panelOpenState = signal(false);

  step = signal(0);

  setStep(index: number) {
    this.step.set(index);
  }

  nextStep() {
    this.step.update((i) => i + 1);
  }

  prevStep() {
    this.step.update((i) => i - 1);
  }
}
