import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreProps } from "../../../types";
import { changeSelectedPage } from "../../../store";

export interface FooterButtonProps {
    page: number;
    hasDoubleChevron?: boolean;
    hasInvertedIcon?: boolean;
}

interface useClientsListFooterHelperProps {
    selectedPage: number;
    onSelectPage: (page: number) => void;
    inputValue: string;
    onChangeInput: (page: string) => void;
}

export const useClientsListFooterHelper = (totalPages: number): useClientsListFooterHelperProps => {

    const dispatch = useDispatch()

    const { selectedPage } = useSelector((state: StoreProps) => state.clients);

    const formattedSelectedPage = useMemo(() => selectedPage.toString(), [selectedPage])

    const [inputValue, setInputValue] = useState<string>(formattedSelectedPage);

    useEffect(() => {
        if(inputValue !== formattedSelectedPage) {
            setInputValue(formattedSelectedPage)
        }
    }, [formattedSelectedPage])

    const handleSelectedPage = (page: number) => {
        
        if(page < 1) {
            page = 1;
        }

        if(page > totalPages) {
            page = totalPages;
        }

        dispatch(changeSelectedPage(page))
    }

    const handleInputValueOnChange = (page: string) => {
        setInputValue(page);

        if(page) {
            handleSelectedPage(Number(page))
        }
    }

    return {
        selectedPage,
        onSelectPage: handleSelectedPage,
        inputValue,
        onChangeInput: handleInputValueOnChange
    }
}