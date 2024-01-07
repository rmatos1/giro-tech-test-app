import { fireEvent, render } from '@testing-library/react-native';
import { DrawerContent } from '../drawerContent';
import { DrawerActions } from '@react-navigation/native';
import { TestComponent } from '../../testComponent';

jest.mock('@react-navigation/native');

const mockedNavigation = {
    navigate: jest.fn(),
    dispatch: jest.fn(),
};

const setup = () => {
    return(
        <TestComponent>
            <DrawerContent />
        </TestComponent>
    )
}

describe("<DrawerContent />", () => {
    beforeEach(() => {
        jest.spyOn(require('@react-navigation/native'), 'useNavigation').mockReturnValue(mockedNavigation);
    });

    test("should render the logo", () => {

        const wrapper = render(setup());

        const logo = wrapper.getByTestId("logo-giro");

        expect(logo).toBeDefined();
    })

    test("should render the user info", () => {
        const wrapper = render(setup());

        const name = wrapper.getByTestId("name");

        expect(name).toBeDefined();

        const email = wrapper.getByTestId("email");

        expect(email).toBeDefined();
    })

    test("should render three links", () => {
        const wrapper = render(setup());

        const links = wrapper.queryAllByTestId("link");

        expect(links.length).toBe(3);
    })

    test("should jump to a new screen on press", () => {

        const wrapper = render(setup());

        const links = wrapper.queryAllByTestId("link");

        fireEvent.press(links[1]);

        expect(mockedNavigation.dispatch).toHaveBeenCalledWith(DrawerActions.jumpTo(links[1].props.target as string));
    })
})