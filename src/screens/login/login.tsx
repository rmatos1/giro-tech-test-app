import { ScrollView, View, Text, Image } from "react-native"
import { globalStyles, MAIN_ACTION_COLOR } from "../../styles";
import { loginStyles } from "./login.styles";
import { useLoginHelper, AuthType } from "./loginHelper.hook";
import { CustomButton, InputField } from "../../components";
import { AuthModal, WarningModal } from "../../modals";

export const Login = () => {

    const { 
        loginData, 
        onInputChange, 
        passwordInputRef, 
        showPassword, 
        isButtonDisabled, 
        onChangePasswordVisibility, 
        isValidEmail, 
        isValidPassword, 
        showAuthModal, 
        onAuth, 
        onOpenWarningModal } = useLoginHelper()

    return(
        <>
            <ScrollView contentContainerStyle={loginStyles.container} keyboardShouldPersistTaps="always">

                <View style={loginStyles.logoContainer}>
                    <Image source={require('../../assets/images/logo-giro.png')} />
                </View>

                <Text style={globalStyles.title}>Login into your account</Text>

                <View style={loginStyles.form}>

                    <View style={loginStyles.inputGroup}>

                        <Text style={loginStyles.label}>Email</Text>

                        <InputField 
                            value={loginData.email}
                            placeHolderText='Enter your email'
                            name="email"
                            onChange={onInputChange}
                            onSubmit={() => {
                                passwordInputRef.current && passwordInputRef.current.focus()
                            }}
                            keyboardType='email-address'
                            imgSrc={require('../../assets/icons/login/email.png')}
                            errorMsg="Please enter a valid email"
                            isValid={isValidEmail}
                        />

                    </View>

                    <View style={loginStyles.inputGroup}>

                        <View style={loginStyles.containerLabelPassword}>

                            <Text style={loginStyles.label}>Password</Text>

                            <Text style={loginStyles.forgottenPasswordLink} onPress={onOpenWarningModal} testID="forgot-password">Forgot my password</Text>
                        </View>        

                        <InputField 
                            value={loginData.password}
                            placeHolderText='Enter your password'
                            name="password"
                            onChange={onInputChange}
                            onSubmit={() => !isButtonDisabled && onAuth(AuthType.email)}
                            secureTextEntry={!showPassword}
                            maxLenght={15}
                            imgSrc={require('../../assets/icons/login/lock.png')}
                            onChangePasswordVisibility={onChangePasswordVisibility}
                            errorMsg="Please enter a valid password"
                            isValid={isValidPassword}
                        />         

                    </View>

                    <CustomButton 
                        isDisabled={isButtonDisabled}
                        onPress={() => !isButtonDisabled && onAuth(AuthType.email)}
                        text="Enter"
                    />                         

                </View>

                <View style={loginStyles.containerSocialAccess}>

                    <Text style={globalStyles.text}>or</Text>     

                    <CustomButton 
                        backgroundColor='#0032CC'
                        onPress={onAuth}
                        text="Continue with Facebook"
                        icon={require('../../assets/icons/login/facebook-icon.png')}
                    />                       

                    <CustomButton 
                        backgroundColor='#1DA1F2'
                        onPress={onAuth}
                        text="Continue with Twitter"
                        icon={require('../../assets/icons/login/twitter-icon.png')}
                    />                  

                </View>	                    

                <Text style={loginStyles.footerText}>Do you not have an account?{"\n"}<Text style={loginStyles.footerLink} onPress={onOpenWarningModal}>Create your account here</Text></Text>                    

            </ScrollView>
        
            { showAuthModal && <AuthModal /> }         

            <WarningModal showLoginDescription />     
        </>
    )
}
