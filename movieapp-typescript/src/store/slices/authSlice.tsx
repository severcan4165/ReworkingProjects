import {createSlice, PayloadAction} from "@reduxjs/toolkit"
interface IUserState {
    user:boolean;
}


const initialState:IUserState = {
    user:false,
}

const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setUser(state:IUserState, action:PayloadAction<boolean>){
            state.user= action.payload;
        }
    }
});

export const {setUser} = authSlice.actions;
export const AuthReducer = authSlice.reducer;