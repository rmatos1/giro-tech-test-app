import { render, fireEvent } from "@testing-library/react-native";
import { TestComponent } from "../../../testComponent";
import { ClientsListHeader } from "../clientsListHeader";

const defaultProps = {
    onOpenWarningModal: jest.fn()
}

const setup = () => {
    return(
        <TestComponent>
            <ClientsListHeader {...defaultProps} />
        </TestComponent>
    )
}

describe("<ClientsListHeader />", () => {

    test("should render the four buttons and call onOpenWarningModal on press", () => {
        const wrapper = render(setup());

        const icons = wrapper.getAllByTestId("icon");

        expect(icons.length).toBe(4);

        fireEvent.press(icons[0]);

        expect(defaultProps.onOpenWarningModal).toHaveBeenCalled()
    })
})