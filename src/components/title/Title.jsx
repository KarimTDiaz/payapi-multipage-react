import { StyledTitle } from './styles';

const Title = ({ children, dark }) => {
	return <StyledTitle dark={dark}>{children}</StyledTitle>;
};

export default Title;
