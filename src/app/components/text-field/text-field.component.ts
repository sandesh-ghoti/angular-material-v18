import { Component, computed, inject, signal } from '@angular/core';
import {
  MatError,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SectionComponent } from '../section/section.component';
import { InputApperenceService } from '../../services/input-apperence.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { map, startWith } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

interface Person {
  name: string;
}

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [
    SectionComponent,
    MatButtonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatIcon,
    MatLabel,
    MatSelect,
    MatOption,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatError,
    AsyncPipe,
  ],
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent {
  apperenceService = inject(InputApperenceService);
  apperence = this.apperenceService.apperence;
  slideToggleLabel = computed(() =>
    this.apperence() === 'outline' ? 'Outlined Inputs' : 'Filled Inputs'
  );

  myControl = new FormControl<Person | string>('');

  options: Person[] = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];

  filteredOptions = this.myControl.valueChanges.pipe(
    startWith(''),
    map((value) => {
      const name = typeof value === 'string' ? value : value?.name;
      // return filtered options, if name undefined then return whole options
      return name ? this._filter(name as string) : this.options.slice();
    })
  );

  private _filter(value: string): Person[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }
  displayFn(user: Person): string {
    return user && user.name ? user.name : '';
  }

  hide = signal<boolean>(true);
  toggleHide() {
    this.hide.update((hide) => !hide);
  }

  /** mat error component  */
  errorFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  getErrorMessage() {
    if (this.errorFormControl.hasError('required')) {
      return 'You must enter a value';
    }
    return this.errorFormControl.hasError('email') ? 'Not a valid email' : '';
  }
}
