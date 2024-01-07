import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

export const modalStyles = StyleSheet.create({
    overlay: {
        position: "absolute",
        width: '100%', 
        height: '100%',
        zIndex: -1,
        top: 0, 
        left: 0, 
        backgroundColor: 'rgba(0,0,0,.4)'
    },
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    body: {
        backgroundColor: '#fff',  
        elevation: 5, 
        width: '90%',
        alignItems: "center",
        borderRadius: 25, 
        padding: 20,
        gap: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: .25,
        shadowRadius: 4
    },
    title: {
        ...globalStyles.title,
        textAlign: "center"
    }		
})