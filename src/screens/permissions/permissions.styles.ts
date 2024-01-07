import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles";

export const permissionsStyles = StyleSheet.create({
    container: {
        padding: 20,
    },
    screenTitle: {
        ...globalStyles.title,
        marginBottom: 30,
        textAlign: "center"
    },
    cardTitleContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: '#DEDDE3'
	},
	cardTitle: {
		fontSize: 15,
		color: '#56536F',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	containerToggles: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		height: 80
	},
    toggleTitle: {
		fontSize: 14, 
		color: '#5C6982',
		textTransform: 'capitalize',
	}
})