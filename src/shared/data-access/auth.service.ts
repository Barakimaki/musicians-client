import { Injectable, inject, signal } from '@angular/core';
import {
  Auth,
  user,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import {
  Storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from '@angular/fire/storage';
import { Observable, from } from 'rxjs';
import { UserInterface } from './user/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);
  storage = inject(Storage);

  user$ = user(this.firebaseAuth);
  currentUserSig = signal<UserInterface | null | undefined>(undefined);

  register(
    email: string,
    username: string,
    password: string
  ): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((response) => {
      updateProfile(response.user, {
        displayName: username,
        photoURL:
          'https://firebasestorage.googleapis.com/v0/b/musicians-50a11.appspot.com/o/FPO-Default-Avatar.png?alt=media&token=b7cc76d0-82cf-4a3c-b453-456e0520c2ab',
      });
    });

    return from(promise);
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(({ user }) => {
      if (user.email && user.displayName && user.photoURL) {
        this.currentUserSig.set({
          email: user.email,
          username: user.displayName,
          avatar: user.photoURL,
          userID: user.uid,
        });
      }
    });

    return from(promise);
  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth).then(() => {
      this.currentUserSig.set(null);
    });

    return from(promise);
  }

  pushFileToStorage(file: File): Observable<void> {
    const storageRef = ref(this.storage, this.currentUserSig()?.email);
    const promise = uploadBytes(storageRef, file).then(() => {
      getDownloadURL(storageRef).then((downloadUrl) => {
        updateProfile(this.firebaseAuth.currentUser!, {
          photoURL: downloadUrl,
        });
      });
    });
    return from(promise);
  }

  getUserData(userID: string): UserInterface {
    const promise = this.firebaseAuth;

    return {
      email: 'aaa',
      username: 'aaa',
      avatar: 'aaa',
      userID: userID,
    };
  }
}
