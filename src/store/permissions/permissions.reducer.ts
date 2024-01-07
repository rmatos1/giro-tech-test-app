import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PermissionsAccessProps, PermissionsReducerProps } from "../../types";

const initialState: PermissionsReducerProps = {
    manageIndicators: {
        admin: true,
        analyst: true,
        saler: true,
    },
    controlAccess: {
        admin: true,
        analyst: true,
        saler: true,
    },
    viewFinancialIndicators: {
        admin: true,
        analyst: true,
        saler: true,
    },
    manageTasks: {
        admin: true,
        analyst: true,
        saler: true,
    },
}

export const PermissionsReducer = createSlice({
    name: "permissionsReducer",
    initialState,
    reducers: {
        changeManageIndicators: (state: PermissionsReducerProps, action: PayloadAction<Partial<PermissionsAccessProps>>) => {
            state.manageIndicators = { ...state.manageIndicators, ...action.payload };
        },
        changeControlAccess:  (state: PermissionsReducerProps, action: PayloadAction<Partial<PermissionsAccessProps>>) => {
            state.controlAccess = { ...state.controlAccess, ...action.payload };
        },
        changeViewFinancialIndicators:  (state: PermissionsReducerProps, action: PayloadAction<Partial<PermissionsAccessProps>>) => {
            state.viewFinancialIndicators = { ...state.viewFinancialIndicators, ...action.payload };
        },
        changeManageTasks:  (state: PermissionsReducerProps, action: PayloadAction<Partial<PermissionsAccessProps>>) => {
            state.manageTasks = { ...state.manageTasks, ...action.payload };
        },
    }
})

export const {
    changeManageIndicators,
    changeControlAccess,
    changeViewFinancialIndicators,
    changeManageTasks
  } = PermissionsReducer.actions;