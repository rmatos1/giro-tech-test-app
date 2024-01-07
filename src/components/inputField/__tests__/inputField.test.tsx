import { fireEvent, render } from '@testing-library/react-native';
import { InputField, InputFieldProps } from '../inputField';

const defaultProps: InputFieldProps = {
    value: "test",
    placeHolderText: "Enter a value",
    name: "test",
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    imgSrc: require("../../../assets/icons/login/lock.png"),
    errorMsg: "There's an error",
    isValid: false
}

const setup = (componentProps?: InputFieldProps) => {

    const baseProps = componentProps || defaultProps;

    return(
        <InputField {...baseProps} />
    )
}

describe("<InputField />", () => {
   
    test('should render the defined value', async () => {
        
        const wrapper = render(setup());
    
        const input = wrapper.getByTestId('input-field');

        expect(input.props.value).toBe(defaultProps.value);
    });

    test('should call onChange and onSubmit', async () => {
        
        const wrapper = render(setup());
    
        const input = wrapper.getByTestId('input-field');

        fireEvent.changeText(input, "1");

        expect(defaultProps.onChange).toHaveBeenCalled()
    });

    test("should render the defined icon", () => {
        const wrapper = render(setup());

        const icon = wrapper.getByTestId("input-icon");

        expect(icon.props.source).toEqual(defaultProps.imgSrc);
    })

    test("should render the error message when the value is not valid", () => {
        const wrapper = render(setup());

        const input = wrapper.getByTestId('input-field');

        fireEvent(input, 'focus');
        fireEvent(input, 'blur');

        const errorMsg = wrapper.getByText(defaultProps.errorMsg);

        expect(errorMsg).toBeDefined();
    })

    test("should render a button to toggle the password visibility", () => {

        const onChangePasswordVisibility =  jest.fn();

        const wrapper = render(setup({ ...defaultProps, onChangePasswordVisibility }));

        const passwordVisibilityButton = wrapper.getByTestId("password-visibility-button");

        expect(passwordVisibilityButton).toBeDefined();

        fireEvent.press(passwordVisibilityButton);

        expect(onChangePasswordVisibility).toHaveBeenCalled()
    })
})