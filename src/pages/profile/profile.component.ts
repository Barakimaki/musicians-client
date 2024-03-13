import { Component, inject } from '@angular/core';
import { AuthService, ButtonComponent } from '../../shared';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  authService = inject(AuthService);

  isAvatarUpdate = false;

  selectedFiles?: FileList;

  addNewAvatar() {
    this.isAvatarUpdate = !this.isAvatarUpdate;
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload() {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.authService.pushFileToStorage(file);
      }

      this.addNewAvatar();
    }
  }
}
