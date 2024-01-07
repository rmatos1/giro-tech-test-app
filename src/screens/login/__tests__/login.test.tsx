import { render, fireEvent, act } from '@testing-library/react-native';
import { Login } from '../login';
import { TestComponent } from '../../../components';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store'
import { StoreProps } from '../../../types';
import { initialMockStore } from '../../../constants';
import { useDispatch } from 'react-redux';

const mockStore = configureStore<StoreProps>();

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));

const mockedNavigation = {
    dispatch: jest.fn(),
};

const setup = () => {
    const store: MockStoreEnhanced<StoreProps> = mockStore(initialMockStore);

    (useDispatch as jest.Mock).mockReturnValue(mockedNavigation.dispatch);

    return(
        <TestComponent customStore={store}>
            <Login />
        </TestComponent>
    )
}

describe("<Login />", () => {
    beforeEach(() => {
        mockedNavigation.dispatch.mockClear();
    });

    test("should call dispatch on press link", () => {

        const wrapper = render(setup());

        const link = wrapper.getByTestId("forgot-password");

        fireEvent.press(link)

        expect(mockedNavigation.dispatch).toHaveBeenCalledWith(
            expect.objectContaining({
                "payload": true, 
                "type": "modalsReducer/changeShowWarningModal"
            })
        );
    })

    test("should render the specified email and password and call dispatch on press button", async () => {

        jest.useFakeTimers();

        const wrapper = render(setup());

        const input = wrapper.getAllByTestId("input-field");

        const EMAIL = "test@test.com";

        fireEvent.changeText(input[0], EMAIL)
        fireEvent.changeText(input[1], "123456")

        const buttons = wrapper.getAllByTestId("custom-button");

        fireEvent.press(buttons[0])

        await act(async () => {
            jest.runAllTimers(); 
        });

        expect(mockedNavigation.dispatch).toHaveBeenCalledTimes(2);
    
        expect(mockedNavigation.dispatch).toHaveBeenCalledWith({
            "payload": EMAIL, 
            "type": "authReducer/changeEmail"
        });

        expect(mockedNavigation.dispatch).toHaveBeenCalledWith({
            "payload": true, 
            "type": "authReducer/changeIsLoggedIn"
        });
    })
}) 