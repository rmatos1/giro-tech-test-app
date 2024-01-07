import { fireEvent, render } from '@testing-library/react-native';
import { Permissions } from '../permissions';
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
            <Permissions />
        </TestComponent>
    )
}

describe("<Permission />", () => {
    test("should render twelve switches and call dispatch on toggle", () => {

        const wrapper = render(setup());

        const switches = wrapper.getAllByTestId("permission-switch");

        expect(switches.length).toBe(12)

        fireEvent(switches[0], 'valueChange', false);

        expect(mockedNavigation.dispatch).toHaveBeenCalledWith({
            "payload": { admin: false }, 
            "type": "permissionsReducer/changeManageIndicators"
        });
    })
}) 