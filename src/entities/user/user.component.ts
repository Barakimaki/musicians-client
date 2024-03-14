import { Component, Input, OnInit, inject } from '@angular/core';
import { AuthService, UserInterface } from '../../shared';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  @Input() userID!: string;

  authService = inject(AuthService);

  user!: UserInterface;

  ngOnInit() {
    if (this.userID === this.authService.currentUserSig()?.userID) {
      this.user = this.authService.currentUserSig() as UserInterface;
    }
  }
}
