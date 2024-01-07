import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles";

export const inputFieldStyles = StyleSheet.create({
    container: {
        position: "relative",
        justifyContent: 'center',   
    },
    input: {
        ...globalStyles.input,
		width: '100%',
		paddingLeft: 35
    },
    inputIcon: {
		position: 'absolute',
		left: 10,
	},
    showPasswordButton: {
        position: "absolute",
		right: 10,
    },
    textError: {
        fontSize: 13,
        paddingVertical: 2,
        paddingHorizontal: 10,
        color: "#ff3333"
    }
})