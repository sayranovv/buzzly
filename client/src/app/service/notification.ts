import {inject, Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class Notification {

  private snackBar = inject(MatSnackBar);

  public showSnackBar(message: string): void {
    this.snackBar.open(message, undefined, {
      duration: 2000
    })
  }
}
