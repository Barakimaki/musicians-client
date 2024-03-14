import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../features';
import { AuthService } from '../shared';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, NavBarComponent],
})
export class AppComponent implements OnInit {
  authService = inject(AuthService);
  router = inject(Router);

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
          avatar: user.photoURL!,
          userID: user.uid!,
        });
        // this.router.navigateByUrl('/');
      } else {
        this.authService.currentUserSig.set(null);
        this.router.navigateByUrl('/auth');
      }
    });
  }
  clickButton() {
    alert('hello!');
  }
}
