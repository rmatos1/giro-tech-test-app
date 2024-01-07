import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { modalStyles, globalStyles } from '../../styles';
import { CustomButton } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { StoreProps } from '../../types';
import { changeShowWarningModal } from '../../store';


export interface WarningModalProps {
	showLoginDescription?: boolean;
}

export const WarningModal = ({ showLoginDescription }: WarningModalProps) => {

	const dispatch = useDispatch()

	const { showWarningModal } = useSelector((state: StoreProps) => state.modals)

	const handleCloseModalOnClick = () => {
		dispatch(changeShowWarningModal(false));
	}

    return(
        <Modal
			animationType="fade"
			visible={showWarningModal}
			transparent
			onRequestClose={handleCloseModalOnClick}
	    >

            <TouchableOpacity
	          style={modalStyles.overlay}
	          onPress={handleCloseModalOnClick}
	          activeOpacity={.75}
	        />

			<View style={modalStyles.container}>

				<View style={modalStyles.body}>

					<Text style={modalStyles.title}>Not implemented!</Text>

					<Text style={globalStyles.text} testID='login-description'>{showLoginDescription ? "To access this app, just use any valid email and any password with at least 6 characters, or click on one of the social profile buttons" : "Sorry, the test didn't ask to implement this function"}</Text>

                    <CustomButton 
                        onPress={handleCloseModalOnClick}
                        text="Close"
                    />      
				</View>

			</View>

	    </Modal>
    )
}