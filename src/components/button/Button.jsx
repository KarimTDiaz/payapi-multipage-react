import { BUTTONS } from "../../constants/buttons"
import { PrimaryButton, SecondaryButton } from "./styles"

const Button = ({ type, children }) => {
    switch (type) {
        case BUTTONS.PRIMARY:
            return <PrimaryButton>{children}</PrimaryButton>
        case BUTTONS.SECONDARY:
            return <SecondaryButton>{children}</SecondaryButton>
        default:
            return <PrimaryButton>{children}</PrimaryButton>
    }
}

export default Button