import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private userService: UserService, private router: Router) {}

  onRegister() {
    // Check if passwords match
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Prepare registration data
    const registerData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    console.log('Registration Data:', registerData); // Debugging purposes

    // Send registration request
    this.userService.register(registerData).subscribe(
      (response: any) => {
        alert('Registration successful!');
        this.router.navigate(['/login']); // Redirect to login
      },
      (error: any) => {
        console.error('Registration Error:', error);
        alert('Registration failed. Please try again.');
      }
    );
  }
}
