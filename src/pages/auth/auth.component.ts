import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, ButtonComponent } from '../../shared';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = '';

  authForm!: FormGroup;

  authService = inject(AuthService);
  router = inject(Router);

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [
        this.isLoginMode ? Validators.nullValidator : Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40),
      ]),
    });
  }

  ngOnDestroy() {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    const email = this.authForm.value.email;
    const username = this.authForm.value.username;
    const password = this.authForm.value.password;
    if (this.isLoginMode) {
      this.authService.login(email, password).subscribe({
        next: () => {
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.authService.register(email, username, password).subscribe({
        next: () => {
          this.isLoginMode = true;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
