import { configureStore } from '@reduxjs/toolkit';
import { dogsReducer } from './reducers/dogs_reducer';

export const store = configureStore({
    reducer: {
        dogsReducer: dogsReducer,
    }
});