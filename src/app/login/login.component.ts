import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class LoginComponent {
  username = ''; // This will hold the email
  password = '';

  constructor(private userService: UserService, private router: Router) {}

  onLogin() {
    const loginData = {
      email: this.username.trim(),
      password: this.password.trim(),
    };
  
    console.log('Login Data:', loginData); // Debugging purposes
  
    this.userService.login(loginData).subscribe({
      next: (response: any) => {
        console.log('Login Response:', response); // Log the response for debugging
  
        if (response === 'Login successful!') {
          alert('Login successful!');
          this.router.navigate(['/home']); // Redirect to the home component
        } else {
          alert('Invalid email or password');
        }
      },
      error: (error: any) => {
        console.error('Login Error:', error); // Log the error for debugging
      },
    });
  }
  
  
  
  
  
  
}
