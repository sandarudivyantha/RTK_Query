import { configureStore } from '@reduxjs/toolkit';
import dataApi from '../api/dataApi';

const store = configureStore({
    reducer: {
        [dataApi.reducerPath]: dataApi.reducer,
    },
    middleware: (getMiddleware) =>
        getMiddleware().concat(dataApi.middleware),
});

export default store;