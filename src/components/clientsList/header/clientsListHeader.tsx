import { View, Text, Image, ImageSourcePropType, StyleSheet, TouchableHighlight } from "react-native";
import { globalStyles } from "../../../styles";

const icons: ImageSourcePropType[] = [
	require('../../../assets/icons/clients/magnify-glass.png'),
	require('../../../assets/icons/clients/filter.png'),
	require('../../../assets/icons/clients/calendar.png'),
	require('../../../assets/icons/clients/plus.png')
]

export const ClientsListHeader = ({ onOpenWarningModal }: { onOpenWarningModal: () => void }) => {

    return(
        <View style={componentStyles.header}>
					
			<Text style={globalStyles.title}>Clients</Text>

			<View style={componentStyles.containerButtons}>
				
				{
					icons.map((item, index) => (
						<TouchableHighlight
							testID="icon"
							key={index}
							style={componentStyles.button}
							activeOpacity={.5}
							underlayColor="#fff"
							onPress= {onOpenWarningModal}
						>
							<Image source={item} style={globalStyles.icon} />
						</TouchableHighlight>
					))
				}

			</View>

		</View> 
    )
}

const componentStyles = StyleSheet.create({
	header: { 
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		alignItems: 'center',
		marginBottom: 30 
	},
	containerButtons: { 
		flexDirection: 'row', 
		justifyContent: 'space-between',
		gap: 8 
	},
	button: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 4,
		borderRadius: 5,
		width: 35,
		height: 30
	}
})