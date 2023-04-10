import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const StyledTitle = styled.h2`
	color: ${({ dark }) =>
		dark ? `${COLORS.secondary.textDark}` : `${COLORS.secondary.textLight}`};
`;

export { StyledTitle };
