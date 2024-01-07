import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles";

export const clientsStyles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 50
    },
    card: {
        ...globalStyles.card,
        position: 'relative', 
        padding: 15, 
        gap: 20
    },
    iconsContainer: {
        position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: 120,
		right: 15,
		top: 10,
        zIndex: 2
    },
    icon: {
        ...globalStyles.icon,
        opacity: 0.9
    },
    cardTitle: {
		color: '#8F8F93',
		fontSize: 14,
		textTransform: "capitalize"
	},
	cardText: {
		color: '#5C596D',
		fontSize: 16,
		fontWeight: 'bold'
	}
})