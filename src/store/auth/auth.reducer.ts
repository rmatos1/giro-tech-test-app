import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthReducerProps } from "../../types";

const initialState: AuthReducerProps = {
    isLoggedIn: false,
    email: ""
}

export const AuthReducer = createSlice({
    name: "authReducer",
    initialState,
    reducers: {
        changeIsLoggedIn: (state: AuthReducerProps, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
        changeEmail: (state: AuthReducerProps, action: PayloadAction<string>) => {
            state.email = action.payload
        }
    }
})

export const {
    changeIsLoggedIn,
    changeEmail
  } = AuthReducer.actions;