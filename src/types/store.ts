export interface AuthReducerProps {
    isLoggedIn: boolean;
    email: string;
}

export interface PermissionsAccessProps {
    admin: boolean;
    analyst: boolean;
    saler: boolean;
}

export interface PermissionsReducerProps {
    manageIndicators: PermissionsAccessProps;
    controlAccess: PermissionsAccessProps;
    viewFinancialIndicators: PermissionsAccessProps;
    manageTasks: PermissionsAccessProps;
}

export interface ClientsReducerProps {
    selectedPage: number;
}

export interface ModalsReducerProps {
    showWarningModal: boolean;
}

export interface StoreProps {
    auth: AuthReducerProps;
    permissions: PermissionsReducerProps;
    clients: ClientsReducerProps;
    modals: ModalsReducerProps;
}