import { StoreProps } from "../types"

export const initialMockStore: StoreProps = {
    auth: {
        isLoggedIn: false,
        email: ""
    },
    permissions: {
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
    },    
    clients: {
        selectedPage: 1
    },
    modals: {
        showWarningModal: false
    }
}