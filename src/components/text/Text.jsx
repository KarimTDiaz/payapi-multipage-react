import { StyledText } from "./styles"

const Text = ({ text, children }) => {
    return <StyledText>{text}{children}</StyledText>
}

export default Text 