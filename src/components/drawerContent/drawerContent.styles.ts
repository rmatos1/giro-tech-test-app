import { StyleSheet } from "react-native";

export const drawerContentStyles = StyleSheet.create({
    container: {
        padding: 15, 
        alignItems: 'center'
    },
    logo: {
		height: 35,
		width: 111,
		marginVertical: 30
	},
    containerUserInfo: { 
        marginBottom: 25, 
        alignItems: 'center' 
    },
	userName: {
		fontSize: 17,
		fontWeight: 'bold',
		color: '#5B5774'
	},
	userEmail: {
		fontSize: 14,
		color: '#BaBaBa'
	},
    listLinks: { 
        padding: 20, 
        width: '100%',
        gap: 8 
    },
	link: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		paddingVertical: 8,
        gap: 15
	},
	icon: {
		width: 22,
		height: 22,
	},
	textLink: {
		color: '#B0AFBC',
		fontSize: 16,
	},
    activeTextLink: {
        fontSize: 16,
        fontWeight: 'bold', 
        color: '#5B5775' 
    }
})