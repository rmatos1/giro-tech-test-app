import { useState, useRef, useEffect, RefObject, useMemo } from "react"
import { TextInput } from "react-native";
import { validateEmail, validatePassword } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { changeIsLoggedIn, changeEmail, changeShowWarningModal } from "../../store";
import { StoreProps } from "../../types";

export enum AuthType {
    email = "email",
    social = "social"
}

interface LoginDataProps {
    email: string;
    password: string;
}

interface UseLoginHelperProps {
    loginData: LoginDataProps;
    onInputChange: (inputName: string, value: string) => void;
    passwordInputRef: RefObject<TextInput>;
    showPassword: boolean;
    isButtonDisabled: boolean;
    onChangePasswordVisibility: () => void;
    isValidEmail: boolean; 
    isValidPassword: boolean;
    showAuthModal: boolean;
    onAuth: (value?: AuthType) => void;
    onOpenWarningModal: () => void;
}

export const useLoginHelper = (): UseLoginHelperProps => {
    
    const dispatch = useDispatch();

    const { email } = useSelector((state: StoreProps) => state.auth);

    const passwordInputRef: RefObject<TextInput> = useRef<TextInput>(null);

    const [loginData, setLoginData] = useState<LoginDataProps>({
        email,
        password: ""
    });
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)
    const [showAuthModal, setShowAuthModal] = useState<boolean>(false)

    const isValidEmail = useMemo(() => validateEmail(loginData.email), [loginData.email])

    const isValidPassword = useMemo(() => validatePassword(loginData.password), [loginData.password])

    useEffect(() => {

        const isValid = isValidEmail && isValidPassword;

        setIsButtonDisabled(!isValid);

    }, [isValidEmail, isValidPassword])

    const handleInputOnChange = (inputName: string, value: string) => {
        setLoginData((prev) => ({ ...prev, [inputName]: value }))
    }

    const handlePasswordVisibilityOnClick = () => {
        setShowPassword(!showPassword);
    }

    const handleAuthentication = (authType?: AuthType) => {
        setShowAuthModal(true);

        let email = "";

        if(authType === AuthType.email) {
            email = loginData.email;
        } 

        dispatch(changeEmail(email))

        setTimeout(() => {
            dispatch(changeIsLoggedIn(true));
        }, 3000)
    }

    const handleOpenWarningModalOnClick = () => {
        dispatch(changeShowWarningModal(true));
    }

    return {
        loginData,
        onInputChange: handleInputOnChange,
        passwordInputRef,
        showPassword,
        isButtonDisabled,
        onChangePasswordVisibility: handlePasswordVisibilityOnClick,
        isValidEmail, 
        isValidPassword,
        showAuthModal,
        onAuth: handleAuthentication,
        onOpenWarningModal: handleOpenWarningModalOnClick,
    }
}