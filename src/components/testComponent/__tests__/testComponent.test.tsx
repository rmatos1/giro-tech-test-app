import { render } from "@testing-library/react-native";
import { TestComponent } from "../testComponent";
import { View } from "react-native";

const setup = () => {
    return(
        <TestComponent>
            <View testID="children-element" />
        </TestComponent>
    )
}

describe("<TestComponent />", () => {
    test("should render the defined children element", () => {

        const wrapper = render(setup());

        const children = wrapper.queryByTestId("children-element");

        expect(children).toBeDefined();
    })
})