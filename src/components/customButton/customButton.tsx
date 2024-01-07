import { TouchableOpacity, StyleSheet, Text, Image, ImageSourcePropType } from "react-native"
import { globalStyles, MAIN_ACTION_COLOR } from "../../styles";

export interface CustomButtonProps {
    isDisabled?: boolean;
    backgroundColor?: string;
    onPress: () => void;
    text: string;
    icon?: ImageSourcePropType;
}

export const CustomButton = ({ isDisabled, backgroundColor, onPress, text, icon }: CustomButtonProps) => {

    return(
        <TouchableOpacity
            testID="custom-button"
            style={[ componentStyles.container, { backgroundColor: isDisabled ? "#ddd" : backgroundColor || MAIN_ACTION_COLOR} ]}
            activeOpacity={isDisabled ? 1 : 0.5}
            onPress={() =>!isDisabled && onPress()}
        >

            {
                icon && <Image source={icon} style={globalStyles.icon} testID="button-icon" />
            }

            <Text style={[componentStyles.text, { color: isDisabled ? "#868686" : "#fff" }]}>{text}</Text>
        </TouchableOpacity> 
    )
}

const componentStyles = StyleSheet.create({
    container: {
        width: '100%', 
        height: 48,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        gap: 3
    },
	text: {
		fontSize: 14,
		fontWeight: 'bold'
	},
})