import { Component, computed, inject } from '@angular/core';
import {
  MatDatepickerModule,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SectionComponent } from '../section/section.component';
import { InputApperenceService } from '../../services/input-apperence.service';
import { ButtonComponent } from '../button/button.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [
    MatDatepickerModule,
    SectionComponent,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerToggle,
    ButtonComponent,
    MatSlideToggleModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './datepicker.component.html',
})
export class DatepickerComponent {
  apperenceService = inject(InputApperenceService);
  apperence = this.apperenceService.apperence;
  slideToggleLabel = computed(() =>
    this.apperence() === 'outline' ? 'Outlined Inputs' : 'Filled Inputs'
  );
}
