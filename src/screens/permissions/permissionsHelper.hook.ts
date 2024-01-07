import { useSelector, useDispatch } from "react-redux";
import { StoreProps, PermissionsAccessProps } from "../../types";
import { useMemo } from "react";
import { changeManageIndicators, changeControlAccess, changeViewFinancialIndicators, changeManageTasks } from "../../store";

export enum PermissionProfiles {
    admin = "admin", 
    analyst = "analyst", 
    saler = "saler"
}

interface PermissionActionProps {
    profile: PermissionProfiles; 
    value: boolean;
}

export interface PermissionDataProps {
    title: string;
    data: PermissionsAccessProps;
    action: ({ profile, value }: PermissionActionProps) => void;
}

interface UsePermissionsHelperProps {
    permissionsData: PermissionDataProps[];
    profiles: PermissionProfiles[];
}

export const usePermissionsHelper = (): UsePermissionsHelperProps => {

    const dispatch = useDispatch();

    const { manageIndicators, controlAccess, viewFinancialIndicators, manageTasks } = useSelector((state: StoreProps) => state.permissions);

    const profiles: PermissionProfiles[] = [
        PermissionProfiles.admin,
        PermissionProfiles.analyst,
        PermissionProfiles.saler
    ]

    const permissionsData: PermissionDataProps[] = useMemo(() => [
        {
            title: "View, Add, and Edit Indicators",
            data: manageIndicators,
            action: ({ profile, value }) => dispatch(changeManageIndicators({ [profile]: value }))
        },
        {
            title: "Control Access",
            data: controlAccess,
            action: ({ profile, value }) => dispatch(changeControlAccess({ [profile]: value }))
        },
        {
            title: "View Financial Indicators",
            data: viewFinancialIndicators,
            action: ({ profile, value }) => dispatch(changeViewFinancialIndicators({ [profile]: value }))
        },
        {
            title: "Create, View, and Edit Plans and Tasks",
            data: manageTasks,
            action: ({ profile, value }) => dispatch(changeManageTasks({ [profile]: value }))
        },
    ], [manageIndicators, controlAccess, viewFinancialIndicators, manageTasks]);

    return {
        permissionsData,
        profiles
    }
}