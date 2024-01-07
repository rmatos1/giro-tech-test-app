import { render } from '@testing-library/react-native';
import { AuthModal } from '../authModal';

const setup = () => {
    return(
        <AuthModal />
    )
}

describe("<AuthModal />", () => {
    test("should render correctly", () => {

        const wrapper = render(setup());

        expect(wrapper).toBeDefined();
    })
})