import { ActionReducerMap } from '@ngrx/store';
import { ReviewsState, reviewsReducer } from './reviews/reviews.reducer';

export interface AppState {
  reviews: ReviewsState;
}

export const appReducer: ActionReducerMap<AppState> = {
  reviews: reviewsReducer,
};
