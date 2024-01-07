import { render } from '@testing-library/react-native';
import { Clients } from '../clients';
import { TestComponent } from '../../../components';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store'
import { StoreProps } from '../../../types';
import { initialMockStore } from '../../../constants';
import { useDispatch } from 'react-redux';
import { MAX_DISPLAYED_CLIENTS_PER_PAGE } from '../clientsHelper.hook';

const mockStore = configureStore<StoreProps>();

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));

const mockedNavigation = {
    dispatch: jest.fn(),
};

const setup = () => {
    const store: MockStoreEnhanced<StoreProps> = mockStore({
        ...initialMockStore,
        clients: {
            selectedPage: 1
        }
    });

    (useDispatch as jest.Mock).mockReturnValue(mockedNavigation.dispatch);

    return(
        <TestComponent customStore={store}>
            <Clients />
        </TestComponent>
    )
}

describe("<Clients />", () => {
    test("should render the defined maximum number of clients' cards", () => {

        const wrapper = render(setup());

        const clientsCards = wrapper.getAllByTestId("client-card");

        expect(clientsCards.length).toBe(MAX_DISPLAYED_CLIENTS_PER_PAGE)
    })
}) 