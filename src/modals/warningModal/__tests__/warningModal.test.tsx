import { render, fireEvent } from '@testing-library/react-native';
import { WarningModal, WarningModalProps } from '../warningModal';
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

const setup = (componentProps?: WarningModalProps) => {
    const store: MockStoreEnhanced<StoreProps> = mockStore({
        ...initialMockStore,
        modals: {
            showWarningModal: true,
          }
    });

    (useDispatch as jest.Mock).mockReturnValue(mockedNavigation.dispatch);

    return(
        <TestComponent customStore={store}>
            <WarningModal {...componentProps} />
        </TestComponent>
    )
}

describe("<WarningModal />", () => {
    test("should render the login description correctly", () => {

        const wrapper = render(setup({ showLoginDescription: true }));

        const loginDescription = wrapper.getByTestId("login-description")

        const text = Array.isArray(loginDescription.children) ? loginDescription.children.join("") 
        : loginDescription.children;

        expect(text).toContain("social profile");
    })

    test("should close the modal on press button", () => {

        const wrapper = render(setup());

        const button = wrapper.getByTestId("custom-button");

        fireEvent.press(button);

        expect(mockedNavigation.dispatch).toHaveBeenCalledWith(
            expect.objectContaining({
                "payload": false, 
                "type": "modalsReducer/changeShowWarningModal"
            })
        );
    });
}) 