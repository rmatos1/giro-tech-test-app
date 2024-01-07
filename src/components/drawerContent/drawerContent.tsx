import { View, Text, Image, TouchableOpacity } from "react-native";
import { drawerContentStyles } from "./drawerContent.styles";
import { useDrawerContentHelper, ILink } from "./drawerContentHelper.hook";

export const DrawerContent = () => {

	const { links, email, activeScreen, onLinkClick } = useDrawerContentHelper()

	return(
		<View style={drawerContentStyles.container}>
			
			<Image source={require("../../assets/images/logo-giro.png")} style={drawerContentStyles.logo} testID="logo-giro" />

			<View style={drawerContentStyles.containerUserInfo}>

				<Text style={drawerContentStyles.userName} testID="name">Emilia Silberg</Text>
				<Text style={drawerContentStyles.userEmail} testID="email">{email || "emiliasilberg@gmail.com"}</Text>

			</View>	

			<View style={drawerContentStyles.listLinks}>
				
				{
					links.map((item: ILink) => {

						const isActive = activeScreen === item.target;

						return(
							<TouchableOpacity
								testID="link"
								key={item.target}
					  			style={drawerContentStyles.link}
								activeOpacity={.8}
								onPress= {() => onLinkClick(item.target)}
							>

								<Image source={item.icon.active && isActive ? item.icon.active : item.icon.default} style={drawerContentStyles.icon} />

								<Text style={isActive ? drawerContentStyles.activeTextLink : drawerContentStyles.textLink}>{ item.target }</Text>		
					        </TouchableOpacity>	
						)
					})
				}

			</View>

		</View>
	)
}
