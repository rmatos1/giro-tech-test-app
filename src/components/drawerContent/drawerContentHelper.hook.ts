import { ImageSourcePropType } from "react-native";
import { Links, StoreProps } from "../../types";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeIsLoggedIn } from "../../store";

export interface ILink {
	icon: {
		default: ImageSourcePropType;
		active?: ImageSourcePropType;
	},
	target: Links;
}

interface UseDrawerContentHelperProps {
    links: ILink[];
    email: string;
    activeScreen: Links;
    onLinkClick: (target: Links) => void;
}

export const useDrawerContentHelper = (): UseDrawerContentHelperProps => {

    const navigation = useNavigation();
	const dispatch = useDispatch()

	const { email } = useSelector((state: StoreProps) => state.auth)

	const [activeScreen, setActiveScreen] = useState(Links.Clients);

    const links: ILink[] = [
        {
            icon: {
                default: require("../../assets/icons/menu/clients.png"),
                active: require("../../assets/icons/menu/active-clients.png"),		
            },
            target: Links.Clients,
        },
        {
            icon: {
                default: require("../../assets/icons/menu/gear.png"),
                active: require("../../assets/icons/menu/active-gear.png"),		
            },
            target: Links.Permissions,
        },
        {
            icon: {
                default: require("../../assets/icons/menu/logout.png"),
            },
            target: Links.LogOut,
        }
    ]

    const handleLinkOnClick = (target: Links) => {

		if(target === Links.LogOut) {

			dispatch(changeIsLoggedIn(false));

		} else {

			setActiveScreen(target);

			navigation.dispatch(DrawerActions.jumpTo(target as string));
		}
	}

    return {
        links,
        email,
        activeScreen,
        onLinkClick: handleLinkOnClick
    }
}