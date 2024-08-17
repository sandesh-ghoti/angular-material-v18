import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'button', pathMatch: 'full' },
  {
    path: 'button',
    loadComponent: () =>
      import('./components/button/button.component').then(
        (c) => c.ButtonComponent
      ),
  },
  {
    path: 'card',
    loadComponent: () =>
      import('./components/card/card.component').then((c) => c.CardComponent),
  },
  {
    path: 'datepicker',
    loadComponent: () =>
      import('./components/datepicker/datepicker.component').then(
        (c) => c.DatepickerComponent
      ),
  },
  {
    path: 'table',
    loadComponent: () =>
      import('./components/table/table.component').then(
        (c) => c.TableComponent
      ),
  },
  {
    path: 'expansion-panel',
    loadComponent: () =>
      import('./components/expansion-panel/expansion-panel.component').then(
        (c) => c.ExpansionPanelComponent
      ),
  },
  {
    path: 'toaster',
    loadComponent: () =>
      import('./components/toaster/toaster.component').then(
        (c) => c.ToasterComponent
      ),
  },
  {
    path: 'text-field',
    loadComponent: () =>
      import('./components/text-field/text-field.component').then(
        (c) => c.TextFieldComponent
      ),
  },
];
