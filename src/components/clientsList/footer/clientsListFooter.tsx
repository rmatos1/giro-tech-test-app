import { View, Text, TouchableHighlight, Image, TextInput } from "react-native";
import { globalStyles } from "../../../styles";
import { clientsListFooterStyles } from "./clientsListFooter.styles";
import { useClientsListFooterHelper } from "./clientsListFooterHelper.hook";

interface FooterButtonProps {
    page: number;
    hasDoubleChevron?: boolean;
    hasInvertedIcon?: boolean;
}

export const ClientsListFooter = ({ totalPages }: { totalPages: number }) => {

    const { 
        selectedPage, 
        onSelectPage, 
        inputValue, 
        onChangeInput } = useClientsListFooterHelper(totalPages);

    const footerButton = ({page, hasDoubleChevron, hasInvertedIcon }: FooterButtonProps) => (
        <TouchableHighlight
            testID="footer-button"
			activeOpacity={.5}
			underlayColor="#fff"
			onPress= {() => onSelectPage(page)}
		>
			<Image 
				source={
					hasDoubleChevron ? 
						require('../../../assets/icons/clients/double-chevron.png') :
						require('../../../assets/icons/clients/chevron.png')
				} 
				style={[clientsListFooterStyles.buttonIcon, { transform: [{ rotateY: hasInvertedIcon ? '180deg' : '0deg' }] }]} 
			/>

		</TouchableHighlight>
    )

    return(
        <View style={clientsListFooterStyles.footer}>

			<View style={clientsListFooterStyles.buttonsContainer}>

				{ footerButton({ page: 1, hasDoubleChevron: true, hasInvertedIcon: true }) }
                { footerButton({ page: selectedPage - 1, hasInvertedIcon: true }) }

			</View>

			<View style={clientsListFooterStyles.pagesInfoContainer}>

                <TextInput
                    testID="page-input"
                    value={inputValue}
                    style={clientsListFooterStyles.input}
                    autoCorrect={false}
                    keyboardType="number-pad"
                    onChangeText={text => onChangeInput(text)}
                />        

				<Text style={globalStyles.title} testID="total-pages">of {totalPages}</Text>

			</View>

			<View style={clientsListFooterStyles.buttonsContainer}>
				
                { footerButton({ page: selectedPage + 1 }) }
				{ footerButton({ page: totalPages, hasDoubleChevron: true }) }

			</View>

		</View> 
    )
}

