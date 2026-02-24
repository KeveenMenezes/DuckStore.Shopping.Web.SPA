import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <img
          src="https://media.giphy.com/media/3HbtyiV6otnLf4WHSN/giphy.gif"
          alt="DuckStore Logo"
          class="mx-auto mb-4 max-h-24"
        />
        <h1 class="text-3xl font-bold mb-2">DuckStore</h1>
        <p class="text-gray-500 mb-6">Faça login para continuar</p>
        <button
          (click)="login()"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-full cursor-pointer"
        >
          Entrar com AWS Cognito
        </button>
      </div>
    </div>
  `,
})
export class LoginComponent {
  private readonly authService = inject(AuthService);

  login(): void {
    this.authService.login();
  }
}
