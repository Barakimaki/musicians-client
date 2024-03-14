import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../shared';
import { UserComponent } from '../../entities';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, UserComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  router = inject(Router);
  authService = inject(AuthService);

  exit() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigateByUrl('/auth');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
