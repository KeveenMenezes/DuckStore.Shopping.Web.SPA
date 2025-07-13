import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-server-error',
  imports: [
    MatCard
  ],
  templateUrl: './server-error.component.html',
  styleUrl: './server-error.component.scss'
})
export class ServerErrorComponent {
  error?: any;

  constructor() {
    const navigation = history.state;
    if (navigation && navigation.error) {
      this.error = navigation.error;
    }
  }
}
