import {configureStore} from "@reduxjs/toolkit"
import {AuthReducer} from "./slices/authSlice"
import { MovieReducer } from "./slices/movieSlice";

const store = configureStore({
    reducer:{
        user:AuthReducer,
        movie:MovieReducer,
    }
});

 export default store;

 export type RootState = ReturnType<typeof store.getState>;

 export type AppDispatch = typeof store.dispatch;
