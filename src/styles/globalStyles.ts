import { StyleSheet } from "react-native";

export const MAIN_ACTION_COLOR = '#00DD3A';

export const globalStyles = StyleSheet.create({
   title: {
        color: '#74708C',
        fontWeight: 'bold',
        fontSize: 22,
    },
    input: {
        borderRadius: 6,
		height: 48,
		borderWidth: 1,
		borderColor: '#ddd',
		fontSize: 16,
		color: '#686868',
    },
    icon: {
        width: 20,
        height: 20
    },
    text: {
        fontSize: 16,
	    color: '#868686',
        lineHeight: 24
    },
    card: {
        backgroundColor: '#fff', 
        borderRadius: 10, 
        elevation: 3,
        marginBottom: 20,
        width: "100%",
    }
})