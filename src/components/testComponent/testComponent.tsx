import { Provider } from "react-redux"
import { store } from "../../store"
import { EnhancedStore } from "@reduxjs/toolkit";
import { StoreProps } from "../../types";

interface TestComponentProps {
    children: JSX.Element;
    customStore?: EnhancedStore<StoreProps>;
}

export const TestComponent = ({ children, customStore }: TestComponentProps) => {
    return(
        <Provider store={customStore || store}>
            {children}
        </Provider>
    )
}