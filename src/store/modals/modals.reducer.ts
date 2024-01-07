import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalsReducerProps } from "../../types";

const initialState: ModalsReducerProps = {
    showWarningModal: false
}

export const ModalsReducer = createSlice({
    name: "modalsReducer",
    initialState,
    reducers: {
        changeShowWarningModal: (state: ModalsReducerProps, action: PayloadAction<boolean>) => {
            state.showWarningModal = action.payload;
        }
    }
})

export const {
    changeShowWarningModal
} = ModalsReducer.actions