import { render, fireEvent } from "@testing-library/react-native";
import { TestComponent } from "../../testComponent";
import { TopBar } from "../topBar";
import { DrawerActions } from "@react-navigation/native";

jest.mock('@react-navigation/native');

const mockedNavigation = {
    navigate: jest.fn(),
    dispatch: jest.fn(),
};

const setup = () => {
    return(
        <TestComponent>
            <TopBar />
        </TestComponent>
    )
}

describe("<TopBar />", () => {

    beforeEach(() => {
        jest.spyOn(require('@react-navigation/native'), 'useNavigation').mockReturnValue(mockedNavigation);
    });


    test("should render the menu button and should open the drawer on press", () => {

        const wrapper = render(setup())

        const menuButton = wrapper.getByTestId("menu-button");

        expect(menuButton).toBeDefined();

        fireEvent.press(menuButton);

        expect(mockedNavigation.dispatch).toHaveBeenCalledWith(DrawerActions.openDrawer());
    })

    test("should render the logo", () => {

        const wrapper = render(setup())

        const logo = wrapper.getByTestId("logo");

        expect(logo).toBeDefined();
    })
})