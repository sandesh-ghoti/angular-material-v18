import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.scss',
})
export class ToasterComponent {
  snackbarService = inject(MatSnackBar);

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  open(
    message: string,
    action = '',
    config: MatSnackBarConfig = {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    }
  ) {
    return this.snackbarService.open(message, action, config);
  }
}
