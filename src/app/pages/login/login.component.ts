import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(): void {
    // Perform login authentication here
    // For simplicity, let's assume login is successful and navigate to the dashboard
    this.router.navigateByUrl('/dashboard');
  }
}
