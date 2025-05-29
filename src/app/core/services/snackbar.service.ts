import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private readonly snackbar = inject(MatSnackBar);

  error(message : string, action: string = 'Close', duration: number = 5000): void {
    this.snackbar.open(message, action, {
      duration,
      panelClass: ['snackbar-error']
    });
  }

  success(message: string, action: string = 'OK', duration: number = 5000): void {
    this.snackbar.open(message, action, {
      duration,
      panelClass: ['snackbar-success']
    });
  }
}
