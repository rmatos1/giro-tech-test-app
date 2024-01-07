import { StyleSheet } from "react-native";
import { globalStyles } from "../../../styles";

export const clientsListFooterStyles = StyleSheet.create({
    footer: { 
        width: "100%",
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		alignItems: 'center',
        position: "absolute",
        bottom: 0,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "#fff",
        borderTopColor: "#f5f5f5",
        borderTopWidth: 1
	},
    buttonsContainer: { 
		flexDirection: 'row', 
		width: 70, 
		justifyContent: 'space-evenly' 
	},
    pagesInfoContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8
    },
    buttonIcon: {
        width: 32, 
        height: 32
    },
    input: {
        ...globalStyles.input,
        height: 36,
        width: 50,
        textAlign: "center"
    }
})