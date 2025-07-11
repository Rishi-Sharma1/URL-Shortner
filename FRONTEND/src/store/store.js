import {configureStore} from '@redux/toolkit';
import authReducer from './slice/authSlice.js';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;
