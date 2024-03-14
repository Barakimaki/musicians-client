import { Routes } from '@angular/router';
import { AuthComponent, ProfileComponent, ReviewsComponent } from '../pages';
import { authGuard } from '../shared';

export const routes: Routes = [
  { path: '', redirectTo: '/reviews', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'events', component: ReviewsComponent, canActivate: [authGuard] },
  { path: 'market', component: ReviewsComponent, canActivate: [authGuard] },
  {
    path: 'profile/:userID',
    component: ProfileComponent,
    canActivate: [authGuard],
  },
  { path: 'reviews', component: ReviewsComponent, canActivate: [authGuard] },
  { path: 'teachers', component: ReviewsComponent, canActivate: [authGuard] },
];
