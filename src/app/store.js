import {configureStore} from '@reduxjs/toolkit';

import userReducer from '../features/userSlice';
import defaultAuthReducer from '../features/defaultAuthSlice'
export default configureStore({
    reducer:{
        user: userReducer,
        defaultUser: defaultAuthReducer
    }
})