import { fireEvent, render } from '@testing-library/react-native';
import { CustomButton, CustomButtonProps } from '../customButton';

const defaultProps: CustomButtonProps = {
    onPress: jest.fn(),
    text: "test"
}

const setup = (componentProps?: CustomButtonProps) => {

    const baseProps = componentProps || defaultProps;

    return(
        <CustomButton {...baseProps} />
    )
}

describe("<CustomButtom />", () => {
    test("should render the defined text button", () => {

        const wrapper = render(setup());

        const buttonText = wrapper.getByText(defaultProps.text);

        expect(buttonText).toBeDefined();
    })

    test("should call onPress", () => {
        const wrapper = render(setup());

        const button = wrapper.getByTestId("custom-button");

        fireEvent.press(button);

        expect(defaultProps.onPress).toHaveBeenCalled();
    })

    test("should render a button with a background color #ddd and not call onPress when is disabled", () => {
        const mockOnPress = jest.fn();
        const wrapper = render(setup({ ...defaultProps, isDisabled: true, onPress: mockOnPress }));

        const button = wrapper.getByTestId('custom-button');
        fireEvent.press(button);

        expect(mockOnPress).not.toHaveBeenCalled();

        expect(button.props.style.backgroundColor).toEqual('#ddd');
    })

    test("should render a button with a custom background color", () => {
        const customColor = '#1DA1F2';
        const wrapper = render(setup({ ...defaultProps, backgroundColor: customColor }));

        const button = wrapper.getByTestId('custom-button');
        
        expect(button.props.style.backgroundColor).toEqual(customColor);
    })

    test("should render an icon into the button", () => {
        const testIcon = require('../../../assets/icon.png');
        const wrapper = render(setup({ ...defaultProps, icon: testIcon }));

        const icon = wrapper.getByTestId('button-icon');
        
        expect(icon).toBeDefined()
    })
})