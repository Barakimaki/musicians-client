import { createReducer } from '@ngrx/store';

export interface ReviewsState {}

const initialState: ReviewsState = {};

export const reviewsReducer = createReducer(initialState);
