import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logout(): void {
    if (window.sessionStorage) {
      window.sessionStorage.clear();
    }
    if (window.localStorage) {
      window.localStorage.clear();
    }

    window.location.href = `${environment.cognito.logoutUrl}?client_id=${environment.cognito.clientId}&logout_uri=${encodeURIComponent(environment.cognito.redirectUrl)}`;
  }
}
