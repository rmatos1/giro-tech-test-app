import { render, fireEvent } from "@testing-library/react-native";
import { TestComponent } from "../../../testComponent";
import configureStore, { MockStoreEnhanced } from 'redux-mock-store'
import { ClientsListFooter } from "../clientsListFooter";
import { StoreProps } from "../../../../types";
import { initialMockStore } from "../../../../constants";
import { useDispatch } from "react-redux";

const mockStore = configureStore<StoreProps>();

const SELECTED_PAGE = 5;

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));

const mockedNavigation = {
    dispatch: jest.fn(),
};

const defaultProps = {
    totalPages: 30
}

const setup = () => {
    const store: MockStoreEnhanced<StoreProps> = mockStore({
        ...initialMockStore,
        clients: {
            selectedPage: SELECTED_PAGE
        }
    });

    (useDispatch as jest.Mock).mockReturnValue(mockedNavigation.dispatch);

    return(
        <TestComponent customStore={store}>
            <ClientsListFooter {...defaultProps} />
        </TestComponent>
    )
}

describe("<ClientsListFooter />", () => {

    test("should render correctly the four buttons and call changeSelectedPage on button press", () => {
        const wrapper = render(setup());

        const footerButtons = wrapper.getAllByTestId("footer-button");

        expect(footerButtons.length).toBe(4);

        fireEvent.press(footerButtons[0]);

        expect(mockedNavigation.dispatch).toHaveBeenCalledWith(
            expect.objectContaining({
                "payload": 1, 
                "type": "clientsReducer/changeSelectedPage"
            })
        );

        fireEvent.press(footerButtons[1]);

        expect(mockedNavigation.dispatch).toHaveBeenCalledWith(
            expect.objectContaining({
                "payload": SELECTED_PAGE - 1, 
                "type": "clientsReducer/changeSelectedPage"
            })
        );

        fireEvent.press(footerButtons[2]);

        expect(mockedNavigation.dispatch).toHaveBeenCalledWith(
            expect.objectContaining({
                "payload": SELECTED_PAGE + 1, 
                "type": "clientsReducer/changeSelectedPage"
            })
        );

        fireEvent.press(footerButtons[3]);

        expect(mockedNavigation.dispatch).toHaveBeenCalledWith(
            expect.objectContaining({
                "payload": defaultProps.totalPages, 
                "type": "clientsReducer/changeSelectedPage"
            })
        );
    })

    test("should render the number of total pages", () => {
        const wrapper = render(setup());

        const totalPages = wrapper.getByTestId("total-pages")

        const totalPagesText = Array.isArray(totalPages.children) ? totalPages.children.join("") 
        : totalPages.children;

        expect(totalPagesText).toContain(defaultProps.totalPages.toString());
    })

    test("should render the selected page as the input value correctly and call chengeSelectedPage on value change", () => {

        const wrapper = render(setup());

        const input = wrapper.getByTestId("page-input");

        expect(input.props.value).toBe(SELECTED_PAGE.toString());

        const newPage = "16";

        fireEvent.changeText(input, newPage);

        expect(mockedNavigation.dispatch).toHaveBeenCalledWith(
            expect.objectContaining({
                "payload": Number(newPage), 
                "type": "clientsReducer/changeSelectedPage"
            })
        );
    })
})