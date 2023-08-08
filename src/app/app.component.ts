import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'phoneorderingsystem';

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  login(role: string) {
    if (role === 'Admin') {
      const simulatedEmail = 'admin@example.com';
      const simulatedPassword = 'admin123';

      // Call the login method from AuthService
      if (this.authService.login(simulatedEmail, simulatedPassword)) {
        alert('Login as Admin Successfully');
        this.router.navigate(['/admin']);
      } else {
        alert('Invalid email or password. Please try again.');
      }
    } else {
      alert('Please try again with a valid role.');
    }
  }

  private validateCredentials(email: string, password: string): boolean {
    return email === 'admin@example.com' && password === 'admin123';
  }
}
