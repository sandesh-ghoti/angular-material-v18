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
];
