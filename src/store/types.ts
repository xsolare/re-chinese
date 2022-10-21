import type { Action, ThunkAction } from '@reduxjs/toolkit';
import type { makeStore } from '.';

export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<AppStore['getState']>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
