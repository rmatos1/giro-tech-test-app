import { RefObject, useRef, useState } from "react";
import { TextInput, Image, ImageSourcePropType, KeyboardTypeOptions, NativeSyntheticEvent, TextInputSubmitEditingEventData, View, TouchableHighlight, Text } from "react-native";
import { globalStyles } from "../../styles";
import { inputFieldStyles } from "./inputField.styles";

export interface InputFieldProps {
    customRef?: RefObject<TextInput>;
    value: string;
    placeHolderText: string;
    name: string;
    keyboardType?: KeyboardTypeOptions;
    onChange: (name: string, text: string) => void;
    onSubmit: () => void;
    imgSrc: ImageSourcePropType;
    secureTextEntry?: boolean;
    onChangePasswordVisibility?: () => void;
    maxLenght?: number;
    errorMsg: string;
    isValid: boolean;
}

export const InputField = ({ customRef, value, placeHolderText, name, onChange, keyboardType, onSubmit, imgSrc, secureTextEntry, onChangePasswordVisibility, maxLenght, errorMsg, isValid } : InputFieldProps) => {

    const inputRef: RefObject<TextInput> = customRef || useRef<TextInput>(null);

    const [showError, setShowError] = useState<boolean>(false);

    const handleInputOnFocus = () => {
        setShowError(false);
    }

    const handleInputOnBlur = () => {
        setShowError(!isValid);
    }

    return(
        <View>
            <View style={inputFieldStyles.container}>
                            
                <TextInput
                    testID="input-field"
                    ref={inputRef}
                    value={value}
                    style={inputFieldStyles.input}
                    placeholder={placeHolderText}
                    placeholderTextColor="#c5c5c5"
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType={keyboardType}
                    onChangeText={text => onChange(name, text)}
                    onSubmitEditing={(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => onSubmit?.()}
                    secureTextEntry={secureTextEntry}
                    maxLength={maxLenght}
                    onFocus={handleInputOnFocus}
                    onBlur={handleInputOnBlur}
                />

                <Image source={imgSrc} style={[globalStyles.icon, inputFieldStyles.inputIcon]} testID="input-icon" />

                {
                    onChangePasswordVisibility && <TouchableHighlight
                        testID="password-visibility-button"
                        style={inputFieldStyles.showPasswordButton}
                        activeOpacity={.5}
                        underlayColor="#fff"
                        onPress= {onChangePasswordVisibility}
                    >
                        <Image 
                            source={secureTextEntry ? 
                                require('../../assets/icons/login/visible.png') : 
                                require('../../assets/icons/login/not-visible.png')
                            } 
                        />

                    </TouchableHighlight>
                }      

            </View>        
        
            {showError && <Text style={inputFieldStyles.textError}>{errorMsg}</Text>}   
        </View>
    )
}
