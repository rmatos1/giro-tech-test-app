import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import { DrawerActions, useNavigation } from '@react-navigation/native';

export const TopBar = () => {

    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };
    
	return(
	  	<View style={componentStyles.navBar}>

	  		<TouchableHighlight
				testID="menu-button"
	  			style={componentStyles.menuButton}
				activeOpacity={.5}
				underlayColor="#fff"
				onPress= {openDrawer}
			>
				<Image source={require("../../assets/icons/menu/menu.png")} style={componentStyles.menuIcon} />
	        </TouchableHighlight>	

	        <Image source={require("../../assets/images/logo-giro.png")} style={componentStyles.logo} testID="logo" />		

	  	</View>
	)
}

const componentStyles = StyleSheet.create({
	navBar: {
		height: 60, 
		paddingHorizontal: 15,
		backgroundColor: "#fff",
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: "center",
		position: 'relative'
	},
    menuButton: {
        position: 'absolute', 
        left: 15, 
    },
	menuIcon: {
		height: 32,
		width: 32
	},
	logo: {
		height: 35,
		width: 111,
	}
})