import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClientsReducerProps } from "../../types";

const initialState: ClientsReducerProps = {
    selectedPage: 1
}

export const ClientsReducer = createSlice({
    name: "clientsReducer",
    initialState,
    reducers: {
        changeSelectedPage: (state: ClientsReducerProps, action: PayloadAction<number>) => {
            state.selectedPage = action.payload;
        }
    }
})

export const {
    changeSelectedPage
} = ClientsReducer.actions