import styled from 'styled-components';
import { COLORS, FONTS_FAM, FONTS_SIZE } from '../../constants/variables';

const StyledText = styled.p`
	margin-bottom: 2rem;
	font-size: ${FONTS_SIZE.xxxs};
	font-family: ${FONTS_FAM.secondary};
	line-height: 1.75rem;
	color: ${({ dark }) =>
		dark ? `${COLORS.secondary.textDark}` : `${COLORS.secondary.textLight}`};
`;

export { StyledText };
