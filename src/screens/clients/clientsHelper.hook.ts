import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreProps } from "../../types";
import clientsList from "../../data/clientsList.json";
import { ImageSourcePropType } from "react-native";
import { changeShowWarningModal } from "../../store";

export enum CardLabels {
    name = "name",
    franchise = "franchise",
    city = "city",
    startDate = "start date",
    plan = "plan"
}

export interface ClientsListProps {
    id: number;
    name: string;
    franchise: string;
    city: string;
    startDate: string;
    plan: string;
}

interface UseClientsHelperProps {
    currentDisplayedclients: ClientsListProps[];
    isLoading: boolean;
    icons: ImageSourcePropType[];
    onOpenWarningModal: () => void;
    cardLabels: Array<keyof typeof CardLabels>;
    totalPages: number;
}

export const MAX_DISPLAYED_CLIENTS_PER_PAGE = 3

export const useClientsHelper = (): UseClientsHelperProps => {

    const dispatch = useDispatch()

    const { selectedPage } = useSelector((state: StoreProps) => state.clients);

    const [currentDisplayedclients, setCurrentDisplayedclients] = useState<ClientsListProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const icons = [
        require('../../assets/icons/clients/view.png'),
        require('../../assets/icons/clients/edit.png'),
        require('../../assets/icons/clients/delete.png'),
    ]

    const cardLabels = Object.keys(CardLabels) as Array<keyof typeof CardLabels>;

    const totalPages = useMemo(() => {

        const lastPage = clientsList.length / MAX_DISPLAYED_CLIENTS_PER_PAGE;

        return Math.ceil(lastPage);
    }, [])

    useEffect(() => {
        handleDisplayedClientsOnChange();
    }, [selectedPage])

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 300)
    }, [currentDisplayedclients])

    const handleOpenWarningModalOnClick = () => {
        dispatch(changeShowWarningModal(true));
    }

    const handleDisplayedClientsOnChange = () => {

        setIsLoading(true);

        const clients = [];

        const startPoint = MAX_DISPLAYED_CLIENTS_PER_PAGE * (selectedPage - 1);

        for(let i = startPoint; i < startPoint + MAX_DISPLAYED_CLIENTS_PER_PAGE; i++) {

			if(clientsList[i]) {
                clients.push(clientsList[i])
            }
		}

        setCurrentDisplayedclients(clients);
    }

    return {
        currentDisplayedclients,
        isLoading,
        icons,
        onOpenWarningModal: handleOpenWarningModalOnClick,
        cardLabels,
        totalPages
    }
}