import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles";

export const loginStyles = StyleSheet.create({
    container: {
        width: '100%', 
        flexGrow: 1, 
        padding: 20, 
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    logoContainer: {
        marginTop: 15,
        marginBottom: 40
    },
    form: {
        marginTop: 40,
		width: '100%',
        gap: 25,
    },
    inputGroup: {
        gap: 5
    },
    label: {
        fontWeight: 'bold',
		marginLeft: 10,
		fontSize: 14,
        color: '#868686'
    },
    containerLabelPassword: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    forgottenPasswordLink: {
        textDecorationLine: 'underline', 
		fontWeight: 'bold', 
		fontSize: 14, 
		color: '#868686',
		paddingRight: 5
    },
    containerSocialAccess: {
        width: '100%', 
        marginVertical: 12,
        gap: 12,
        alignItems: "center"
    },
    footerText: {
        ...globalStyles.text,
        paddingVertical: 12,
        textAlign: "center",
        marginTop: "auto",
    },
    footerLink: {
        color: '#00DD3A', 
        textDecorationLine: 'underline',
    }
})