import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(email: string, password: string): boolean {
    if (this.authenticateUser(email, password)) {
      this.loggedIn = true; // Update loggedIn status
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.loggedIn = false; // Update loggedIn status
  }

  authenticateUser(email: string, password: string): boolean {
    // Simulated authentication logic
    return email === 'admin@example.com' && password === 'admin123';
  }
}
