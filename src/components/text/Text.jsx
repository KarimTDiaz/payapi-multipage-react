import { StyledText } from './styles';

const Text = ({ text, children, dark }) => {
	return (
		<StyledText dark={dark}>
			{text}
			{children}
		</StyledText>
	);
};

export default Text;
