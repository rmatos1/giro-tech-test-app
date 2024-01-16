import { Modal, View, Text, ActivityIndicator } from 'react-native';
import { modalStyles, MAIN_ACTION_COLOR } from '../../styles';

export const AuthModal = () => {

    return(
        <Modal
			animationType="fade"
			visible
			transparent
	    >

			<View style={modalStyles.overlay} />

			<View style={modalStyles.container}>

				<View style={modalStyles.body}>

					<Text style={modalStyles.title}>Authenticating your credentials...</Text>

					<ActivityIndicator size='large' color={MAIN_ACTION_COLOR} />

				</View>

			</View>


	    </Modal>
    )
}