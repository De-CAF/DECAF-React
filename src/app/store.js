import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import { loadState } from './browser-storage';
const store = configureStore({
    devTools: true,
    reducer: {
        user: userReducer,
    },
    preloadedState: loadState()
})

export default store