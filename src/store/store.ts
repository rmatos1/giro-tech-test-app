import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { AuthReducer } from "./auth";
import { PermissionsReducer } from "./permissions";
import { ClientsReducer } from "./clients";
import { ModalsReducer } from "./modals";

export const store = configureStore({
    reducer: combineReducers({
        auth: AuthReducer.reducer,
        permissions: PermissionsReducer.reducer,
        clients: ClientsReducer.reducer,
        modals: ModalsReducer.reducer
    })
})